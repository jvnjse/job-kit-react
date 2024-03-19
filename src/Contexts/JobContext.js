import { createContext, useContext } from "react";

const JobContext = createContext();

export function useJobContext() {
  return useContext(JobContext);
}
export default JobContext;
