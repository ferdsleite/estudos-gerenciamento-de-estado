import { useState } from "react";
import Area from "../template/Area";

export default function CalculoTabuada() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    
    return (
        <Area title="Tabuada" color="purple">
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex p-10 gap-5">
                    <input 
                        className="input" 
                        type="number" 
                        value={num1}
                        onChange={e => setNum1(+e.target.value)}
                    />
                    <input 
                        className="input" 
                        type="number" 
                        value={num2}
                        onChange={e => setNum2(+e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-2xl font-black text-white">Resultados:</p>
                    <span>
                        Soma: {num1} + {num2} = {num1 + num2}
                    </span>
                    <span>
                        Subtração: {num1} - {num2} = {num1 - num2}
                    </span>
                    <span>
                        Multiplicação: {num1} * {num2} = {num1 * num2}
                    </span>
                    <span>
                        Divisão: {num1} / {num2} = {num1 / num2}
                    </span>

                </div>
            </div>
        </Area>
    )
}