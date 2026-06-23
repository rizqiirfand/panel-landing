import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export async function uploadLocalFile({
  file,
  directory = "others",
}: {
  file: File;
  directory?: string;
}) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = file.name.split(".").pop() ?? "";

  const filename = `${randomUUID()}.${ext}`;

  const uploadDir = path.join(process.cwd(), "public", "uploads", directory);

  await mkdir(uploadDir, {
    recursive: true,
  });

  await writeFile(path.join(uploadDir, filename), buffer);

  return {
    filename,
    mimeType: file.type,
    size: file.size,
    path: `/uploads/${directory}/${filename}`,
  };
}
