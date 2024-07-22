import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  return (
      <main>
          <Header />
          <Spacing size="xl"/>
          <Hero />
          <Spacing size="md"/>
          <Status />
          <Spacing size="md"/>
      </main>
  );
}
