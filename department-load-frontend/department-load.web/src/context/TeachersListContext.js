import React from "react";

// const TeachersListContext = React.createContext([{}, () => {}]);

// const TeachersListProvider = props => {
//   const [state, setState] = useState({});
//   return (
//     <TeachersListContext.Provider value={[state, setState]}>
//       {props.children}
//     </TeachersListContext.Provider>
//   );
// };

// export { TeachersListContext, TeachersListProvider };

export const TeachersListContext = React.createContext();

export const ActionsContext = React.createContext();
