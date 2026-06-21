"use client";
import { ListBox } from "@heroui/react";
import Link from "next/link";
import React from "react";

interface LayoutNavbarProps {
  items: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];
}
const LayoutNavbar: React.FC<LayoutNavbarProps> = (props) => {
  return (
    <ListBox>
      {props.items.map((item, i) => (
        <ListBox.Item id={`nav-${i}`} key={`nav-${i}`} textValue={item.label}>
          <Link href={item.href} className="flex gap-2 items-center">
            {item.icon}
            {item.label}
          </Link>
          <ListBox.ItemIndicator />
        </ListBox.Item>
      ))}
    </ListBox>
  );
};

export default LayoutNavbar;
