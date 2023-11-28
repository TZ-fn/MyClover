import { useContext } from "react";
import TranslationContext from "context/TranslationContext";
import polishTranslation from "assets/translations/polishTranslation";
import englishTranslation from "assets/translations/englishTranslation";

const useTranslation = () => {
  const contextData = useContext(TranslationContext);

  if (contextData === null) {
    throw new Error("useCoinContext must be used within the CoinContextProvider.");
  }

  const translations = {
    Polish: polishTranslation,
    English: englishTranslation,
  };

  const translationContext = translations[contextData];

  return translationContext;
};

export default useTranslation;
