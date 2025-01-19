import { Separator } from "@/components/ui/separator";
import { MoveRight, SquareUserRound, StickyNote } from "lucide-react";

export default function Info() {
  return (
    <div className="w-full flex flex-col px-4 gap-y-2">
      <span>Profile</span>
      <div className="flex flex-col border p-3 rounded-lg">
        <div className="flex gap-x-2">
          <SquareUserRound />
          <span className="flex-1 line-clamp-1">Info</span>
          <MoveRight />
        </div>
        <Separator className="my-2" />
        <div className="flex gap-x-2">
          <StickyNote />
          <span className="flex-1 line-clamp-1">Posts</span>
          <MoveRight />
        </div>
      </div>
    </div>
  );
}
