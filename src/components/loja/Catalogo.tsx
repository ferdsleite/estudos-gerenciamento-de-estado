import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";
import { useContext } from "react";
import CatalogoContext from "@/context/CatalogoContext";

export default function Catalogo() {
    const { produtos } = useContext(CatalogoContext);

    function renderizarProdutos() {
        return produtos.map(prod => {
            return <ProdutoCard key={prod.id} produto={prod} />
        })
    }

    return (
        <Area title="Catalogo" color="purple">
            <div className="grid grid-cols-3 gap-5">
                {renderizarProdutos()}
            </div>  
        </Area>
    )
}