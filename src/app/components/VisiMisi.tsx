import { Timeline } from "@/components/ui/timeline";
import { timeLineTypes } from "@/types/timeLineTypes";
import { Spacer } from "@nextui-org/spacer";

export default function VisiMisi() {
  const timeLineEntry: timeLineTypes[] = [
    {
      title: "tes",
      content: <div>Misi</div>,
    },
    {
      title: "tes",
      content: <div>Misi</div>,
    },
    {
      title: "tes",
      content: <div>Misi</div>,
    },
    {
      title: "tes",
      content: <div>Misi</div>,
    },
    {
      title: "tes",
      content: <div>Misi</div>,
    },
  ];
  return (
    <div className="w-full flex flex-col pt-36 pb-32">
      <h1 className="text-3xl font-bold tracking-wider text-center">
        Visi - Misi
      </h1>
      <Spacer y={5} />
      <Timeline data={timeLineEntry} />
    </div>
  );
}
