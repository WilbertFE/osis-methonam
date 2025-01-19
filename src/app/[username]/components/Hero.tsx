import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
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
        <h1 className="font-bold text-lg tracking-wide">Wilbert Bernardi</h1>
        <span>@wilbertfe</span>
      </div>
      <Spacer y={2} />
      <Button>Edit profile</Button>
    </div>
  );
}
