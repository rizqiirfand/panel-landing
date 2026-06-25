import React from "react";
import { Button, ButtonRootProps, Spinner } from "@heroui/react";

const LoadingButton = (
  props: { isLoading: boolean; children: React.ReactNode } & ButtonRootProps,
) => {
  return (
    <Button isPending={props.isLoading} {...props}>
      {({ isPending }) => <>{isPending ? <Spinner color="current" size="sm" /> : props.children}</>}
    </Button>
  );
};

export default LoadingButton;
