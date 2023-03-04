export const initialState = { data: [], index: null };

export const SETDATA = "setData";
export const SETMONTH = "setMonth";

export const monthsName = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

export const reducer = (state, action) => {
  switch (action.type) {
    case SETDATA:
      return {
        ...state,
        data: action.payload,
      };
    case SETMONTH:
      return {
        ...state,
        index: action.payload,
      };

    default:
      return state;
  }
};
