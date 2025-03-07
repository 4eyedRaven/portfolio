import en from "../locales/en.json";
import de from "../locales/de.json";
import es from "../locales/es.json";
import it from "../locales/it.json";
import fr from "../locales/fr.json";
import zh from "../locales/zh.json";
import ja from "../locales/ja.json";
import ko from "../locales/ko.json";
import hi from "../locales/hi.json";
import ar from "../locales/ar.json";
import pt from "../locales/pt.json";

export function getLocale(lang: string) {
  switch (lang) {
    case "de":
      return de;
    case "es":
      return es;
    case "it":
      return it;
    case "fr":
      return fr;
    case "zh":
      return zh;
    case "ja":
      return ja;
    case "ko":
      return ko;
    case "hi":
      return hi;
    case "ar":
      return ar;
    case "pt":
      return pt;
    default:
      return en;
  }
}