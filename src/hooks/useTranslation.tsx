import { useContext } from "react";
import TranslationContext from "context/TranslationContext";
import polishTranslation from "assets/translations/polishTranslation";
import englishTranslation from "assets/translations/englishTranslation";
import Language from "types/Language";

type Translation = typeof polishTranslation;

const useTranslation = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(TranslationContext);

  if (currentLanguage === null) {
    throw new Error("useTranslationContext must be used within the TranslationContextProvider.");
  }

  const translations = {
    Polish: polishTranslation,
    English: englishTranslation,
  };

  if (!translations[currentLanguage]) {
    throw new Error("This language is currently unavailable.");
  }

  const translationContext = translations[currentLanguage];

  return [translationContext, setCurrentLanguage] as [Translation, React.Dispatch<React.SetStateAction<Language>>];
};

export default useTranslation;
