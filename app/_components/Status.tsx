import React from "react";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, BookOpenText, Code, ListCheck, LucideIcon, MessageCircle, Rss, StickyNote } from "lucide-react";
import Link from "next/link";
import { title } from "process";
import Image, { ImageLoaderProps } from "next/image";
import { LogoImage } from "./icons/LogoImage";
import { Badge } from "@/components/ui/badge";
import { SideProject, SideProjectProps } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { Work, WorkProps } from "./Work";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3]">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground"> SIDE, FUN PROJECTS</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => {
                            return (
                                <SideProject
                                    key={index}
                                    {...project}
                                />
                            );
                        })}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] flex flex-col gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">WORKS</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => {
                            return (
                                <Work
                                    key={index}
                                    {...work}
                                />
                            );
                        })}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">CONTACT-ME </p>
                    <ContactCard
                        name="Sarino Malalanirina"
                        image="https://media.licdn.com/dms/image/C4D03AQE0XGj4gqK51A/profile-displayphoto-shrink_400_400/0/1648042571655?e=1727308800&v=beta&t=l_PhVPhkpfHAzCt-6QumsykVT92wMZPYZO7qTyl9SMw"
                        mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                        description=""
                    />
                    <ContactCard 
                        name="@Sarino"
                        image="https://media.licdn.com/dms/image/C4D03AQE0XGj4gqK51A/profile-displayphoto-shrink_400_400/0/1648042571655?e=1727308800&v=beta&t=l_PhVPhkpfHAzCt-6QumsykVT92wMZPYZO7qTyl9SMw"
                        mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDkMcmr_NYKSHXwgmAqjE-FgZnpWKKTlDFg&s"
                        description=""
                    />
                    
                </Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: ListCheck,
        title: "Todo list",
        description: "A simple todo list using Next.js and TailwindCSS",
        url: "https://github.com/sarino22Y/todo-list",
        isImage: false,
    },
    {
        Logo: Code,
        title: "Mean Stack",
        description: "Restoration management with MEAN Stack",
        url: "https://github.com/sarino22Y/m1p9mean-sarino",
        isImage: false,
    },
    {
        Logo: BookOpenText,
        title: "Mobile project 'Mahaiaw'",
        description: "'Mahaiaw' mobile project to help children learn numbers and colors",
        url: "/",
        isImage: false,
    },
    {
        Logo: MessageCircle,
        title: "Fun Thread",
        description: "Chat online using your Github account",
        url: "https://fun-thread.vercel.app/",
        isImage: false,
    },
];

const WORKS: WorkProps[] = [
    {
        Image:
            "https://media.licdn.com/dms/image/C4D0BAQGeMRLQIs7Bcg/company-logo_100_100/0/1630546338386/ibonia1_logo?e=1729728000&v=beta&t=49T4FU1Xb_RcmlOQscfx9Y4qUwJjpl2pZQ6zLWl8gGg",
        title: "IBONIA",
        role: "Software Developer",
        date: "2021 - Present",
        url: "/",
    },
    {
        Image:
            "https://media.licdn.com/dms/image/C4D0BAQGRoCAL7y8idw/company-logo_200_200/0/1630507999465?e=1729728000&v=beta&t=Ui6dBbXY55a241nnxGBjq6qG_c8iCgmsebR1w-nHxXE",
        title: "ACCESMAD",
        role: "E-learning Developer",
        date: "2020 - 2021",
        url: "/",
    },
    {
        Image:
            "https://media.licdn.com/dms/image/C4D03AQHKkifO3VEY3Q/profile-displayphoto-shrink_400_400/0/1517354514657?e=1727308800&v=beta&t=3V7DiiLKoVBx6VVRN84ApooQDYYunCXvv14aMaKymxw",
        title: "ESTI",
        role: "Assistant systems and network administrator",
        date: "2019 - 2020",
        url: "/",
    },
];