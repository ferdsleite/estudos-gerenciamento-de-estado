import Link from "next/link";
import React from "react";

interface MenuProps {
    icon: any;
    text: string;
    url: string;
}
export default function MenuItem({ icon, text, url}: MenuProps) {
    return (
        <Link href={url} className="flex flex-col items-center gap-2">
            <div className="bg-linear-to-r/srgb from-indigo-500 to-teal-400 rounded-full p-2">
                {React.cloneElement(icon, {
                    size: 80,
                    stroke: 1,
                    className: 'opacity-60'
                })}
            </div>
            <span className="opacity-30 font-black text-3xl">{text}</span>
        </Link>
    )
}