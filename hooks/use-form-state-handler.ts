import { toast } from "@heroui/react";
import { useState } from "react";

const useFormStateHandler = () => {
  const [formIsLoading, setFormIsLoading] = useState<boolean>(false);
  const submitForm = async (props: {
    dataForm: HTMLFormElement;
    api: (data: FormData) => Promise<any>;
    onSucces?: (data: any) => void;
    onError?: () => void;
  }) => {
    const formData = new FormData(props.dataForm);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    setFormIsLoading(true);
    try {
      const res = await props.api(formData);
      if (res.success) {
        toast("Success", {
          actionProps: {
            children: "Dismiss",
            onPress: () => toast.clear(),
            variant: "tertiary",
          },
          description: res.message,
          variant: "success",
        });
        if (props.onSucces) props.onSucces(data);
      } else {
        toast("Error", {
          actionProps: {
            children: "Dismiss",
            onPress: () => toast.clear(),
            variant: "tertiary",
          },
          description: res.message,
          variant: "danger",
        });
        if (props.onError) props.onError();
      }
    } catch (error: any) {
      console.log(error);
      toast("Error", {
        actionProps: {
          children: "Dismiss",
          onPress: () => toast.clear(),
          variant: "tertiary",
        },
        description: "error",
        variant: "danger",
      });
      if (props.onError) props.onError();
    }
    setFormIsLoading(false);
  };
  return { formIsLoading, submitForm };
};

export default useFormStateHandler;
