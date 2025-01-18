/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-async-client-component */
"use client";

import { Journal } from "@/components/fragments";
import { Spacer } from "@nextui-org/react";

export default function Journals() {
  return (
    <div className="w-full flex flex-col pt-36 pb-32 px-8">
      <h1 className="text-center font-bold text-3xl tracking-wide">Jurnal</h1>
      <Spacer y={8} />
      <div className="flex flex-col items-center gap-y-6">
        {[1, 2, 3, 4, 5].map((val, i) => (
          <Journal key={i} />
        ))}
      </div>
    </div>
  );
}
