import { Slogan } from "./components";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="flex flex-wrap">
          <Slogan />
          {/* <VisiMisi />
          <Program />
          <Jurnal />
          <Agenda /> */}
        </div>
      </div>
    </main>
  );
}
