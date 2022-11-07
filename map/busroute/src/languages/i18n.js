import i18next from "i18next";
import english from "./english.json"
import dutch from "./dutch.json"
import french from "./french.json"
import german from "./german.json"
import { initReactI18next } from "react-i18next";


i18next.use(initReactI18next).init({
    lng:'en',
    resources:{
        en:english,
        dt:dutch,
        fr:french,
        ge:german
    },
    react :{
        useSuspense:false,
    }
});

export default i18next