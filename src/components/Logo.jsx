import { Link } from "react-router-dom";
import { img } from "../utils/assets";

export default function Logo() {
  return (
    <Link className="logo" to="/">
      <img src={img("logo.png")} alt="ZeroOnze" />
    </Link>
  );
}
