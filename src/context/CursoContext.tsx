import Capitulo from "@/data/model/Capitulo";
import { createContext, useState } from "react";
import capitulosFake from "@/data/constants/capitulos";
import Aula from "@/data/model/Aula";
import CursoEstatisticas from "@/data/model/CursoEstatisticas";

interface CursoContextProps {
    capitulos: Capitulo[]
    aulaAtual: Aula
    qtdeDeAulas: number
    aulasConcluidas: number
    duracaoTotal: string
    duracaoConcluida: string
    percentualConclusao: number
    selecionarAula: (aula: Aula) => void
    altenarConclusaoAula: (aula: Aula) => void
}

const CursoContext = createContext<CursoContextProps>({} as any) //contexto inizializado com um objeto vazio

export function CursoProvider(props: any) {
    const [capitulos, setCapitulos] = useState(capitulosFake);
    const [aulaAtual, setAulaAtual] = useState(capitulosFake[0].aulas[0]);

    const cursoEstatisticas = new CursoEstatisticas(capitulos);

    function selecionarAula(aula: Aula) {
        setAulaAtual(aula)
    }

    function altenarConclusaoAula(aulaSelecionada: Aula) {
        const novosCapitulos = capitulos.map(capitulo => {
            const novasAulas = capitulo.aulas.map(aula => {
                return aula.ordem === aulaSelecionada.ordem
                ? { ...aula, concluida: !(aula.concluida ?? false) } //pega todos os atributos de aula e concluida para ser o contrario de concluido - alterna entre concluida e não concluida
                : aula
            })
            return { ...capitulo, aulas: novasAulas }
        })
        setCapitulos(novosCapitulos)
    }

    return (
        <CursoContext.Provider 
            value={{
                capitulos,
                aulaAtual,
                selecionarAula,
                altenarConclusaoAula,
                get qtdeDeAulas() { return cursoEstatisticas.qtdeDeAulas() },
                get aulasConcluidas() { return cursoEstatisticas.aulasConcluidas() },
                get duracaoTotal() { return cursoEstatisticas.duracaoTotal()},
                get duracaoConcluida() { return cursoEstatisticas.duracaoConcluida() },
                get percentualConclusao() { return cursoEstatisticas.percentualConclusao() },
            }}
        >
            {props.children}
        </CursoContext.Provider>
    );
}

export default CursoContext;