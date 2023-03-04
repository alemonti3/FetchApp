import { useContext } from "react";
import { monthsName } from "../../store";
import { Context } from "../../wrapper";

export const MonthDetails = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid black",
        padding: "15px",
        width: "120px",
        left: "45%",
      }}
    >
      <div>{monthsName[state.index]}</div>
      <br></br>
      <label>Importo: </label>
      {state.index != null ? state.data[state.index].importo : "not found"}€
      <br></br>
      <label>Documenti: </label>
      {state.index != null ? state.data[state.index].documenti : "not found"}
    </div>
  );
};

export default MonthDetails;
