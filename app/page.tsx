import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import { Contacts } from "./_components/Contacts";

export default function Home() {
  return (
      <main>
          <Header />
          <Spacing size="xl"/>
          <Hero />
          <Spacing size="md"/>
          <Status />
          <Spacing size="md"/>
          <Skills />
          <Spacing size="md"/>
          <Contacts />
      </main>
  );
}
