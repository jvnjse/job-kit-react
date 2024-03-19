import { createContext, useContext } from "react";

const EmployeeContext = createContext();

export function useEmployeeContext() {
  return useContext(EmployeeContext);
}
export default EmployeeContext;
