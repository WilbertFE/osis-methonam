import { Hero, Info, Settings } from "./components";
import { getUserByUsername } from "@/lib/firebase/service";
import { User } from "@/types/User";

export default async function page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const username = (await params).username;
  const user: User | null | undefined = await getUserByUsername(
    username,
    ({ status, user }: { status: boolean; user: User | null }) => {
      if (!status) return null;
      return user;
    }
  );

  return (
    <>
      <Hero user={user} />
      <Info />
      <Settings />
    </>
  );
}
