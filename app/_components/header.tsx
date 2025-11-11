import { MenuIcon } from "lucide-react";
import {Button} from "./ui/button"
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-amber-700 px-5 py-6">
      <Image
        src="/Sagri2.png"
        alt="Logo da barbearia"
        width={100}
        height={26.09}
      />
      <Button variant="outline" size="icon">
        <MenuIcon/>
      </Button>
    </header>
  );
};
export default Header;
