"use client";

import {
  // BadgeCheck,
  // Bell,
  ChevronsUpDown,
  // CreditCard,
  LogOut,
  // Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/features/auth/hooks/useUser";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "@/features/auth/types";

export default function NavUser({
  className,
  isSidebar = false,
}: {
  className?: string;
  isSidebar?: boolean;
}) {
  const { data: user, isLoading } = useUser();
  const { logout } = useAuth();
  if (isLoading) return <Skeleton className="w-12 h-12 rounded-full mx-4" />;

  if (!user) return null;
  if (isSidebar) {
    return (
      <NavUserSideBarVersion
        user={user!}
        className={className}
        logout={logout}
      />
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={`${className} md:flex mx-4`}>
        <Button variant="ghost" className="w-12 h-12 rounded-full">
          <Avatar className="h-12 w-12 rounded-full">
            <AvatarImage src={user?.image_url} alt={user?.fullname} />
            <AvatarFallback className="rounded-full">
              {`${user?.fullname[0]}${user?.fullname[1]}`}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user?.image_url} alt={user?.fullname} />
              <AvatarFallback className="rounded-lg">
                {user?.fullname && user.fullname.length > 1
                  ? `${user.fullname[0]}${user.fullname[1]}`
                  : ""}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user?.fullname}</span>
              <span className="truncate text-xs">{user?.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup> */}
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheck />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <LogOut />
          Se deconnecter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NavUserSideBarVersion({
  user,
  className,
  logout,
}: {
  user: User;
  className?: string;
  logout: () => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={`${className} md:flex w-full h-9 py-6`}
      >
        <Button
          size="lg"
          variant="outline"
          className="w-full flex items-center justify-between"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={user?.image_url} alt={user?.fullname} />
            <AvatarFallback className="rounded-lg">{`${user?.fullname[0]}${user?.fullname[1]}`}</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{user?.fullname}</span>
            <span className="truncate text-xs">{user?.email}</span>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user?.image_url} alt={user?.fullname} />
              <AvatarFallback className="rounded-lg">
                {user?.fullname && user.fullname.length > 1
                  ? `${user.fullname[0]}${user.fullname[1]}`
                  : ""}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user?.fullname}</span>
              <span className="truncate text-xs">{user?.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup> */}
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheck />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="cursor-pointer">
          <LogOut />
          Se deconnecter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
