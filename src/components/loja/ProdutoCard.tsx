import Produto from "@/data/model/Produto"
import Image from "next/image"

interface ProdutoCardProps {
    produto: Produto
}

export default function ProdutoCard({produto}: ProdutoCardProps) {
    return (
        <div className="flex flex-col">
            <Image
                src={produto.imagem}
                alt="imagem do produto"
                width={300}
                height={150}
                className="rounded-md"
            />
            <div className="flex justify-between items-center px-4">
                <span>{produto.nome}</span>
                <span>{produto.preco}</span>
            </div>
        </div>
    )
}