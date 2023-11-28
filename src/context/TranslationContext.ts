import { createContext } from "react";
import Language from "types/Language";

const TranslationContext = createContext<Language>("Polish");

export default TranslationContext;
