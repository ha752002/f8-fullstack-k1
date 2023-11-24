import 'server-only'
import type {Locale} from "@/i18n.config";
const dictionaries = {
    en: () => import('@/lang/en.json').then(module  => module.default),
    vi: () => import('@/lang/vi.json').then(module => module.default)
}
export const getDictionary = async (locale: Locale) => dictionaries[locale]()
