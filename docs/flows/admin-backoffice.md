# Back-office-ul Administratorului

Administratorul configurează și administrează My CMSR din interfața web de back-office. Pagina prezintă principalele zone de lucru și instrumentele disponibile.

## Acțiuni corective asupra deciziilor Operatorului

Administratorul poate corecta o decizie operațională atunci când verificarea istoricului arată că Operatorul a înregistrat un rezultat greșit. Intervenția pornește de la înregistrarea afectată, folosește numai acțiunile permise în back-office și păstrează motivul și urma de audit.

<FlowDiagram
    title="Decizie Operator → corecție Administrator"
    description="Corecția este o intervenție controlată și trasabilă, nu o scurtătură peste fluxul operațional."
    :steps='[
        {
            type: "start",
            role: "Operator",
            title: "Înregistrează decizia operațională",
            description: "Decizia poate privi starea membrului, un document, o cerere, un credit EMC sau o operațiune de cotizație.",
        },
        {
            type: "decision",
            role: "Administrator",
            title: "Verifică decizia și istoricul",
            description: "Administratorul confirmă eroarea și identifică înregistrarea care trebuie corectată.",
            branches: [
                {
                    label: "Decizie corectă",
                    title: "Nu intervine",
                    description: "Fluxul Operatorului rămâne sursa deciziei curente.",
                    type: "success",
                },
                {
                    label: "Eroare confirmată",
                    title: "Aplică acțiunea corectivă permisă",
                    description: "Actualizează rezultatul sau datele asociate și consemnează motivul intervenției.",
                    type: "warning",
                },
            ],
        },
        {
            type: "end",
            role: "Audit",
            title: "Păstrează trasabilitatea",
            description: "Jurnalele permit reconstituirea deciziei inițiale și a modificării administrative.",
        },
    ]'
/>

Acțiunile disponibile depind de starea înregistrării. Dacă un câmp este blocat, corecția se face prin fluxul dedicat, fără să fie sărite validările sau documentele obligatorii.

<figure class="cmsr-doc-screenshot"><a href="/screenshots/admin-backoffice/21-catalog-profiluri.png" target="_blank"><img src="/screenshots/admin-backoffice/21-catalog-profiluri.png" alt="Catalogul profilurilor disponibil Administratorului" loading="lazy"></a><figcaption>Administratorul găsește profilul după colegiu, grad profesional, universitate, tip și stare.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/admin-backoffice/22-editare-profil.png" target="_blank"><img src="/screenshots/admin-backoffice/22-editare-profil.png" alt="Formularul de editare a profilului în back-office" loading="lazy"></a><figcaption>Formularul arată câmpurile care pot fi corectate și informațiile blocate de regulile stării curente.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/admin-backoffice/26-cereri-emc.png" target="_blank"><img src="/screenshots/admin-backoffice/26-cereri-emc.png" alt="Cererile de credite EMC în back-office" loading="lazy"></a><figcaption>Din registrele administrative poate fi deschisă înregistrarea care necesită verificare sau corecție.</figcaption></figure>

## Bookmarks și tabele

Bookmarks păstrează mai multe pagini deschise și permite comutarea rapidă între ele. Tabelele oferă filtrare, sortare, căutare, paginare și export Excel.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/06-events-catalogue.jpg" target="_blank"><img src="/screenshots/admin-backoffice/06-events-catalogue.jpg" alt="Catalogul de evenimente și bara de marcaje" loading="lazy"></a>
    <figcaption>Catalogul de evenimente folosește Bookmarks și instrumentele comune de filtrare, căutare, sortare și export.</figcaption>
</figure>

## Importul listelor

Zona **Data Import** centralizează fișierele importate, starea procesării și numărul de rânduri reușite sau respinse.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/05-data-import-table.jpg" target="_blank"><img src="/screenshots/admin-backoffice/05-data-import-table.jpg" alt="Istoricul importurilor de date" loading="lazy"></a>
    <figcaption>Istoricul arată tipul importului, fișierul, rezultatul și durata procesării.</figcaption>
</figure>

## Evenimente și participanți

Administratorul poate configura evenimente și poate consulta participanții asociați. Formularul separă datele generale de detalii și validează câmpurile obligatorii înainte de salvare.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/07-event-participants.jpg" target="_blank"><img src="/screenshots/admin-backoffice/07-event-participants.jpg" alt="Lista participanților la evenimente" loading="lazy"></a>
    <figcaption>Lista participanților poate fi filtrată, căutată și exportată.</figcaption>
</figure>

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/18-event-form.jpg" target="_blank"><img src="/screenshots/admin-backoffice/18-event-form.jpg" alt="Formularul de creare a unui eveniment" loading="lazy"></a>
    <figcaption>Formularul grupează informațiile generale și detaliile evenimentului.</figcaption>
</figure>

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/19-event-form-validation.jpg" target="_blank"><img src="/screenshots/admin-backoffice/19-event-form-validation.jpg" alt="Validarea formularului de eveniment" loading="lazy"></a>
    <figcaption>Câmpurile obligatorii care lipsesc sunt evidențiate înainte de salvare.</figcaption>
</figure>

## Abonamente la reviste medicale

Lista abonamentelor corelează revista, medicul, canalul și perioada abonamentului.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/08-magazine-subscribers.jpg" target="_blank"><img src="/screenshots/admin-backoffice/08-magazine-subscribers.jpg" alt="Abonamentele la reviste medicale" loading="lazy"></a>
    <figcaption>Lista arată revista, abonatul, data înregistrării, canalul și creditele asociate.</figcaption>
</figure>

## Mesagerie și notificări de sistem

Mesageria administrativă păstrează mesajele trimise, iar catalogul notificărilor configurează tipurile de informări disponibile și canalele folosite.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/09-admin-messaging.jpg" target="_blank"><img src="/screenshots/admin-backoffice/09-admin-messaging.jpg" alt="Mesageria administrativă" loading="lazy"></a>
    <figcaption>Lista arată audiența, destinatarii, starea și autorul fiecărui mesaj.</figcaption>
</figure>

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/12-notification-catalogue.jpg" target="_blank"><img src="/screenshots/admin-backoffice/12-notification-catalogue.jpg" alt="Catalogul notificărilor de sistem" loading="lazy"></a>
    <figcaption>Catalogul tipurilor de notificări configurate pentru fluxurile My CMSR.</figcaption>
</figure>

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/20-notification-center.jpg" target="_blank"><img src="/screenshots/admin-backoffice/20-notification-center.jpg" alt="Centrul personal de notificări al Administratorului" loading="lazy"></a>
    <figcaption>Contul demonstrativ nu are notificări în momentul capturii.</figcaption>
</figure>

## Tipuri și șabloane de documente

Back-office-ul separă structura documentelor de șabloanele folosite la generarea lor.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/10-document-types.jpg" target="_blank"><img src="/screenshots/admin-backoffice/10-document-types.jpg" alt="Tipurile de documente" loading="lazy"></a>
    <figcaption>Tipurile de documente și câmpurile lor configurabile.</figcaption>
</figure>

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/11-document-templates.jpg" target="_blank"><img src="/screenshots/admin-backoffice/11-document-templates.jpg" alt="Șabloanele de documente" loading="lazy"></a>
    <figcaption>Șabloanele utilizate pentru documentele generate de sistem.</figcaption>
</figure>

## Internaționalizare

Zona de localizare permite administrarea limbilor și a textelor traduse din aplicație.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/17-internationalisation.jpg" target="_blank"><img src="/screenshots/admin-backoffice/17-internationalisation.jpg" alt="Administrarea localizării" loading="lazy"></a>
    <figcaption>Româna, engleza și maghiara sunt configurate ca limbi active.</figcaption>
</figure>

## Trasabilitate și audit

Autentificările, acțiunile, modificările înregistrărilor și apelurile API sunt urmărite în tabele separate.

<figure class="cmsr-doc-screenshot"><a href="/screenshots/admin-backoffice/13-login-audit.jpg" target="_blank"><img src="/screenshots/admin-backoffice/13-login-audit.jpg" alt="Jurnalul autentificărilor în My CMSR" loading="lazy"></a><figcaption>Jurnalul arată utilizatorul, rolul, adresa IP și momentul autentificării.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/admin-backoffice/14-action-logs.jpg" target="_blank"><img src="/screenshots/admin-backoffice/14-action-logs.jpg" alt="Jurnalul acțiunilor din My CMSR" loading="lazy"></a><figcaption>Jurnalul arată metoda, permisiunea, adresa accesată, durata și momentul acțiunii.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/admin-backoffice/15-model-audit.jpg" target="_blank"><img src="/screenshots/admin-backoffice/15-model-audit.jpg" alt="Auditul modificărilor înregistrate în My CMSR" loading="lazy"></a><figcaption>Auditul arată tipul modificării, înregistrarea afectată și data.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/admin-backoffice/16-api-audit.jpg" target="_blank"><img src="/screenshots/admin-backoffice/16-api-audit.jpg" alt="Jurnalul apelurilor API fără înregistrări" loading="lazy"></a><figcaption>Jurnalul API nu conține înregistrări în momentul capturii.</figcaption></figure>

## Conținutul pentru întrebări frecvente

Zona **FAQ** permite căutarea, exportul și administrarea întrebărilor și răspunsurilor care devin disponibile Medicului în My CMSR.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/01-faqs.jpg" target="_blank">
        <img src="/screenshots/admin-backoffice/01-faqs.jpg"
            alt="Administrarea întrebărilor frecvente în back-office"
            loading="lazy">
    </a>
    <figcaption>Întrebările și răspunsurile administrate aici sunt publicate în aplicația Medicului.</figcaption>
</figure>

## Configurarea cotizațiilor

**Membership Fees** păstrează valorile lunare, penalitățile și TVA-ul. Tabelul oferă selecție de perioadă, căutare, paginare, export și creare.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/02-membership-fees.jpg" target="_blank">
        <img src="/screenshots/admin-backoffice/02-membership-fees.jpg"
            alt="Configurarea cotizațiilor lunare în back-office"
            loading="lazy">
    </a>
    <figcaption>Administratorul configurează valorile lunare, penalitățile și TVA-ul cotizațiilor.</figcaption>
</figure>

## Șabloanele de cereri

Configuratorul **Request Templates** definește tipurile de cereri disponibile, colegiul, unitatea de măsură, prețul, ordinea și condițiile aferente. Lista poate fi filtrată după colegiu.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/03-request-templates.jpg" target="_blank">
        <img src="/screenshots/admin-backoffice/03-request-templates.jpg"
            alt="Șabloanele de cereri configurate în back-office"
            loading="lazy">
    </a>
    <figcaption>Fiecare tip de cerere are propriii parametri, inclusiv prețul, ordinea și documentul rezultat.</figcaption>
</figure>

## Stările documentelor de profil

Zona **Statuses** separă stările pentru documente de profil, documente de cerere, cereri și credite EMC. Exemplul arată stările disponibile validării documentelor de profil.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/admin-backoffice/04-profile-document-statuses.jpg" target="_blank">
        <img src="/screenshots/admin-backoffice/04-profile-document-statuses.jpg"
            alt="Stările documentelor de profil configurate în back-office"
            loading="lazy">
    </a>
    <figcaption>Stările de lucru folosite de fluxul de validare a documentelor.</figcaption>
</figure>

Vezi și [Mesaje, notificări și ajutor](/flows/communication-support), [Cotizații și plăți](/flows/contributions-payments), [Cereri: de la Medic la Operator](/flows/request-lifecycle) și [Transmiterea și validarea documentelor de profil](/flows/profile-document-validation).
