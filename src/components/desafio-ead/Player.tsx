import capitulos from "@/data/constants/capitulos"

interface PlayerProps {
    titulo: string
    videoURL: string
}
export default function Player( {titulo, videoURL }: PlayerProps) {
    const aulaAtual = capitulos[0].aulas[0];
    return (
        <div className="flex flex-col justify-center items-center w-4/5 h-3/5 bg-zinc-700 rounded-lg p-3">
            <span className="font-black text-2xl mb-10">{aulaAtual.titulo}</span>
            <div className="aspect-video w-full px-5">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={aulaAtual.videoUrl} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen 
                ></iframe>
            </div>
        </div>
    )
}