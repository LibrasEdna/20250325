"use client";
import Link from "next/link";

const navigationItems = [
  { path: "/staff/profile", label: "My Profile" },
  { path: "/staff/members", label: "Members" },
  { path: "/staff/teachers", label: "Teacher Enrollment" },
  { path: "/staff/classes", label: "Classes" },
  { path: "/staff/teachers/registrations", label: "Teacher Registration" },
];

export default function StaffLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link
                className={`text-lg focus:text-neutral-content focus:bg-neutral`}
                href={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
