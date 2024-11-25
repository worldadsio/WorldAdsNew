import Herosection from "@/components/section/Herosection";
import Aboutsection from "@/components/section/Aboutsection";
import Team from "@/components/section/Team";
import Waldatoken from "@/components/section/Waldatoken";
import Worldsection from "@/components/section/Worldsection";

export default function Home() {
  return (
    <main className="w-full">
      <Herosection />
      <Aboutsection />
      <Worldsection />
      <Waldatoken />
      <Team />
    </main>
  );
}
