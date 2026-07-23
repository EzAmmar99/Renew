import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS_DIR = path.resolve("src/assets");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

async function collectImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (IMAGE_EXTENSIONS.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

function getResizeOptions(fileSize, width) {
  if (fileSize >= 500 * 1024 || width > 1920) {
    return { maxWidth: 1600, quality: 80 };
  }

  if (fileSize >= 100 * 1024 || width > 1200) {
    return { maxWidth: 1200, quality: 82 };
  }

  return { maxWidth: null, quality: 85 };
}

async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath);
  const outputPath = inputPath.slice(0, -ext.length) + ".webp";
  const originalStat = await fs.stat(inputPath);
  const metadata = await sharp(inputPath).metadata();
  const { maxWidth, quality } = getResizeOptions(
    originalStat.size,
    metadata.width ?? 0,
  );

  let pipeline = sharp(inputPath);

  if (maxWidth && (metadata.width ?? 0) > maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, {
      withoutEnlargement: true,
      fit: "inside",
    });
  }

  await pipeline.webp({ quality, effort: 4 }).toFile(outputPath);

  const optimizedStat = await fs.stat(outputPath);
  const savedPct = (
    ((originalStat.size - optimizedStat.size) / originalStat.size) *
    100
  ).toFixed(1);

  console.log(
    `${path.basename(inputPath)} → ${path.basename(outputPath)} | ${(originalStat.size / 1024).toFixed(0)}KB → ${(optimizedStat.size / 1024).toFixed(0)}KB (-${savedPct}%)`,
  );

  return {
    inputPath,
    outputPath,
    originalSize: originalStat.size,
    optimizedSize: optimizedStat.size,
  };
}

async function main() {
  const images = await collectImages(ASSETS_DIR);

  if (!images.length) {
    console.log("No images found.");
    return;
  }

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const imagePath of images) {
    const result = await optimizeImage(imagePath);
    totalOriginal += result.originalSize;
    totalOptimized += result.optimizedSize;
    await fs.unlink(result.inputPath);
  }

  console.log(
    `\nTotal: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalOptimized / 1024 / 1024).toFixed(1)}MB (-${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%)`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
