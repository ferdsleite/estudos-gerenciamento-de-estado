
import capitulos from "@/data/constants/capitulos";
import Estatisticas from "./Estatisticas";
import Player from "./Player";
import CapituloItem from "./CapituloItem";

export default function SalaDeAula() {
    const capituloFake = capitulos;
    return (
        <div className="flex">
            <div className="bg-zinc-800 w-96 h-screen overflow-auto">
                {capitulos.map((capitulo) => {
                    return <CapituloItem key={capitulo.id} capitulo={capitulo} />
                })}
            </div>
            <div className="flex flex-col flex-1 justify-center items-center gap-4 bg-zinc-900">
                <Estatisticas />
                <Player titulo="Linguagens Programação" videoURL="https://www.youtube.com/embed/Eb4ZenR9qcY" />
            </div>
        </div>
    )
}