import { createContext } from "react";
import Language from "types/Language";

const TranslationContext = createContext<{
  currentLanguage: Language;
  setCurrentLanguage?: React.Dispatch<React.SetStateAction<Language>>;
}>({ currentLanguage: "Polish" });

export default TranslationContext;
