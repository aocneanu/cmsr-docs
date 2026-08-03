import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'ro-RO',
    title: 'My CMSR',
    description: 'Prezentarea și manualul de utilizare pentru My CMSR',
    appearance: false,
    cleanUrls: true,
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/brand/logo.svg' }],
        ['meta', { name: 'theme-color', content: '#022D58' }],
    ],
    themeConfig: {
        logo: {
            src: '/brand/logo.svg',
            alt: 'Sigla My CMSR',
        },
        nav: [
            { text: 'Acasă', link: '/' },
            {
                text: 'Perspective',
                items: [
                    { text: 'Medic', link: '/audiences/medic' },
                    { text: 'Operator', link: '/audiences/operator' },
                    { text: 'Administrator', link: '/audiences/administrator' },
                ],
            },
            {
                text: 'Fluxuri My CMSR',
                items: [
                    { text: 'Prezentare', link: '/flows/' },
                    { text: 'Acces și securitate', link: '/flows/access-security' },
                    { text: 'Medic: profil și documente', link: '/flows/medic-profile' },
                    { text: 'Operator: evidența membrilor', link: '/flows/operator-members' },
                    { text: 'Cereri: Medic și Operator', link: '/flows/request-lifecycle' },
                    { text: 'Cotizații și plăți', link: '/flows/contributions-payments' },
                    { text: 'Credite EMC', link: '/flows/emc-credits' },
                    { text: 'Diplome Medic', link: '/flows/medic-diplomas' },
                    { text: 'Validarea documentelor', link: '/flows/profile-document-validation' },
                    { text: 'Mesaje și ajutor', link: '/flows/communication-support' },
                    { text: 'Setările contului Medic', link: '/flows/medic-settings' },
                    { text: 'Ciclul de viață al membrului', link: '/flows/member-lifecycle' },
                    { text: 'Back-office pentru Administrator', link: '/flows/admin-backoffice' },
                ],
            },
        ],
        sidebar: {
            '/audiences/': [
                {
                    text: 'Trei perspective',
                    items: [
                        { text: 'Medic', link: '/audiences/medic' },
                        { text: 'Operator', link: '/audiences/operator' },
                        { text: 'Administrator', link: '/audiences/administrator' },
                    ],
                },
                {
                    text: 'Conexiuni',
                    items: [
                        { text: 'Prezentare', link: '/flows/' },
                        { text: 'Acces și securitate', link: '/flows/access-security' },
                        { text: 'Medic: profil și documente', link: '/flows/medic-profile' },
                        { text: 'Operator: evidența membrilor', link: '/flows/operator-members' },
                        { text: 'Cereri: Medic și Operator', link: '/flows/request-lifecycle' },
                        { text: 'Cotizații și plăți', link: '/flows/contributions-payments' },
                        { text: 'Credite EMC', link: '/flows/emc-credits' },
                        { text: 'Diplome Medic', link: '/flows/medic-diplomas' },
                        { text: 'Validarea documentelor', link: '/flows/profile-document-validation' },
                        { text: 'Mesaje și ajutor', link: '/flows/communication-support' },
                        { text: 'Setările contului Medic', link: '/flows/medic-settings' },
                        { text: 'Ciclul de viață al membrului', link: '/flows/member-lifecycle' },
                        { text: 'Back-office pentru Administrator', link: '/flows/admin-backoffice' },
                    ],
                },
            ],
            '/flows/': [
                {
                    text: 'Perspective',
                    items: [
                        { text: 'Medic', link: '/audiences/medic' },
                        { text: 'Operator', link: '/audiences/operator' },
                        { text: 'Administrator', link: '/audiences/administrator' },
                    ],
                },
                {
                    text: 'Fluxuri My CMSR',
                    items: [
                        { text: 'Prezentare', link: '/flows/' },
                        { text: 'Acces și securitate', link: '/flows/access-security' },
                        { text: 'Medic: profil și documente', link: '/flows/medic-profile' },
                        { text: 'Operator: evidența membrilor', link: '/flows/operator-members' },
                        { text: 'Cereri: Medic și Operator', link: '/flows/request-lifecycle' },
                        { text: 'Cotizații și plăți', link: '/flows/contributions-payments' },
                        { text: 'Credite EMC', link: '/flows/emc-credits' },
                        { text: 'Diplome Medic', link: '/flows/medic-diplomas' },
                        { text: 'Validarea documentelor', link: '/flows/profile-document-validation' },
                        { text: 'Mesaje și ajutor', link: '/flows/communication-support' },
                        { text: 'Setările contului Medic', link: '/flows/medic-settings' },
                        { text: 'Ciclul de viață al membrului', link: '/flows/member-lifecycle' },
                        { text: 'Back-office pentru Administrator', link: '/flows/admin-backoffice' },
                    ],
                },
            ],
        },
        outline: {
            label: 'Pe această pagină',
            level: [2, 3],
        },
        docFooter: {
            prev: 'Pagina anterioară',
            next: 'Pagina următoare',
        },
        lastUpdated: {
            text: 'Actualizat la',
            formatOptions: {
                dateStyle: 'medium',
                timeStyle: 'short',
            },
        },
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: 'Caută',
                        buttonAriaLabel: 'Caută în documentație',
                    },
                    modal: {
                        noResultsText: 'Nu am găsit rezultate',
                        resetButtonTitle: 'Șterge căutarea',
                        footer: {
                            selectText: 'selectează',
                            navigateText: 'navighează',
                            closeText: 'închide',
                        },
                    },
                },
            },
        },
        socialLinks: [],
    },
});
