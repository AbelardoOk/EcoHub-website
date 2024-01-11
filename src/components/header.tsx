import { HouseIcon } from "../../public/house";
import { LeafIcon } from "../../public/leaf";
import { UsersIcon } from "../../public/users";
import { CalendarIcon } from "../../public/calendar-days";
import { CartIcon } from "../../public/cart-shopping";
import { EnterIcon } from "../../public/right-to-bracket";
import { PhoneIcon } from "../../public/phone";
import { LogoIcon } from "../../public/logo";

export function Header() {
  return (
    <header className="fixed flex h-screen flex-col justify-between bg-paleta-verde px-3 py-12">
      <div className="flex flex-col gap-4">
        <HouseIcon />
        <LeafIcon />
        <UsersIcon />
        <CalendarIcon />
        <CartIcon />
        <EnterIcon />
        <PhoneIcon />
      </div>
      <LogoIcon altura={24} largura={24} />
    </header>
  );
}
