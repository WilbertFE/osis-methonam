import { Agenda } from "@/components/fragments";
import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";

export default function Agendas() {
  return (
    <div className="flex flex-col w-full pt-36 pb-32">
      <h1 className="text-center font-bold text-3xl tracking-wide">
        Agenda Terkini
      </h1>

      <div className="flex flex-col items-center gap-y-6">
        {[1, 2, 3].map((e, i) => (
          <div key={i}>
            <Spacer y={2} />
            <Agenda />
          </div>
        ))}
        <Link href="/journals">
          <Button
            color="success"
            variant="shadow"
            size="lg"
            className="text-white font-bold"
          >
            Lebih
          </Button>
        </Link>
      </div>
    </div>
  );
}
