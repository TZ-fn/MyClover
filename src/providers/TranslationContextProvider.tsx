import { ReactNode, useState } from "react";
import TranslationContext from "context/TranslationContext";

import Language from "types/Language";

interface TranslationContextProviderProps {
  children: ReactNode;
}

export default function TranslationContextProvider({ children }: TranslationContextProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("Polish");

  const translationContext = {
    currentLanguage,
    setCurrentLanguage,
  };

  return <TranslationContext.Provider value={translationContext}>{children}</TranslationContext.Provider>;
}
