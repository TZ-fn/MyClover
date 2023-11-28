import { ReactNode, useState } from "react";
import TranslationContext from "context/TranslationContext";

import Language from "types/Language";

interface TranslationContextProviderProps {
  children: ReactNode;
}

export default function TranslationContextProvider({ children }: TranslationContextProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("Polish");

  return <TranslationContext.Provider value={currentLanguage}>{children}</TranslationContext.Provider>;
}
