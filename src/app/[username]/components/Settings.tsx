"use client";

import { User } from "@/types/User";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export default function Settings({ user }: { user: User | null | undefined }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: session }: any = useSession();
  return (
    <>
      {session?.user.username === user?.username && (
        <div className="w-full flex flex-col px-4 gap-y-2">
          <span>Settings</span>
          <div className="flex flex-col border p-3 rounded-lg">
            <div
              className="flex gap-x-2 cursor-pointer"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <LogOut color="#ff0000" />
              <span className="flex-1 line-clamp-1 text-red-600">Log out</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
