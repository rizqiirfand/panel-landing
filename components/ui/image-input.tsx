import { useEffect, useMemo, useState } from "react";
import { CloseButton, ErrorMessage, Surface } from "@heroui/react";
import Dropzone from "react-dropzone";

const ImageInput: React.FC<{ inputName: string; required?: boolean }> = (props) => {
  const [imgPreview, setImgPreview] = useState<(File & { preview: string }) | null>(null);
  const isInvalid = useMemo(() => props.required && !imgPreview, [imgPreview]);
  useEffect(() => {
    return () => {
      if (imgPreview) URL.revokeObjectURL(imgPreview.preview);
    };
  }, [imgPreview]);

  return (
    <div>
      <Surface className="h-60 p-6 rounded-3xl shadow">
        <Dropzone
          multiple={false}
          onDrop={(acceptedFiles) => {
            // Ambil file pertama dan tambahkan properti 'preview' berupa URL sementara
            const selectedFile = acceptedFiles[0];
            if (selectedFile) {
              setImgPreview(
                Object.assign(selectedFile, {
                  preview: URL.createObjectURL(selectedFile),
                }),
              );
            }
          }}
          accept={{ "image/*": [] }}
        >
          {({ getRootProps, getInputProps, inputRef }) => (
            <div
              {...getRootProps({
                className: "h-full flex",
              })}
            >
              <input
                {...getInputProps({
                  name: props.inputName,
                  required: props.required,
                })}
              />
              {imgPreview ? (
                <div className="relative mx-auto text-center">
                  <img
                    src={imgPreview.preview}
                    alt="Preview"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "200px",
                      borderRadius: "4px",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                  />
                  <CloseButton
                    onClick={(e) => {
                      e.stopPropagation();
                      URL.revokeObjectURL(imgPreview.preview);
                      setImgPreview(null);
                      inputRef.current.value = "";
                    }}
                    className="absolute -top-2 -right-2"
                  />
                </div>
              ) : (
                <div className="bg-gray-50 text-muted rounded-3xl border-dashed border-2 p-4 text-center text-sm flex flex-col justify-center items-center h-full w-full">
                  Drag 'n' drop some files here, or click to select files
                </div>
              )}
            </div>
          )}
        </Dropzone>
      </Surface>
      <ErrorMessage className="mt-4">
        {!!isInvalid && <>Please select at least one category</>}
      </ErrorMessage>
    </div>
  );
};

export default ImageInput;
