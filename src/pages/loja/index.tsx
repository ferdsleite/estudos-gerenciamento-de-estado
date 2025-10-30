import Carrinho from "@/components/loja/Carrinho";
import Catalogo from "@/components/loja/Catalogo";
import CarrinhoContext, { CarrinhoProvider } from "@/context/CarrinhoContext";
import { CatalogoProvider } from "@/context/CatalogoContext";

export default function Loja() {
    return (
            <CatalogoProvider>
                <CarrinhoProvider>
                    <div className="flex flex-col gap-5 p-20">
                        <Carrinho />
                        <Catalogo />
                    </div>
                </CarrinhoProvider>
            </CatalogoProvider>
    )
}