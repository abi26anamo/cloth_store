import React from "react";
import AdminNav from "../components/Admin/AdminNav";

export const metadata = {
  title: "Ethio-shop Admin",
  description: "Ethio-shop Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
