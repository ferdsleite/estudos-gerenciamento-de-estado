import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";

export default function Carrinho() {
    return (
        <Area title="Cart" color="green">
            <CarrinhoVazio />
        </Area>
    )
}