# Cereri: de la Medic la Operator

Medicul depune cererea online, iar Operatorul din colegiul teritorial o preia pentru analiză. Exemplul urmărește o cerere gratuită de **Adeverință generală**.

## Diagrama fluxului

<FlowDiagram
    title="Depunerea și procesarea unei cereri"
    description="Plata și documentele pot influența momentul transferului către Operator."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Medic",
            title: "Selectează și completează cererea",
            description: "Medicul completează datele și documentele cerute de tipul de cerere configurat. Pentru cererile care folosesc documente tipizate, aplicația poate genera documente pe baza șabloanelor configurate, cu câmpuri precompletate.",
        },
        {
            type: "action",
            role: "My CMSR",
            title: "Înregistrează cererea",
            description: "Medicul primește confirmarea că cererea a fost depusă.",
        },
        {
            type: "decision",
            role: "Validare · My CMSR",
            title: "Cererea necesită plată?",
            branches: [
                {
                    label: "Nu necesită plată",
                    title: "Cererea este pregătită pentru verificare",
                    description: "Operatorii colegiului sunt notificați despre cererea nouă.",
                    type: "success",
                },
                {
                    label: "Necesită plată",
                    title: "Medicul continuă cu plata",
                    description: "După confirmarea plății, Operatorii sunt notificați că cererea poate fi verificată.",
                    type: "info",
                },
            ],
        },
        {
            type: "handoff",
            role: "Transfer · Medic → Operator",
            title: "Operatorul analizează cererea și documentele",
            description: "Cererea pregătită pentru verificare devine disponibilă în aplicația Operatorului.",
        },
        {
            type: "decision",
            role: "Decizie · Operator",
            title: "Care este rezultatul analizei?",
            branches: [
                {
                    label: "Aprobare · Rezultat",
                    title: "Cererea este aprobată",
                    description: "Medicul este notificat. Dacă cererea este configurată să se finalizeze cu un document tipizat, acesta poate fi acum generat.",
                    type: "success",
                },
                {
                    label: "Respingere · Rezultat",
                    title: "Cererea este respinsă",
                    description: "Starea este actualizată, iar Medicul este notificat.",
                    type: "danger",
                },
                {
                    label: "Completări · Transfer",
                    title: "Cererea revine la Medic",
                    description: "Medicul este notificat, încarcă informațiile solicitate, apoi cererea revine la Operator.",
                    type: "warning",
                },
            ],
        },
    ]'
/>

## Alegerea tipului de cerere

Medicul pornește din zona **Cereri**, unde vede tipurile disponibile pentru profilul său. Opțiunile care nu îndeplinesc cerințele curente sunt marcate separat, iar cele eligibile pot fi deschise pentru completare.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/request-lifecycle/01-medic-request-types.jpg" target="_blank">
        <img src="/screenshots/request-lifecycle/01-medic-request-types.jpg"
            alt="Tipurile de cereri disponibile Medicului în My CMSR"
            loading="lazy">
    </a>
    <figcaption>Medicul selectează „Adeverință generală” din cererile disponibile.</figcaption>
</figure>

## Transmiterea și urmărirea

În formular, Medicul vede documentele necesare și alege opțiunile disponibile pentru facturare, livrare și plată. În exemplul prezentat, cererea este gratuită, folosește datele persoanei fizice și va fi livrată online.

După transmitere, My CMSR atribuie o referință și afișează starea curentă, documentele, notele și informațiile cererii.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/request-lifecycle/02-medic-request-submitted.jpg" target="_blank">
        <img src="/screenshots/request-lifecycle/02-medic-request-submitted.jpg"
            alt="Cerere nouă urmărită de Medic în My CMSR"
            loading="lazy">
    </a>
    <figcaption>Cererea transmisă, cu referința și starea „Nou”.</figcaption>
</figure>

## Lista de solicitări a operatorului

Lista include cererile din aria de lucru a Operatorului. Pentru fiecare cerere sunt afișate referința, tipul, membrul, codul RU, data, suma și starea, iar rezultatele pot fi filtrate.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/request-lifecycle/03-operator-request-queue.jpg" target="_blank">
        <img src="/screenshots/request-lifecycle/03-operator-request-queue.jpg"
            alt="Cererea nouă în lista de solicitări a operatorului"
            loading="lazy">
    </a>
    <figcaption>Identificarea cererii noi în lista Operatorului.</figcaption>
</figure>

## Preluarea pentru validare

Pagina de detaliu reunește informațiile cererii, membrul, datele de facturare și livrare, documentele și notele. Operatorul poate actualiza starea folosind acțiunile disponibile; în exemplu, cererea a fost mutată în **În Validare**.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/request-lifecycle/04-operator-request-in-validation.jpg" target="_blank">
        <img src="/screenshots/request-lifecycle/04-operator-request-in-validation.jpg"
            alt="Cerere preluată în validare de Operator în My CMSR"
            loading="lazy">
    </a>
    <figcaption>Operatorul vede toate informațiile necesare după preluarea cererii.</figcaption>
</figure>

::: info De reținut
Documentele necesare, regulile de aprobare și termenele de procesare diferă în funcție de tipul cererii.
:::

::: info Date demonstrative
Datele și cererea din capturi sunt demonstrative.
:::

Vezi și [Profilul Medicului și documentele](/flows/medic-profile) și [Evidența membrilor pentru Operator](/flows/operator-members).
