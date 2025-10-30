import Carrinho from "@/components/loja/Carrinho";
import Catalogo from "@/components/loja/Catalogo";
import CarrinhoContext, { CarrinhoProvider } from "@/context/CarrinhoContext";
import { CatalogoProvider } from "@/context/CatalogoContext";
import Link from "next/link";

export default function Loja() {
    return (
            <CatalogoProvider>
                <CarrinhoProvider>
                    <div className="flex flex-col gap-5 p-20">
                        <Carrinho />
                        <Catalogo />
                    </div>
                </CarrinhoProvider>
                <div className="flex justify-end items-end p-6">
                    <Link href="/">
                        Back to Home
                    </Link>
                </div>
            </CatalogoProvider>
    )
}