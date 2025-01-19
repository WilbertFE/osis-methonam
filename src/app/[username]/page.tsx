import { Spacer } from "@nextui-org/react";
import { Hero, Info, Settings } from "./components";

export default async function page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const username = (await params).username;

  return (
    <>
      <Spacer y={6} />
      <Hero />
      <Spacer y={6} />
      <Info />
      <Spacer y={6} />
      <Settings />
    </>
  );
}
