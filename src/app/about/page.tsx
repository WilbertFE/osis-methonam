import { ProgramKerja, Visi, Misi, Members } from "./components";
import { TentangOSIS } from "@/components/fragments";

export default function About() {
  return (
    <>
      <TentangOSIS />
      <Visi />
      <Misi />
      <ProgramKerja />
      <Members />
    </>
  );
}
