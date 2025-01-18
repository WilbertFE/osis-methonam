/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-async-client-component */
"use client";

import { Journal } from "@/components/fragments";
import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";

export default function Journals() {
  return (
    <div className="w-full flex flex-col pt-36 pb-32 px-8">
      <h1 className="text-center font-bold text-3xl tracking-wide">Jurnal</h1>

      <div className="flex flex-col items-center gap-y-6">
        {[1, 2, 3].map((val, i) => (
          <>
            <Spacer y={2} />
            <Journal key={i} />
          </>
        ))}
        <Spacer y={4} />
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
