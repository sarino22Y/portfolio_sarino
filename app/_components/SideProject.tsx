import { LucideIcon } from "lucide-react";
import { LogoImage } from "./icons/LogoImage";
import Link from "next/link";

export type SideProjectProps = {
    Logo: LucideIcon | string;
    title: string;
    description: string;
    url: string;
    isImage: boolean;
};

export const SideProject = (props: SideProjectProps) => {
    return (
        <Link
            href={props.url}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                {props.isImage ? (
                    <>
                        {
                            <LogoImage
                                Image={props.Logo as string}
                                title={props.title}
                                width={24}
                                height={24}
                            />
                        }
                    </>
                ) : (
                    <props.Logo size={16} />
                )}
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};