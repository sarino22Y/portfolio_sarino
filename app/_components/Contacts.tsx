import React from "react";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

export const Contacts = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact-me</Badge>
      <h2
        className="pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        id="contactme"
      >
        I will be happy working with you.
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
          className="flex-1"
          href="#contactme"
          name="Sarino"
          image="https://media.licdn.com/dms/image/C4D03AQE0XGj4gqK51A/profile-displayphoto-shrink_400_400/0/1648042571655?e=1727308800&v=beta&t=l_PhVPhkpfHAzCt-6QumsykVT92wMZPYZO7qTyl9SMw"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
          description="Check my LinkedIn profile"
        />
        <ContactCard
          className="flex-1"
          href="#contactme"
          name="@Sarino"
          image="https://media.licdn.com/dms/image/C4D03AQE0XGj4gqK51A/profile-displayphoto-shrink_400_400/0/1648042571655?e=1727308800&v=beta&t=l_PhVPhkpfHAzCt-6QumsykVT92wMZPYZO7qTyl9SMw"
          mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDkMcmr_NYKSHXwgmAqjE-FgZnpWKKTlDFg&s"
          description="Let's make a conversation"
        />
        <ContactCard
          className="flex-1"
          href="#footer"
          name="sarino.s117@gmail.com"
          image="https://media.licdn.com/dms/image/C4D03AQE0XGj4gqK51A/profile-displayphoto-shrink_400_400/0/1648042571655?e=1727308800&v=beta&t=l_PhVPhkpfHAzCt-6QumsykVT92wMZPYZO7qTyl9SMw"
          mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDkMcmr_NYKSHXwgmAqjE-FgZnpWKKTlDFg&s"
          description="Send me an email for more information"
        />
      </div>
    </Section>
  );
};
