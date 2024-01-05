import React, { ReactNode, createContext, useContext, useState } from "react";


type Locale = 'en' | 'es' | 'fr';
type Translations = {[key in Locale]: { [key: string]: string}};

const translations: Translations = {
    en: { greeting: 'Hello'},
    es: { greeting: 'Hola'},
    fr: { greeting: 'Bonjour'},
};

interface I18nContextProps {
    language: Locale;
    setLanguage: (language: Locale) => void;
    translate: (key: string) => string;

}

const I18nContext = createContext<I18nContextProps>(null!);

const I18nProvider: React.FC<{ children: ReactNode}> = ({children}) => {
    const [language, setLanguage] = useState<Locale>('en');

    const translate = (key: string): string => translations[language][key] || key;

    return (
        <I18nContext.Provider value={{language,setLanguage,translate}}>
            {children}
        </I18nContext.Provider>
    );
};

const useI18n = () => useContext(I18nContext);

export {I18nProvider, useI18n}