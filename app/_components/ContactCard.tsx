/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type ContactProps = {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  href?: string;
  className?: string;
};

export const ContactCard = (props: ContactProps) => {
  return (
    <Link href={props.href || "#"} className={cn("w-full", props.className)} >
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors flex items-center gap-4 group">
        <div className="relative w-10 h-10">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold text-nowrap">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          size={16}
          className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
        />
      </Card>
    </Link>
  );
};
