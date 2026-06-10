/** Inbox for messages from the site contact form. */
export const CONTACT_FORM_RECIPIENT = "tsalem@renewegypt.com";

const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_FORM_RECIPIENT)}`;

/**
 * Sends contact form data to the configured inbox (via FormSubmit).
 * @param {{ fullName: string; email: string; phone: string; company: string; locations: string; message: string }} fields
 * @returns {Promise<{ ok: true } | { ok: false; message: string }>}
 */
export async function submitContactForm(fields) {
  const { fullName, email, phone, company, locations, message } = fields;

  let response;
  try {
    response = await fetch(FORMSUBMIT_AJAX, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: fullName,
        email,
        phone,
        company,
        locations,
        message,
        // FormSubmit does not allow changing the "From" name (stays "FormSubmit").
        // A clear subject makes messages easy to spot in the inbox.
        _subject: `[Renew] ${fullName} — website contact`,
        _replyto: email,
        _template: "table",
      }),
    });
  } catch {
    return { ok: false, message: "Network error. Check your connection and try again." };
  }

  let data;
  try {
    data = await response.json();
  } catch {
    return { ok: false, message: "Invalid response from server." };
  }

  const successFlag = data.success === true || data.success === "true";
  if (response.ok && successFlag) {
    return { ok: true };
  }

  const msg =
    typeof data.message === "string" && data.message
      ? data.message
      : "Could not send your message. Please try again.";
  return { ok: false, message: msg };
}
