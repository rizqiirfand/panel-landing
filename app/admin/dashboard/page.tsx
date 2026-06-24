"use client";

import useNavigate from "@/hooks/use-navigate";

export default function Dashboard() {
  const { renderComponentNavigate } = useNavigate();
  return (
    <div>
      Dashboard
      {renderComponentNavigate({
        type: "button",
        target: "/admin/product/create",
        children: "Create Product",
      })}
    </div>
  );
}
