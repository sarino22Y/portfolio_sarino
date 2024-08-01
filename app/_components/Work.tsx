import Link from "next/link";

export type WorkProps = {
    Image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};

export const Work = (props: WorkProps) => {
    return (
        <Link
            href={props.url}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <img
                src={props.Image}
                alt={props.title}
                className="w-10 h-10 object-contain rounded-md"
            />
            <div className="mr-auto">
                <div>
                    <p className="text-lg font-semibold">{props.title}</p>
                    { /*<Badge variant="outline" className="">Badge</Badge> */}
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-accent-foreground/50 text-nowrap">{props.date}</p>
        </Link>
    );
};
