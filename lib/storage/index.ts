import { uploadBucketFile } from "./bucket";
import { uploadLocalFile } from "./local";

export type UploadResult = {
  filename: string;
  path: string;
  mimeType: string;
  size: number;
};

type UploadOptions = {
  file: File;
  directory?: string;
};

export async function uploadFile(options: UploadOptions): Promise<UploadResult> {
  if (process.env.NODE_ENV === "production") {
    return uploadBucketFile(options);
  }

  return uploadLocalFile(options);
}
