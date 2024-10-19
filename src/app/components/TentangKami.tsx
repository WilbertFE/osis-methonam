// import { TracingBeam } from "@/components/ui/tracing-beam";
import { Spacer } from "@nextui-org/spacer";
import { TracingBeamDemo as InformasiOSIS } from "../../components/blocks/TrackingBeamDemo";

export default function TentangKami() {
  return (
    <div className="w-full flex flex-col pt-36 pb-32">
      <h1 className="text-3xl tracking-wider font-bold">Tentang Kami</h1>
      <Spacer y={4} />
      <InformasiOSIS />
    </div>
  );
}
