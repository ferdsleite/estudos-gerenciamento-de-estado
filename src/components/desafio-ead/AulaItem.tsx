import Aula from "@/data/model/Aula";
import ButtonAulaConclusao from "./ButtonAulaConclusao";
import Duracao from "@/utils/Duracao";
import { IconVideo } from "@tabler/icons-react";
import { useContext } from "react";
import CursoContext from "@/context/CursoContext";

interface AulaItemProps {
    aula: Aula
    selecionada: boolean
}

export default function AulaItem({ aula, selecionada }: AulaItemProps) {
    const { selecionarAula, altenarConclusaoAula } = useContext(CursoContext);

    return (
        <div className="flex items-center gap-5 py-2 ">
            <ButtonAulaConclusao 
                concluida={aula.concluida ?? false} 
                onClick={() => altenarConclusaoAula(aula)} />
            <div 
                className="flex flex-col flex-1 cursor-pointer"
                onClick={() => selecionarAula(aula)}
            >
                <span className={`
                    ${selecionada && "text-yellow-500"}                    
                `}>
                    {aula.ordem}. {aula.titulo}
                </span>
                <span className="text-xs  text-zinc-400">
                    Duração de {Duracao.duracaoDe(aula.duracao)}
                </span>
            </div>
            <IconVideo size={20} className="text-zinc-500" />
        </div>
    )
}