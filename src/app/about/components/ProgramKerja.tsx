import { ExpandableCardDemo } from "@/components/blocks/expandable-card-demo";
import { Spacer } from "@nextui-org/spacer";

export default function ProgramKerja() {
  return (
    <div className="w-full flex flex-col pt-36 pb-32">
      <h1 className="text-center font-bold tracking-wide text-3xl">
        Program Kerja
      </h1>
      <Spacer y={8} />
      <div className="flex justify-center">
        <ExpandableCardDemo />
      </div>
    </div>
  );
}
