import LogoutButton from "@/components/auth/logout-button";
import LayoutNavbar from "@/components/layout/layout-navbar";
import { Surface } from "@heroui/react";
import { PiBoxArrowUpFill } from "react-icons/pi";
import { RiDashboard2Line } from "react-icons/ri";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-1 gap-3 p-3">
      <Surface className="rounded-3xl p-4" variant="default">
        <LayoutNavbar
          items={[
            {
              label: "Dashboard",
              href: "/admin/dashboard",
              icon: <RiDashboard2Line />,
            },
            { label: "Product", href: "/admin/product", icon: <PiBoxArrowUpFill /> },
          ]}
        />
      </Surface>
      <div className="flex-1">
        <Surface className="flex justify-end rounded-3xl p-4" variant="default">
          <LogoutButton />
        </Surface>
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
