/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { JavaIcon } from "./icons/JavaIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindnIcon } from "./icons/TailwindIcon";
import { NextIcon } from "./icons/NextIcon";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border border-accent px-1 text-primary rounded-sm mx-1 text-nowrap hover:bg-accent/50 transition-colors ",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Hi, I&apos;m Sarino Malalanirina
        </h2>
        <h3 className="text-3xl font-caption bg-sky-800/40 max-w-72 text-lime-600/100 font-bold pt-2 px-2 hover:bg-accent/30 hover:text-primary ">Software developer</h3>
        <p className="leading-8 text-start text-base">
          I love programming languages and technologies. I am a software <br />
          engineer with a passion for
          <Code className="inline-flex items-center gap-1"><JavaIcon size={16}/>Java</Code>,  
          <Code className="inline-flex items-center gap-1"><ReactIcon size={16}/>React</Code>,      
          <Code className="inline-flex items-center gap-1"><NextIcon size={16} />Next.js</Code>,
          <Code className="inline-flex items-center gap-1"><TailwindnIcon size={16}/>TailwindCSS</Code> and 
          <Code className="inline-flex items-center gap-1"><TypescriptIcon size={16}/>TypeScript</Code>.
          Living in Madagascar, I am currently working as a software engineer at IBONIA.
        </p>

        <div className="flex mt-10">
        <Button className="w-40 font-bold text-gray-50 bg-violet-900/50 border border-sky-700">READ MORE</Button>
        <Button className="flex w-40 ms-4 font-bold text-gray-50 bg-sky-700 border border-gray-50">RESUME <Download size={16} className="mx-3"/> </Button>
        </div>
      </div>
      <div className="flex-1 hover:animate-pulse">
        <img
          src="https://avatars.githubusercontent.com/u/74770148?s=400&u=b6196c99dd3232c5c7c14fdb0fd320f0df648941&v=4"
          alt="Sarino Malalanirina"
          className="w-full h-auto max-w-xs rounded-3xl"
        />
      </div>
    </Section>
  );
};
