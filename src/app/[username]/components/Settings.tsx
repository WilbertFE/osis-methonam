"use client";

import { Separator } from "@/components/ui/separator";
import {
  MoveRight,
  Settings as IconSettings,
  Settings2,
  LogOut,
} from "lucide-react";
import { signOut } from "next-auth/react";

export default function Settings() {
  return (
    <div className="w-full flex flex-col px-4 gap-y-2">
      <span>Settings</span>
      <div className="flex flex-col border p-3 rounded-lg">
        <div className="flex gap-x-2">
          <IconSettings />
          <span className="flex-1 line-clamp-1">General</span>
          <MoveRight />
        </div>
        <Separator className="my-2" />
        <div className="flex gap-x-2">
          <Settings2 />
          <span className="flex-1 line-clamp-1">Preferences</span>
          <MoveRight />
        </div>
        <Separator className="my-2" />
        <div
          className="flex gap-x-2 cursor-pointer"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <LogOut color="#ff0000" />
          <span className="flex-1 line-clamp-1 text-red-600">Log out</span>
        </div>
      </div>
    </div>
  );
}
