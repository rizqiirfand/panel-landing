"use client";
import { ListBox } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface LayoutNavbarProps {
  items: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];
}
const LayoutNavbar: React.FC<LayoutNavbarProps> = (props) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleAction = (key: string) => {
    router.push(key);
  };
  return (
    <ListBox>
      {props.items.map((item, i) => (
        <ListBox.Item
          id={`nav-${i}`}
          key={`nav-${i}`}
          className={`flex gap-2 items-center ${pathname.startsWith(item.href) ? "bg-default" : ""}`}
          textValue={item.label}
          onAction={() => handleAction(item.href)}
        >
          {item.icon}
          {item.label}
          <ListBox.ItemIndicator />
        </ListBox.Item>
      ))}
    </ListBox>
  );
};

export default LayoutNavbar;
