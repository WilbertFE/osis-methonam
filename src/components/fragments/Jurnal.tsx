import { Spacer } from "@nextui-org/react";
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

export default function Jurnal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full flex flex-col pt-36 pb-32 px-8">
      <h1 className="text-center font-bold text-3xl tracking-wide">Jurnal</h1>
      <Spacer y={8} />
      <div className="flex flex-col items-center gap-y-6">
        {...new Array(5).fill("").map((e, i) => (
          <>
            <Card key={i} className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">NextUI</p>
                  <p className="text-small text-default-500">nextui.org</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  totam dolorem earum dolores corporis placeat cumque quae
                  expedita voluptates. Eius voluptatibus excepturi nisi tempora
                  inventore possimus deserunt impedit nesciunt. Repellat.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button color="primary" onPress={onOpen}>
                  Detail
                </Button>
              </CardFooter>
            </Card>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
              <DrawerContent>
                {(onClose) => (
                  <>
                    <DrawerHeader className="flex flex-col gap-1">
                      Drawer Title
                    </DrawerHeader>
                    <DrawerBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor
                        cupidatat consequat elit dolor adipisicing. Mollit dolor
                        eiusmod sunt ex incididunt cillum quis. Velit duis sit
                        officia eiusmod Lorem aliqua enim laboris do dolor
                        eiusmod. Et mollit incididunt nisi consectetur esse
                        laborum eiusmod pariatur proident Lorem eiusmod et.
                        Culpa deserunt nostrud ad veniam.
                      </p>
                    </DrawerBody>
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
          </>
        ))}
      </div>
    </div>
  );
}
