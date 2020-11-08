import { useRouter } from 'next/router';

function tryCatchRequire(source, base_folder) {

    try {
        const data = require(`../${base_folder}/${source}`);
        return data
    }

    catch {
        const data = {};
        return data
    }
}


export default function _(str) {
    const router = useRouter();
    const { locale, defaultLocale, pathname } = router;

    var stripPathname = pathname !== "/" ? pathname : "/index" ;

    const defaultData = tryCatchRequire(`${defaultLocale}${stripPathname}.json`, "locales")
    const currentLanguageData = tryCatchRequire(`${locale}${stripPathname}.json`, "locales");

    return currentLanguageData[str] || defaultData[str] || '';

};