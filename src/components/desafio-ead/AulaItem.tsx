import Aula from "@/data/model/Aula";
import ButtonAulaConclusao from "./ButtonAulaConclusao";
import Duracao from "@/utils/Duracao";
import { IconVideo } from "@tabler/icons-react";

interface AulaItemProps {
    aula: Aula
    selecionada: boolean
}

export default function AulaItem({ aula, selecionada }: AulaItemProps) {
    return (
        <div className="flex items-center gap-5 py-2 border-b border-zinc-500">
            <ButtonAulaConclusao concluida={false} />
            <div className="flex flex-col flex-1 cursor-pointer">
                <span className={`
                    ${selecionada && "text-yellow-600"}                    
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