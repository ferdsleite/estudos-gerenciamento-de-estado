import CarrinhoContext from "@/context/CarrinhoContext";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import { useContext } from "react";
import ItemCarrinhoCard from "./ItemCarrinhoCard";
import Real from "@/utils/Real";
import { IconTrash } from "@tabler/icons-react";

export default function Carrinho() {
    const { itens, valorTotal, limparCarrinho } = useContext(CarrinhoContext);

    return (
        <Area title="Cart" color="green" summary={Real.format(valorTotal)}>
            <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-wrap justify-center gap-4">
                    {itens.length === 0 ? (
                        <CarrinhoVazio />
                    ) : (
                        itens.map(item => {
                            return <ItemCarrinhoCard key={item.produto.id} item={item} />
                        })                
                    )}
                </div>
                    {itens.length > 0 &&                
                        <button className="flex gap-2 justify-center w-28 btn-danger" onClick={limparCarrinho}>
                            <IconTrash /> Limpar
                        </button>
                    }
            </div>
        </Area>
    )
}