import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Spacer } from "@nextui-org/react";

export default function Agenda() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Jumat</p>
        <small className="text-default-500">17 Januari 2025</small>
        <h4 className="font-bold text-large">Classmeet Methonam</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
          height={270}
        />
      </CardBody>
      <CardFooter>
        <Drawer>
          <DrawerTrigger className="px-8 text-sm py-2 rounded-full bg-[#1ED760] text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
            {" "}
            Lihat
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Classmeet Methonam</DrawerTitle>
              <Spacer y={2} />
              <DrawerDescription>
                <ScrollArea className="w-full h-[400px] rounded-md">
                  <Image
                    width={360}
                    height={360}
                    src="/img/osis.jpg"
                    alt="osis"
                    className="w-full"
                  />
                  <Spacer y={4} />
                  <p className="indent-4 text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem porro iste totam veritatis voluptates in ex vitae, cum
                    doloremque magni suscipit deleniti velit, a nemo nobis dolor
                    at labore laudantium?
                  </p>
                </ScrollArea>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Tanya</Button>
              <DrawerClose>Tutup</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardFooter>
    </Card>
  );
}
