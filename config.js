import _ from '@/libs/i18n'

const FIRST_NAME = 'Benjamin';
const LAST_NAME = 'Roger';
const GITHUB_USERNAME = 'Benjamin-Roger';
const WHATSAPP_HANDLE = '33658351332';
const LINKEDIN_USERNAME = 'b-roger';
const OFFICIAL_WEBSITE = 'https://www.sapiowork.com';
const RESUME = 'https://resume.benjaminroger.com'
const EMAIL = 'benjamin.roger@sapiowork.com';
const SITE_URL = 'https://resume.benjaminroger.com'

module.exports = {
    firstName: FIRST_NAME,
    lastName: LAST_NAME,
    fullName: `${FIRST_NAME} ${LAST_NAME}`,
    githubAPI: `https://api.github.com/users/Benjamin-Roger/repos`,
    maltUrl: `https://www.malt.fr/profile/benjaminroger1`,
    socialLinks: [
        {
            source: 'fab',
            icon: 'github',
            name: 'Github',
            url: `https://github.com/${GITHUB_USERNAME}`,
        },
        {
            source: 'fab',
            icon: 'linkedin',
            name: 'Linkedin',
            url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
        },
        {
            source: 'fab',
            icon: 'whatsapp',
            name: 'Whatsapp',
            url: `https://wa.me/${WHATSAPP_HANDLE}`,
        },],
    socialLinksTranslate: [
        {
            source: 'fas',
            icon: 'globe-europe',
            name: 'onlineSite',
            url: `${OFFICIAL_WEBSITE}`,
        },
        {
            name: 'onlineResume',
            url: `${RESUME}`,
        },
    ],


}