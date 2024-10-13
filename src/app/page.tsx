import { Slogan, VisiMisi } from "./components";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col min-h-screen">
        <Slogan />
      </div>
      <VisiMisi />
      {/* <Program />
          <Jurnal />
          <Agenda /> */}
    </>
  );
}
