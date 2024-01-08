import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLeaf,
  faUsers,
  faCalendarDays,
  faCartShopping,
  faRightToBracket,
  faPhone,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="bg-paleta-verde h-screen px-4 flex flex-col py-12 justify-between">
      <div className="flex flex-col gap-4">
        <FontAwesomeIcon
          icon={faHouse}
          className="w-8 h-8"
          style={{ color: "#795548" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faLeaf}
          className="w-8 h-8"
          style={{ color: "#795548" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faUsers}
          className="w-8 h-8"
          style={{ color: "#795548" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faCalendarDays}
          className="w-8 h-8"
          style={{ color: "#795548" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faCartShopping}
          className="w-8 h-8"
          style={{ color: "#795548" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faRightToBracket}
          className="w-8 h-8"
          style={{ color: "#795548" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faPhone}
          className="w-8 h-8"
          style={{ color: "#795548" }}
        ></FontAwesomeIcon>
      </div>
      <FontAwesomeIcon
        icon={faSeedling}
        className="w-10 h-10"
        style={{ color: "#795548" }}
      ></FontAwesomeIcon>
    </header>
  );
}
