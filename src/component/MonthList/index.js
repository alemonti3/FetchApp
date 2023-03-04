import { useContext } from "react";
import { Context } from "../../wrapper";
import Month from "../Month";
import { MonthDetails } from "../MonthDetails";
import "./monthList.css";

const MonthList = () => {
  const [state, dispatch] = useContext(Context);

  const amounts = state.data.map((curr, index) => {
    return curr.importo;
  });

  const maxAmount = Math.max.apply(Math, amounts);

  return (
    <>
      <div className="monthList">
        {state.data.map((curr, index) => {
          return (
            <Month key={index} index={index} el={curr} maxAmount={maxAmount} />
          );
        })}
      </div>
    </>
  );
};

export default MonthList;
