import { IconShoppingCart } from "@tabler/icons-react";

export default function CarrinhoVazio() {

    return (
        <div className="flex flex-col items-center">
            <IconShoppingCart size={60} stroke={1} />
            <span>Nenhum produto no carrinho</span>
        </div>
    )
}