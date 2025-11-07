import Capitulo from "@/data/model/Capitulo";
import AulaItem from "./AulaItem";
import { useContext } from "react";
import CursoContext from "@/context/CursoContext";

interface CapituloItemProps {
    capitulo: Capitulo
}

export default function CapituloItem({ capitulo }:CapituloItemProps) {
    const { aulaAtual } = useContext(CursoContext);

    return (
        <div>
            <div className="flex items-center gap-5 p-4 bg-zinc-900 border border-zinc-800 text-md text-zinc-400 font-black uppercase ">
                <div className="flex justify-center items-center h-9 w-9 rounded-full bg-black border border-zinc-400">
                    {capitulo.ordem}
                </div>
                <span>
                    {capitulo.titulo}
                </span>
            </div>
            <div className="p-4">
                {capitulo.aulas.map(aula => {
                    return (
                        <AulaItem 
                            key={aula.ordem} 
                            aula={aula} 
                            selecionada={aulaAtual.ordem === aula.ordem}
                        />
                    )
                })}
            </div>
        </div>
    );
}