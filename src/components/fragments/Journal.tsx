import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spacer,
} from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { ScrollArea } from "../ui/scroll-area";
import { Chip } from "@nextui-org/react";

export default function Journal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">journal title</p>
            <p className="text-small text-default-500">journal date</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="line-clamp-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            sequi! Necessitatibus culpa sint, tempore omnis rerum ipsa repellat
            saepe, in quas veniam rem fugiat reiciendis consequatur? Velit illum
            necessitatibus possimus?
          </p>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-around">
          <Button color="primary" onPress={onOpen}>
            Detail
          </Button>
          <Chip>Tia & Nesya</Chip>
        </CardFooter>
      </Card>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 mt-14">
                Journal title
              </DrawerHeader>
              <DrawerBody>
                <ScrollArea className="h-full w-full rounded-md">
                  <Image
                    src="/img/osis.jpg"
                    alt="jurnal.jpg"
                    width={360}
                    height={360}
                    className="w-full rounded-lg"
                  />
                  <Spacer y={2} />
                  <p className="indent-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Pariatur dolores eligendi, modi recusandae nemo ipsum
                    quidem. Provident delectus distinctio officia?
                  </p>
                </ScrollArea>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Tutup
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                            Action
                          </Button> */}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
