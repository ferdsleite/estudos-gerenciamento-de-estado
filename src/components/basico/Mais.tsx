import { useContext } from "react";
import Area from "../template/Area";
import ContadorContext from "@/context/ContadorContext";

export default function Mais() {
    const { incrementar } = useContext(ContadorContext);

    return (
        <Area title="Botão Mais" color="green">
            <button className="btn" onClick={incrementar}>
                +1
            </button>
        </Area>
    )
}