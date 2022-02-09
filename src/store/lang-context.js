import { createContext, useState } from "react";


export const LanguageContext = createContext()

export function LanguageContextProvider(props) {
    const [selectedLang, setSelectedLang] = useState('español')

    function changeLang(lang) {
        setSelectedLang(lang)
    }

    return (
        <LanguageContext.Provider value={{
            selectedLang,
            changeLang
        }}>
            {props.children}
        </LanguageContext.Provider>
    )
}