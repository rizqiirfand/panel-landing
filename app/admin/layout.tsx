import LogoutButton from "@/components/auth/logout-button";
import LayoutNavbar from "@/components/layout/sidebar";
import { Surface } from "@heroui/react";
import { PiBoxArrowUpFill } from "react-icons/pi";
import { RiDashboard2Line } from "react-icons/ri";

const AdminLayout = ({
  drawer,
  children,
}: Readonly<{
  drawer: React.ReactNode;
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-1 gap-3 p-3">
      {drawer}
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
        <Surface className="mt-3 p-3 rounded-3xl">{children}</Surface>
      </div>
    </div>
  );
};

export default AdminLayout;
