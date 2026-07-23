import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(".");
const SOURCE_EXTENSIONS = new Set([".jsx", ".js", ".css", ".tsx", ".ts"]);

async function collectSourceFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === "dist") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (SOURCE_EXTENSIONS.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const files = await collectSourceFiles(ROOT);
  let updatedFiles = 0;

  for (const filePath of files) {
    const original = await fs.readFile(filePath, "utf8");
    const updated = original.replace(/\.png\b/g, ".webp");

    if (updated !== original) {
      await fs.writeFile(filePath, updated, "utf8");
      updatedFiles += 1;
      console.log(`Updated: ${path.relative(ROOT, filePath)}`);
    }
  }

  console.log(`\nUpdated ${updatedFiles} file(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
