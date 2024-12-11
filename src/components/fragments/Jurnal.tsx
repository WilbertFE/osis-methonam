import { Spacer } from "@nextui-org/spacer";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
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
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Jurnal() {
  return (
    <div className="w-full flex flex-col pt-36 pb-32 px-8">
      <h1 className="text-center font-bold text-3xl tracking-wide">Jurnal</h1>
      <Spacer y={8} />
      <div className="flex flex-col items-center gap-y-6">
        {...new Array(5).fill("").map((e, i) => (
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
              <Drawer>
                <DrawerTrigger>
                  <Button>Lihat detail</Button>{" "}
                </DrawerTrigger>
                <DrawerContent className="">
                  <DrawerHeader>
                    <DrawerTitle>Hari Sumpah Pemuda</DrawerTitle>
                    <DrawerDescription>cr : Tia & Nesya</DrawerDescription>
                    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4 mx-auto text-justify">
                      Jokester began sneaking into the castle in the middle of
                      the night and leaving jokes all over the place: under the
                      kings pillow, in his soup, even in the royal toilet. The
                      king was furious, but he couldnt seem to stop Jokester.
                      And then, one day, the people of the kingdom discovered
                      that the jokes left by Jokester were so funny that they
                      couldnt help but laugh. And once they started laughing,
                      they couldnt stop.
                    </ScrollArea>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
