import Area from "@/components/template/Area";
import Link from "next/link";
import { useState } from "react";

export default function Estado() {
    const [texto, setTexto] = useState('');
    

    return (
        <div>
            <div className="p-20">
                <Area title="Revisão Estado" color="sky">
                    <input 
                        type="text" 
                        className="input" 
                        value={texto} 
                        onChange={e => {
                            setTexto(e.target.value)
                        }}
                    />
                    <span className="ml-20">{texto}</span>

                </Area>
            </div>
            <div className="flex justify-end items-end p-6">
                <Link href="/">
                    Back to Home
                </Link>
            </div>
        </div>

    )
}