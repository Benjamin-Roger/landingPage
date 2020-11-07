import { useRouter } from 'next/router';

// const fr = import(`./fr.json`);
// const en = import(`./en.json`);


export default function _(str) {
    const router = useRouter();
    const { locale, defaultLocale } = router;

    var defaultData = require(`../locales/${defaultLocale}.json`);

    var currentLanguageData = require(`../locales/${locale}.json`);

    return currentLanguageData[str] || defaultData[str] || '';



};