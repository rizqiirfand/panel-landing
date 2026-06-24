"use client";
import useNavigate from "@/hooks/use-navigate";
import { Drawer } from "@heroui/react";
import React from "react";

const LayoutDrawer = (props: { children: React.ReactNode }) => {
  const { navigateBack } = useNavigate();
  return (
    <div>
      <Drawer
        defaultOpen={true}
        onOpenChange={(isOpen) => {
          if (!isOpen) navigateBack();
        }}
      >
        <Drawer.Backdrop>{props.children}</Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default LayoutDrawer;
