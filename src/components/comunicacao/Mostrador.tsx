import Area from "@/components/template/Area";
import GerarNumero from "./GerarNumero";
import { useState } from "react";

export default function Mostrador() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function exibirNumero(numero: number) {
        setResultado(numero)
    }

    return (
        <Area color="red" title="Mostrador">
            <div className="text-6xl font-black flex justify-center">
                {resultado}
            </div>
            <div className="flex gap-5 p-5">
                <input 
                    type="number" 
                    value={n1} 
                    className="input" 
                    onChange={e => setN1(+e.target.value)}
                />
                <input 
                    type="number" 
                    value={n2} 
                    className="input" 
                    onChange={e => setN2(+e.target.value)} 
                />
            </div>
            <GerarNumero numero1={n1} numero2={n2} gerarNumero={exibirNumero}/>
        </Area>
    )
}