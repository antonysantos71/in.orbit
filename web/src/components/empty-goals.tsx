import { Plus } from "lucide-react";
import logo from "../assets/in-orbit-logo.svg";
import lestStart from "../assets/rocket-launch-illustration.svg";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={lestStart} alt="in.orbit" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nennhuma meta, que tal cadastrar uma agora?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
