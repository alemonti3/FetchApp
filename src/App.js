import "./App.css";
import { Context } from "./wrapper";
import { useContext, useEffect } from "react";
import MonthList from "./component/MonthList";
import { SETDATA } from "./store";
import MonthDetails from "./component/MonthDetails";

// Create a react application that creates this:[IMAGE](https://ibb.co/FsLVzj3) component taking data from this
// endpoint:http://staccah.fattureincloud.it/testfrontend/data.json

//USA context + useReducer
//usa fetch con then e catch

//EXTRA
// i box sono cliccabili uno alla volta. quando clicco su un box cambi il bordo di quel box facendo capire che è selezionato
// e mostri i dettagli del box in una card sotto la lista

function App() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    fetchApp();
  }, []);

  const fetchApp = () => {
    fetch("http://staccah.fattureincloud.it/testfrontend/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: SETDATA, payload: data.mesi });
      })
      .catch((e) => {
        return console.log("errore", e);
      });
  };
  return (
    <div className="App">
      <MonthList />
      {state.index != null ? <MonthDetails /> : null}
    </div>
  );
}

export default App;
