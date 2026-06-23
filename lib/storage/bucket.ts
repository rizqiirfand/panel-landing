import { randomUUID } from "crypto";

export async function uploadBucketFile({
  file,
  directory = "others",
}: {
  file: File;
  directory?: string;
}) {
  const ext = file.name.split(".").pop() ?? "";

  const filename = `${randomUUID()}.${ext}`;

  /**
   * nanti:
   * await bucket.put(...)
   */

  return {
    filename,
    mimeType: file.type,
    size: file.size,
    path: `https://cdn.example.com/${directory}/${filename}`,
  };
}
