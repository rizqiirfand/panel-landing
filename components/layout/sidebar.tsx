"use client";
import useNavigate from "@/hooks/use-navigate";
import { ListBox } from "@heroui/react";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarProps {
  items: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];
}
const Sidebar: React.FC<SidebarProps> = (props) => {
  const pathname = usePathname();
  const { navigateTo } = useNavigate();

  return (
    <ListBox>
      {props.items.map((item, i) => (
        <ListBox.Item
          id={`nav-${i}`}
          key={`nav-${i}`}
          className={`flex gap-2 items-center ${pathname.startsWith(item.href) ? "bg-default" : ""}`}
          textValue={item.label}
          onAction={() => navigateTo(item.href)}
        >
          {item.icon}
          {item.label}
          <ListBox.ItemIndicator />
        </ListBox.Item>
      ))}
    </ListBox>
  );
};

export default Sidebar;
