import SalaDeAula from "@/components/desafio-ead/SalaDeAula";
import { CursoProvider } from "@/context/CursoContext";

export default function DesafioEAD() {
    return (
        <CursoProvider>
            <SalaDeAula />
        </CursoProvider>
    )
}