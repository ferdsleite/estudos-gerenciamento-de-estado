import { useContext } from "react";
import Estatistica from "./Estatistica";
import CursoContext from "@/context/CursoContext";

export default function Estatisticas() {
    const { qtdeDeAulas, aulasConcluidas, duracaoTotal, duracaoConcluida, percentualConclusao } = useContext(CursoContext);

    return (
        <div className="flex justify-around items-center w-4/5 h-24 bg-zinc-700 rounded-lg">
            <Estatistica texto="Qtde. Aulas" valor={qtdeDeAulas} />
            <Estatistica texto="Aulas Concluidas" valor={aulasConcluidas} />
            <Estatistica texto="Duração Total" valor={duracaoTotal} />
            <Estatistica texto="Duração Concluida" valor={duracaoConcluida} />
            <Estatistica texto="Perc. Conclusão" valor={`${percentualConclusao}%`} />
        </div>
    )
}