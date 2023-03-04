import { useContext, useState } from "react";
import { monthsName, SETMONTH } from "../../store";
import { Context } from "../../wrapper";

const Month = (props) => {
  const { el, index, maxAmount } = props;
  const [style, setStyle] = useState({});
  const [state, dispatch] = useContext(Context);
  const divStyle = {
    background: `linear-gradient(to top, lightgreen ${
      (el.importo / maxAmount) * 100
    }%, transparent 0%)`,
  };

  const changeBorder = () => {
    setStyle({ border: "1px solid red", status: !style.status });
    dispatch({ type: SETMONTH, payload: index });
  };

  return (
    <div
      className="month"
      onClick={changeBorder}
      style={style.status ? style : null}
    >
      <div className="monthName">{monthsName[index]}</div>
      <div className="monthContent" style={divStyle}>
        <div className="monthDocument">{el.documenti} doc.</div>
        <div className="monthAmount">{el.importo} €</div>
      </div>
    </div>
  );
};

export default Month;
