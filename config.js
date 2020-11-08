import _ from '@/libs/i18n'

const FIRST_NAME = 'Benjamin';
const LAST_NAME = 'Roger';
const GITHUB_USERNAME = 'Benjamin-Roger';
const WHATSAPP_HANDLE = '33658351332';
const LINKEDIN_USERNAME = 'b-roger';
const MALT_URL =  `https://www.malt.fr/profile/benjaminroger1`;
const OFFICIAL_WEBSITE = 'https://www.sapiowork.com';
const RESUME = 'https://resume.benjaminroger.com'
const EMAIL = 'benjamin.roger@sapiowork.com';
const SITE_URL = 'https://resume.benjaminroger.com'

module.exports = {
    firstName: FIRST_NAME,
    lastName: LAST_NAME,
    fullName: `${FIRST_NAME} ${LAST_NAME}`,
    githubAPI: `https://api.github.com/users/Benjamin-Roger/repos`,
    socialLinks: [
        {
            source: 'fab',
            icon: 'github',
            name: 'Github',
            url: `https://github.com/${GITHUB_USERNAME}`,
            color: `#000`
        },
        {
            source: 'fab',
            icon: 'linkedin',
            name: 'Linkedin',
            url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
            color: `#0e76a8`
        },
        {
            source: 'fab',
            icon: 'whatsapp',
            name: 'Whatsapp',
            url: `https://wa.me/${WHATSAPP_HANDLE}`,
            color: `#075E54`
        },
        {
            source: 'img',
            img: '/images/malt.png',
            name: 'Malt',
            url: `${MALT_URL}`,
            color:`#FF5C57`
        },
        {
            source: 'fas',
            icon: 'globe-europe',
            translatableString: 'onlineSite',
            url: `${OFFICIAL_WEBSITE}`,
            color:`linear-gradient(90deg,#037657,#0fd19e 75%)`
        },
        {
            source: 'fas',
            icon: 'file',
            translatableString: 'onlineResume',
            url: `${RESUME}`,
            color: `#28407F`
        },
    ]


}