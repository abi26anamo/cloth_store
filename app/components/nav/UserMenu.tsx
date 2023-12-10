"use client";
import { Avatar, MenuItem } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import BackDrop from "./BackDrop";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types/index";

interface UserMenuProps {
  currentUser: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleMenu}
          className="p-2 border-[1px] flex items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        >
          {/* src ={currentUser?.image} */}
          <Avatar />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            {currentUser ? (
              <div>
                <Link href="orders">
                  <MenuItem onClick={toggleMenu}> Your Orders</MenuItem>
                </Link>
                {currentUser.role === "ADMIN" && (
                  <Link href="admin">
                    <MenuItem onClick={toggleMenu}> Admin Dashboard</MenuItem>
                  </Link>
                )}
                <MenuItem
                  onClick={() => {
                    toggleMenu();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <MenuItem onClick={toggleMenu}> Login</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={toggleMenu}> Register</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleMenu} /> : null}
    </>
  );
};

export default UserMenu;
