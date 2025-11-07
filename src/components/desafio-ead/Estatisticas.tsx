import Estatistica from "./Estatistica";

export default function Estatisticas() {
    return (
        <div className="flex justify-around items-center w-4/5 h-24 bg-zinc-700 rounded-lg">
            <Estatistica texto="Qtde. Aulas" valor={10} />
            <Estatistica texto="Aulas Concluidas" valor={5} />
            <Estatistica texto="Duração Total" valor="2h 30m" />
            <Estatistica texto="Duração Concluida" valor="1h 24m" />
        </div>
    )
}