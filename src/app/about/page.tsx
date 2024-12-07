import { ProgramKerja, Visi, Misi } from "./components";
import { TentangOSIS } from "@/components/fragments";

export default function TentangKamiPage() {
  return (
    <>
      <TentangOSIS />
      <Visi />
      <Misi />
      <ProgramKerja />
    </>
  );
}
