import { Timeline as Visi } from "@/components/ui/timeline";
import { timeLineTypes } from "@/types/timeLineTypes";
import SolidaritasPhoto from "@/../public/img/solidaritas.jpeg";
import IntegritasPhoto from "@/../public/img/integritas.jpeg";
import KreatifitasPhoto from "@/../public/img/kreatifitas.jpeg";
import AkhlakPhoto from "@/../public/img/akhlak.jpeg";
import TeknologiPhoto from "@/../public/img/teknologi.jpeg";
import Image from "next/image";
import { Spacer } from "@nextui-org/spacer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FeaturesSectionDemo as Misi } from "@/components/blocks/features-section-demo-2";

export default function VisiMisi() {
  const timeLineEntry: timeLineTypes[] = [
    {
      title: "Solidaritas",
      content: (
        <div>
          <p>
            Mewujudkan lingkungan yang mengutamakan nilai kesatuan dan
            persatuan.
          </p>
          <Spacer y={3} />
          <div className="grid gap-x-2 grid-cols-2">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={SolidaritasPhoto}
                alt="solidaritas"
                fill
                className="rounded-lg w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      ),
    },
    {
      title: "Integritas",
      content: (
        <div>
          <p>
            Mewujudkan siswa siswi yang mampu mempertahankan nilai-nilai
            kejujuran.
          </p>
          <Spacer y={3} />
          <div className="grid gap-x-2 grid-cols-2">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={IntegritasPhoto}
                alt="integritas"
                fill
                className="rounded-lg w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      ),
    },
    {
      title: "Kreatifitas",
      content: (
        <div>
          <p>Mengjadikan OSIS sebagai sarana penunjang kreatifitas.</p>
          <Spacer y={3} />
          <div className="grid gap-x-2 grid-cols-2">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={KreatifitasPhoto}
                alt="kreatifitas"
                fill
                className="rounded-lg w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      ),
    },
    {
      title: "Akhlak",
      content: (
        <div>
          <p>Mempertahankan dan mengembangkan akhlak budi serta nilai moral.</p>
          <Spacer y={3} />
          <div className="grid gap-x-2 grid-cols-2">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={AkhlakPhoto}
                alt="akhlak"
                fill
                className="rounded-lg w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      ),
    },
    {
      title: "Teknologi",
      content: (
        <div>
          <p>
            Mewujudkan siswa siswi yang mampu mengintegrasikan dan
            mengaplikasikan teknologi dalam pembelajaran dan kehidupan
            bersekolah.
          </p>
          <Spacer y={3} />
          <div className="grid gap-x-2 grid-cols-2">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={TeknologiPhoto}
                alt="teknologi"
                fill
                className="rounded-lg w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col pt-36 pb-32">
      <h1 className="text-3xl font-bold tracking-wider text-center">
        Visi - Misi
      </h1>
      <Visi
        title="SIKAT"
        description="Visi kami ialah mengaplikasikan program SIKAT di sekolah."
        data={timeLineEntry}
      />
      <Spacer y={12} />
      <Misi title="MISI" />
    </div>
  );
}
