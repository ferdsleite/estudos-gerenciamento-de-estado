import ItemCarrinho from "@/data/model/ItemCarrinho";
import Produto from "@/data/model/Produto";
import { createContext, useState } from "react";

interface CarrinhoContextProps {
    itens: ItemCarrinho[]
    valorTotal: number
    adicionarItem: (produto: Produto) => void
    removerItem: (produto: Produto) => void
    limparCarrinho: () => void
}

const CarrinhoContext = createContext<CarrinhoContextProps>({} as any);

export function CarrinhoProvider(props: any) {
    const [itens, setItens] = useState<ItemCarrinho[]>([]);

    function adicionarItem(produto: Produto) {
        const item = itens.find(i => i.produto.id === produto.id) ?? {produto, quantidade: 0};
        const novoItem = {...item, quantidade: item.quantidade + 1};
        const outrosItens = itens.filter((i) => i.produto.id !== produto.id);
        setItens([...outrosItens, novoItem].sort(ordenarAlfabeticaItem))

        // setItens([...itens, {produto, quantidade: 1}]) //logica inicial, bem simples. Acrescenta itens sem contar quantidade do mesmo item.
    }

    function removerItem(produto: Produto) {
        const novosItens = itens.map(item => {
            return item.produto.id === produto.id 
                ? {...item, quantidade: item.quantidade - 1} 
                : item
        }).filter(item => item.quantidade > 0)
        setItens(novosItens)
    }

    function limparCarrinho() {
        setItens([])
    }

    function calcularValorTotal() {
        return itens.reduce((total: number, item: ItemCarrinho) =>  {
            return total + (item.quantidade * item.produto.preco)
        }, 0)
    }

    function ordenarAlfabeticaItem(a: ItemCarrinho, b: ItemCarrinho) {
        return a.produto.nome > b.produto.nome ? 1 : -1
    }

    return (
        <CarrinhoContext.Provider value={{
            itens,
            adicionarItem,
            removerItem,
            limparCarrinho,
            get valorTotal() {
                return calcularValorTotal()
            }
        }}>
            {props.children}
        </CarrinhoContext.Provider>
    );
}

export default CarrinhoContext;