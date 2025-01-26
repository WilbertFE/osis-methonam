"use client";
import { Separator } from "@/components/ui/separator";
import { User } from "@/types/User";
import { MoveRight, SquareUserRound, StickyNote } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Info({ user }: { user: User | null | undefined }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: session }: any = useSession();
  return (
    <>
      {session?.user.username === user?.username && (
        <div className="w-full flex flex-col px-4 gap-y-2">
          <span>Profile</span>
          <div className="flex flex-col border p-3 rounded-lg">
            <div className="flex gap-x-2 cursor-pointer">
              <SquareUserRound />
              <span className="flex-1 line-clamp-1">Info</span>
              <MoveRight />
            </div>
            <Separator className="my-2" />
            <div className="flex gap-x-2 cursor-pointer">
              <StickyNote />
              <span className="flex-1 line-clamp-1">Posts</span>
              <MoveRight />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
