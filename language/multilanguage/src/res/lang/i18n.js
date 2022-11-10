import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./english.json"
import german from "./german.json"
import italian from "./italian.json"
import french from "./french.json"
import portuguese from "./portuguese.json"


i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng:'en',
    resources:{
        en:english,
        it:italian,
        fr:french,
        de:german,
        pt:portuguese
    },
    react :{
        useSuspense:false,
    },
});

export default i18next