"use client";

import { Button } from "@/components/ui/button";
import { User } from "@/types/User";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero({ user }: { user: User | null | undefined }) {
  return (
    <div className="w-full flex flex-col px-4 items-center">
      <Avatar className="w-16 h-16">
        <AvatarImage
          alt={user?.fullname}
          src={user?.image || "https://github.com/shadcn.png"}
        />
        <AvatarFallback>WFE</AvatarFallback>
      </Avatar>
      <div className="my-2"></div>
      <div className="text-center">
        <h1 className="font-bold text-lg tracking-wide line-clamp-1">
          {user?.fullname}
        </h1>
        <span className="line-clamp-1 text-sm">@{user?.username}</span>
      </div>
      <div className="my-2"></div>
      <Sheet>
        <SheetTrigger>
          <Button>Edit profile</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
