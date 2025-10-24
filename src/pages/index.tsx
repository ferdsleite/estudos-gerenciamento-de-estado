import MenuItem from "@/components/template/MenuItem";
import { IconForms } from "@tabler/icons-react";

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
      <div>
        <MenuItem icon={<IconForms />} text="Estado" url="/revisao/estado" />
      </div>
    </div>
  );
}
