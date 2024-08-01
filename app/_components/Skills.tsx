import React from "react";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { TailwindnIcon } from "./icons/TailwindIcon";
import { JavaIcon } from "./icons/JavaIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love work on ...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <ReactIcon
            size={42}
            className="animate-spin hover:animate-none"
            style={{
              animationDuration: "10s",              
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use{" "}
            <Code>Nextjs</Code> as a backend and frontend framework.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <TailwindnIcon
            size={42}
            className="animate-pulse hover:animate-none"
            style={{
              animationDuration: "3s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            I can create a <u>beautiful</u> application using <Code>TailwindCSS</Code>.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <JavaIcon
            size={42}
            className=""
          />
          <h3 className="text-2xl font-semibold tracking-tight">Java</h3>
          <p className="text-sm text-muted-foreground">
            I am an expert on backend using <Code>Java</Code>. I use frequently <Code>SpringBoot</Code> to build project with this language.
          </p>
        </div>
      </div>
    </Section>
  );
};
