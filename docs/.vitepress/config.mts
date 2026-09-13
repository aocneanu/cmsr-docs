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
            { text: 'Prezentare', link: '/flows/' },
            { text: 'Acces și securitate', link: '/flows/access-security' },
            { text: 'Asistent completare dosar', link: '/flows/profile-onboarding' },
            {
                text: 'Fluxuri',
                items: [
                    {
                        text: 'Operator',
                        items: [
                            { text: 'Evidența membrilor', link: '/flows/operator-members' },
                            { text: 'Înscriere, transfer, suspendare, radiere și reînscriere', link: '/flows/member-lifecycle' },
                            { text: 'Dosare și documente', link: '/flows/profile-document-validation' },
                            { text: 'Cereri', link: '/flows/request-lifecycle' },
                            { text: 'Cotizații și tranzacții', link: '/flows/contributions-payments' },
                            { text: 'Credite EMC', link: '/flows/emc-credits' },
                        ],
                    },
                    {
                        text: 'Medic',
                        items: [
                            { text: 'Dashboard, profil și documente', link: '/flows/medic-profile' },
                            { text: 'Semnătură, facturare și adrese', link: '/flows/medic-settings' },
                            { text: 'Cotizație și plată', link: '/flows/contributions-payments' },
                            { text: 'Credite EMC', link: '/flows/emc-credits' },
                            { text: 'Diplome', link: '/flows/medic-diplomas' },
                            { text: 'Cereri', link: '/flows/request-lifecycle' },
                            { text: 'Transfer, suspendare și radiere', link: '/flows/member-lifecycle' },
                            { text: 'Mesaje, notificări și FAQ', link: '/flows/communication-support' },
                        ],
                    },
                    {
                        text: 'Administrator',
                        items: [
                            { text: 'Back-office și acțiuni corective', link: '/flows/admin-backoffice' },
                        ],
                    },
                ],
            },
            {
                text: 'Perspective',
                items: [
                    { text: 'Operator', link: '/audiences/operator' },
                    { text: 'Medic', link: '/audiences/medic' },
                    { text: 'Administrator', link: '/audiences/administrator' },
                ],
            },
            {
                text: 'Regulamente EMC',
                items: [
                    { text: 'Regulamentul până la decembrie 2026', link: '/emc-regulations' },
                    { text: 'Regulamentul începând cu ianuarie 2027', link: '/emc-regulations-2027' },
                ],
            },
        ],
        sidebar: {
            '/audiences/': [
                {
                    text: 'Puncte comune',
                    items: [
                        { text: 'Prezentare', link: '/flows/' },
                        { text: 'Acces și securitate', link: '/flows/access-security' },
                        { text: 'Asistent completare dosar', link: '/flows/profile-onboarding' },
                    ],
                },
                {
                    text: 'Perspective',
                    items: [
                        { text: 'Operator', link: '/audiences/operator' },
                        { text: 'Medic', link: '/audiences/medic' },
                        { text: 'Administrator', link: '/audiences/administrator' },
                    ],
                },
            ],
            '/flows/': [
                {
                    text: 'Puncte comune',
                    items: [
                        { text: 'Prezentare', link: '/flows/' },
                        { text: 'Acces și securitate', link: '/flows/access-security' },
                        { text: 'Asistent completare dosar', link: '/flows/profile-onboarding' },
                    ],
                },
                {
                    text: 'Operator',
                    items: [
                        { text: 'Perspectivă Operator', link: '/audiences/operator' },
                        { text: 'Evidența membrilor', link: '/flows/operator-members' },
                        { text: 'Înscriere, transfer, suspendare, radiere și reînscriere', link: '/flows/member-lifecycle' },
                        { text: 'Dosare și documente', link: '/flows/profile-document-validation' },
                        { text: 'Cereri', link: '/flows/request-lifecycle' },
                        { text: 'Cotizații și ghișeu', link: '/flows/contributions-payments' },
                        { text: 'Credite EMC', link: '/flows/emc-credits' },
                        { text: 'Mesaje și notificări', link: '/flows/communication-support' },
                    ],
                },
                {
                    text: 'Medic',
                    items: [
                        { text: 'Perspectivă Medic', link: '/audiences/medic' },
                        { text: 'Dashboard, profil și documente', link: '/flows/medic-profile' },
                        { text: 'Facturare, adrese și locuri de muncă', link: '/flows/medic-settings' },
                        { text: 'Cotizație și plată', link: '/flows/contributions-payments' },
                        { text: 'Credite EMC', link: '/flows/emc-credits' },
                        { text: 'Diplome', link: '/flows/medic-diplomas' },
                        { text: 'Cereri', link: '/flows/request-lifecycle' },
                        { text: 'Transfer, suspendare și radiere', link: '/flows/member-lifecycle' },
                        { text: 'Mesaje, notificări și FAQ', link: '/flows/communication-support' },
                    ],
                },
                {
                    text: 'Administrator',
                    items: [
                        { text: 'Perspectivă Administrator', link: '/audiences/administrator' },
                        { text: 'Back-office și acțiuni corective', link: '/flows/admin-backoffice' },
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
