interface AreaProps {
    title: string;
    summary?: string;
    children: any;
    color: string;
}
export default function Area({ title, summary, children, color }: AreaProps) {
    return (
        <div className={`
            flex flex-col items-center bg-${color}-500 
            rounded-md w-full
        `}>
            <div className={`
                flex items-center ${summary ? 'justify-between' : 'justify-center'}
                w-full bg-black/20 h-14 text-3xl font-black opacity-70
            `}>
                <span className="px-4">{title}</span>
                {summary && (
                    <span className="flex items-center px-4 bg-black/20 h-full">
                        {summary}
                    </span>
                )}
            </div>
            <div className="p-7">
                {children}
            </div>
        </div>
    )

}