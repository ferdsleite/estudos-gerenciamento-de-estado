import Mostrador from "@/components/comunicacao/Mostrador";
import Link from "next/link";

export default function Comunicacao() {
    return (
        <div className="p-20">
            <Mostrador />
            <div className="flex justify-end items-end p-6">
                <Link href="/">
                    Back to Home
                </Link>
            </div>
        </div>
        
    )
}