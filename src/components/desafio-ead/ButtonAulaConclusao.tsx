import { IconCheck } from "@tabler/icons-react"

interface ButtonAulaConclusaoProps {
    concluida: boolean
    onClick?: () => void
}
export default function ButtonAulaConclusao({ concluida, onClick }:ButtonAulaConclusaoProps) {

    return (
        <button 
            className={`
                flex justify-center items-center
                rounded-full h-6 w-6 border border-zinc-400
                ${concluida && "bg-green-500 "}    
            `}
            onClick={onClick}
        >
            {concluida && <IconCheck size={16} stroke={3} />}
        </button>
    )
}