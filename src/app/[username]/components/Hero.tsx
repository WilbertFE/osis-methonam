import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User } from "@/types/User";

export default function Hero({ user }: { user: User | null | undefined }) {
  return (
    <div className="w-full flex flex-col px-4 items-center">
      <Image
        src="/img/osis.jpg"
        alt="fotbar"
        width={100}
        height={100}
        className="rounded-full"
      />
      <Spacer y={2} />
      <div className="text-center">
        <h1 className="font-bold text-lg tracking-wide">{user?.fullname}</h1>
        <span>@{user?.username}</span>
      </div>
      <Spacer y={2} />
      <Button>Edit profile</Button>
    </div>
  );
}
