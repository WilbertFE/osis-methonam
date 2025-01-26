"use client";
import { User } from "@/types/User";
import { MoveRight, SquareUserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Info({ user }: { user: User }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: session }: any = useSession();
  // const [username, setUsername] = useState(user.username);
  // const [name, setName] = useState(user.fullname);
  // const [bio, setBio] = useState(user.bio);

  return (
    <>
      {session?.user.username === user?.username && (
        <div className="w-full flex flex-col px-4 gap-y-2">
          <span>Profile</span>
          <div className="flex flex-col border p-3 rounded-lg">
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex gap-x-2 cursor-pointer">
                  <SquareUserRound />
                  <span className="flex-1 line-clamp-1">Info</span>
                  <MoveRight />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] max-w-[320px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Edit profilmu. Simpan perubahan jika sudah yakin.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="bio" className="text-right">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      placeholder="Type your message here."
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* <Separator className="my-2" /> */}
            {/* <div className="flex gap-x-2 cursor-pointer">
              <StickyNote />
              <span className="flex-1 line-clamp-1">Posts</span>
              <MoveRight />
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
