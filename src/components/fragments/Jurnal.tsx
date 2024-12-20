/* eslint-disable @next/next/no-async-client-component */
"use client";

import { Chip, Spacer } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { getJournals } from "@/lib/firebase/service";

export default async function Jurnal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const journals = await getJournals();

  return (
    <div className="w-full flex flex-col pt-36 pb-32 px-8">
      <h1 className="text-center font-bold text-3xl tracking-wide">Jurnal</h1>
      <Spacer y={8} />
      <div className="flex flex-col items-center gap-y-6">
        {journals.map((journal, i) => (
          <div key={i}>
            <Card className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{journal.title}</p>
                  <p className="text-small text-default-500">{journal.date}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="line-clamp-4">{journal.content}</p>
              </CardBody>
              <Divider />
              <CardFooter className="flex justify-around">
                <Button color="primary" onPress={onOpen}>
                  Detail
                </Button>
                <Chip>{journal.author}</Chip>
              </CardFooter>
            </Card>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
              <DrawerContent>
                {(onClose) => (
                  <>
                    <DrawerHeader className="flex flex-col gap-1">
                      {journal.title}
                    </DrawerHeader>
                    <DrawerBody>{journal.content}</DrawerBody>
                    <DrawerFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </DrawerFooter>
                  </>
                )}
              </DrawerContent>
            </Drawer>
          </div>
        ))}
      </div>
    </div>
  );
}
