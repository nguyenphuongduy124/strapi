import HeaderContext from "../contexts/HeaderContext";
import { useContext } from "react";
function ToggleMenuItemsColor(props) {
  const { color, toggleColor } = useContext(HeaderContext);
  return (
    <div>
      <button onClick={() => toggleColor(!color)}>Change Color</button>
    </div>
  );
}

export default ToggleMenuItemsColor;
