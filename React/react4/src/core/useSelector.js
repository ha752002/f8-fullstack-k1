import { ProviderContext } from "./Provider";
import { useContext } from "react";
export const useSelect = () => {
    return useContext(ProviderContext);
};