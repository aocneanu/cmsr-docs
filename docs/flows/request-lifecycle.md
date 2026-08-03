# Cerere Medic → procesare Operator

Fluxul de cereri conectează autoservirea Medicului cu activitatea județeană a Operatorului. Exemplul de mai jos urmărește o cerere gratuită de **Adeverință generală**, transmisă online și preluată ulterior pentru validare.

## Diagrama fluxului

<FlowDiagram
    title="Depunerea și procesarea unei cereri"
    description="Plata și documentele pot influența momentul transferului către Operator."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Medic",
            title: "Selectează și completează cererea",
            description: "Medicul completează datele și documentele cerute de tipul de cerere configurat.",
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
                    description: "Medicul este notificat, iar documentul de rezultat poate fi generat când tipul cererii este configurat astfel.",
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

::: info Nivel de detaliu
Diagrama nu stabilește ce documente sunt obligatorii și nici regulile de aprobare pentru un anumit tip de cerere.
:::

## Alegerea tipului de cerere

Medicul pornește din zona **Cereri**, unde vede tipurile disponibile pentru profilul său. Opțiunile care nu îndeplinesc cerințele curente sunt marcate separat, iar cele eligibile pot fi deschise pentru completare.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/request-lifecycle/01-medic-request-types.jpg" target="_blank">
        <img src="/screenshots/request-lifecycle/01-medic-request-types.jpg"
            alt="Tipurile de cereri disponibile Medicului în My CMSR"
            loading="lazy">
    </a>
    <figcaption>Selectarea cererii „Adeverință generală” din opțiunile disponibile profilului demo.</figcaption>
</figure>

## Transmiterea și urmărirea

În formular, Medicul consultă documentele necesare și alege opțiunile de facturare, livrare și plată disponibile. Pentru exemplul demonstrativ, cererea are valoarea de `0,00 lei`, folosește datele persoanei fizice și este livrată online.

După transmitere, My CMSR atribuie o referință și afișează starea curentă, documentele, notele și informațiile cererii.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/request-lifecycle/02-medic-request-submitted.jpg" target="_blank">
        <img src="/screenshots/request-lifecycle/02-medic-request-submitted.jpg"
            alt="Cerere nouă urmărită de Medic în My CMSR"
            loading="lazy">
    </a>
    <figcaption>Cererea transmisă, cu referința și starea „Nou”.</figcaption>
</figure>

## Coada județeană a Operatorului

Cererea apare în lista **General Requests** a Operatorului din același colegiu teritorial. Lista oferă filtre și afișează referința, tipul, membrul, codul RU, data, suma și starea.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/request-lifecycle/03-operator-request-queue.jpg" target="_blank">
        <img src="/screenshots/request-lifecycle/03-operator-request-queue.jpg"
            alt="Cererea demonstrativă în coada județeană a Operatorului"
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
    <figcaption>Detaliile operaționale după preluarea cererii pentru validare.</figcaption>
</figure>

::: info Scopul prezentării
Datele și cererea sunt demonstrative și provin exclusiv din mediul local. Capturile confirmă traseul disponibil în aplicație, fără a defini criterii de aprobare, termene de procesare sau excepții de business.
:::

Vezi și [Profilul Medicului și documentele](/flows/medic-profile) și [Evidența membrilor pentru Operator](/flows/operator-members).
