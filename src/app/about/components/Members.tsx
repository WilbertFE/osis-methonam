import { AppleCardsCarouselDemo } from "@/components/blocks/apple-cards-carousel-demo";
import { Proker } from "@/types/Proker";
import { Spacer } from "@nextui-org/spacer";
import Image from "next/image";

export default function Members() {
  const DummyContent = ({ informasi }: { informasi: string }) => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">{informasi}</span>{" "}
              </p>
              <Image
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };

  const informasi = [
    "OSIS akan membuat website OSIS untuk kepentingan siswa.",
    "'BAPER' atau 'baca curhatan pelajar' merupakan program di mana siswa diberi akses untuk memberikan keluh kesah mengenai permasalahan di sekolah, untuk diproses.",
    "OSIS akan membuat akun sosmed dan nomor WA khusus yang bisa diakses oleh siswa.",
    "OSIS akan membuat akun sosmed dan nomor WA khusus yang bisa diakses oleh siswa.",
  ];

  const data: Proker[] = [
    {
      category: "Digitalisasi",
      title: "Website OSIS",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent informasi={informasi[0]} />,
    },
    {
      category: "Transparansi",
      title: "Program 'BAPER'",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent informasi={informasi[1]} />,
    },
    {
      category: "Transparansi",
      title: "Komunikasi OSIS",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent informasi={informasi[2]} />,
    },
  ];

  return (
    <div className="w-full pb-32 pt-36">
      <h1 className="text-center font-bold tracking-wide text-3xl">Anggota</h1>
      <Spacer y={8} />
      <div className="flex-flex-col">
        <AppleCardsCarouselDemo data={data} />
      </div>
    </div>
  );
}
