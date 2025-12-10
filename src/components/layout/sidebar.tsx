import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  FaChartPie,
  FaUsers,
  FaClipboardList,
  FaQuestionCircle,
} from "react-icons/fa";

const MENU_ITEMS = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: FaChartPie,
  },
  {
    label: "User Management",
    path: "/admin/users",
    icon: FaUsers,
  },
  {
    label: "Quiz Management",
    path: "/admin/quizzes",
    icon: FaClipboardList,
  },
  {
    label: "Question Bank",
    path: "/admin/questions",
    icon: FaQuestionCircle,
  },
];

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden w-64 flex-col border-r bg-card md:flex">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="tracking-tight">Menu</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="grid gap-1 px-2">
          {MENU_ITEMS.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path);

            return (
              <Link
                key={index}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
