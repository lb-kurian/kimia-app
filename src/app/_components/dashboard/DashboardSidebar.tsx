"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  LayoutDashboard,
  Lightbulb,
  FileText,
  FolderOpen,
  Settings,
  CreditCard,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";

const menuStructure = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  {
    name: "Idea Lab",
    icon: Lightbulb,
    href: "/idea-lab",
    subItems: [
      { name: "Brainstorming", href: "/idea-lab/brainstorming" },
      { name: "Trend Discovery", href: "/idea-lab/trend-discovery" },
      { name: "Prompt Collection", href: "/idea-lab/prompt-collection" },
      { name: "AI History", href: "/idea-lab/ai-history" },
    ],
  },
  {
    name: "Content Lab",
    icon: FileText,
    href: "/content-lab",
    subItems: [
      { name: "Smart Publisher", href: "/content-lab/smart-publisher" },
      { name: "Automation", href: "/content-lab/automation" },
      { name: "1-click Reanimation", href: "/content-lab/reanimation" },
    ],
  },
  {
    name: "Assets",
    icon: FolderOpen,
    href: "/assets",
    subItems: [
      { name: "Contents (Posts)", href: "/assets/contents" },
      { name: "Calendar", href: "/assets/calendar" },
      { name: "Media Library", href: "/assets/media-library" },
      { name: "Media Templates", href: "/assets/media-templates" },
      { name: "Social Accounts", href: "/assets/social-accounts" },
    ],
  },
];

interface UserDetails {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  subscription_tier?: string;
}

export function DashboardSidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();
  const supabase = createClientComponentClient();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  useEffect(() => {
    async function fetchUserDetails() {
      try {
        setLoading(true);
        const {
          data: { user },
        } = await supabase.auth.getUser();
        console.log("uuuuuu", user);
        if (error) throw error;
        if (user) {
          setUserDetails({
            id: user.id,
            email: user.email!,
            full_name: user.email,
            avatar_url: "",
            subscription_tier:  "Free Plan",
          });
        }

        // if (user) {
        //   const { data, error } = await supabase
        //     .from("user_profiles")
        //     .select("id,full_name, avatar_url, subscription_tier")
        //     .eq("id", user.id)
        //     .single()

        //   if (error) throw error

        //   setUserDetails({
        //     id: user.id,
        //     email: user.email!,
        //     full_name: user.email,
        //     avatar_url: data?.avatar_url || '',
        //     subscription_tier: data?.subscription_tier || "Free Plan",
        //   })
        // }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Failed to load user details");
      } finally {
        setLoading(false);
      }
    }

    fetchUserDetails();
  }, [supabase]);

  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const isActive = (href: string) => pathname === href;

  return (
    <div className="w-64 h-screen border-r border-[#E8E8E8] flex flex-col bg-[#FFFFFF]">
      <div className="px-6 py-4 border-b border-[#E8E8E8]">
        <div className="text-4xl font-bold text-[#038BAF] font-gugi">K MIA</div>
      </div>
      <nav className="flex-1 overflow-y-auto px-4 py-2">
        {menuStructure.map((item) => (
          <div key={item.name} className="mb-2">
            <button
              onClick={() => toggleExpanded(item.name)}
              className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors ${
                isActive(item.href)
                  ? "text-[#F57618] bg-[#EBFAFF]"
                  : "text-[#313D4F] hover:bg-[#F5F5F5]"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="flex-1 text-sm font-medium text-left">
                {item.name}
              </span>
              {item.subItems &&
                (expandedItems.includes(item.name) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                ))}
            </button>
            {item.subItems && expandedItems.includes(item.name) && (
              <div className="ml-7 mt-2 space-y-1">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(subItem.href)
                        ? "text-[#F57618] bg-[#EBFAFF]"
                        : "text-[#313D4F] hover:bg-[#F5F5F5]"
                    }`}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-[#E8E8E8]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-[#F5F5F5] transition-colors duration-200"
            >
              <Avatar>
                <AvatarImage
                  src={
                    userDetails?.avatar_url ||
                    "/placeholder.svg?height=32&width=32"
                  }
                  alt="User"
                />
                <AvatarFallback>
                  {userDetails?.full_name?.[0] ||
                    userDetails?.email?.[0] ||
                    "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                {loading ? (
                  <p className="text-sm font-medium text-[#313D4F]">
                    Loading...
                  </p>
                ) : error ? (
                  <p className="text-sm font-medium text-red-500">
                    Error loading user
                  </p>
                ) : (
                  <>
                    <p className="text-sm font-medium text-[#313D4F]">
                      {userDetails?.full_name || userDetails?.email}
                    </p>
                    <p className="text-xs text-[#979797]">
                      {userDetails?.subscription_tier}
                    </p>
                  </>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-[#313D4F]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuItem>
              <Link href="/settings" className="flex items-center w-full">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/billing" className="flex items-center w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/notification" className="flex items-center w-full">
                <Bell className="mr-2 h-4 w-4" />
                <span>Notification</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/help" className="flex items-center w-full">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="#"
                onClick={handleSignOut}
                className="flex items-center w-full"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout Account</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
