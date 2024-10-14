import { Timeline } from "@/components/ui/timeline";
import { timeLineTypes } from "@/types/timeLineTypes";

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
        </div>
      ),
    },
    {
      title: "Kreatifitas",
      content: (
        <div>
          <p>Mengjadikan OSIS sebagai sarana penunjang kreatifitas.</p>
        </div>
      ),
    },
    {
      title: "Akhlak",
      content: (
        <div>
          <p>Mempertahankan dan mengembangkan akhlak budi serta nilai moral.</p>
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
        </div>
      ),
    },
  ];
  return (
    <div className="w-full flex flex-col pt-36 pb-32">
      <h1 className="text-3xl font-bold tracking-wider text-center">
        Visi - Misi
      </h1>
      <Timeline data={timeLineEntry} />
    </div>
  );
}
