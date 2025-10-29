import produtos from "@/data/constants/produtos";
import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";

export default function Catalogo() {
    function renderizarProdutos() {
        return produtos.map(prod => {
            return <ProdutoCard key={prod.id} produto={prod} />
        })
    }

    return (
        <Area title="Catalogo" color="purple">
            {renderizarProdutos()}
            
        </Area>
    )
}