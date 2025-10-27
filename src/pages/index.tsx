import MenuItem from "@/components/template/MenuItem";
import { IconArrowDown, IconForms } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-linear-to-bl/hsl from-zinc-800 to-black gap-20">
      <div className="text-6xl font-open">
        <span className="opacity-40 font-light">Gerenciamento de </span>
        <span className="
          font-black bg-linear-to-r/srgb from-indigo-500 to-teal-400
          text-transparent bg-clip-text
        ">
          Estado
        </span>
      </div>
      <div className="flex flex-wrap justify-around w-3/5">
        <MenuItem icon={<IconForms />} text="Estado" url="/revisao/estado" />
        <MenuItem icon={<IconArrowDown />} text="Comunicação" url="/revisao/comunicacao" />
      </div>
    </div>
  );
}
