# Cotizația Medicului și evidența Operatorului

Medicul își consultă cotizațiile și plățile, iar Operatorul înregistrează și urmărește plățile membrilor din colegiul teritorial. Exemplul prezintă o plată în numerar pentru luna curentă.

## Diagrama plății online

<FlowDiagram
    title="Plata online din aplicația Medic"
    description="Medicul consultă obligațiile disponibile și inițiază plata cu cardul."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Medic",
            title: "Deschide zona Plăți",
            description: "Medicul consultă ultima lună achitată, suma datorată și istoricul plăților.",
        },
        {
            type: "action",
            role: "Medic",
            title: "Selectează perioada și datele de facturare",
            description: "Medicul inițiază plata pentru cotizațiile disponibile.",
        },
        {
            type: "handoff",
            role: "Transfer · My CMSR → Procesatorul de plăți",
            title: "Înregistrează tranzacția",
            description: "My CMSR deschide formularul procesatorului și păstrează legătura cu plata inițiată.",
        },
        {
            type: "decision",
            role: "Validare · My CMSR",
            title: "Plata este confirmată?",
            branches: [
                {
                    label: "Da · Rezultat",
                    title: "Cotizațiile sunt înregistrate ca achitate",
                    description: "Plata confirmată devine disponibilă în istoricul Medicului.",
                    type: "success",
                },
                {
                    label: "Nu · Rezultat",
                    title: "Plata nu este marcată ca achitată",
                    description: "Istoricul păstrează starea disponibilă pentru tranzacția respectivă.",
                    type: "warning",
                },
            ],
        },
    ]'
/>

## Diagrama operațiunii la ghișeu

<FlowDiagram
    title="Înregistrarea unei cotizații la ghișeu"
    description="Operatorul înregistrează plata pentru membrul selectat și emite chitanța."
    :steps='[
        {
            type: "handoff",
            role: "Configurare · Administrator",
            title: "Cotizațiile sunt disponibile în sistem",
            description: "Zona administrativă gestionează configurația cotizațiilor folosită în aplicația Operatorului.",
        },
        {
            type: "start",
            role: "Inițiator · Operator",
            title: "Selectează membrul și perioada",
            description: "Operatorul alege cotizațiile disponibile, metoda de plată și datele de facturare.",
        },
        {
            type: "decision",
            role: "Validare · My CMSR",
            title: "Cotizațiile selectate pot fi înregistrate?",
            description: "Sistemul verifică disponibilitatea cotizațiilor pentru plata curentă.",
            branches: [
                {
                    label: "Da · Rezultat",
                    title: "Plata și chitanța sunt înregistrate",
                    description: "Operațiunea apare în evidența de ghișeu și în istoricul plăților membrului.",
                    type: "success",
                },
                {
                    label: "Nu · Rezultat",
                    title: "Operațiunea nu este înregistrată",
                    description: "Operatorul primește mesajul de validare pentru selecția curentă.",
                    type: "warning",
                },
            ],
        },
    ]'
/>

## Situația cotizației

În zona **Payments**, Medicul vede ultima lună achitată și starea curentă a cotizației. Istoricul afișează metoda, data, suma și starea fiecărei plăți.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/contributions-payments/01-medic-payment-history.jpg" target="_blank">
        <img src="/screenshots/contributions-payments/01-medic-payment-history.jpg"
            alt="Istoricul cotizațiilor disponibil Medicului în My CMSR"
            loading="lazy">
    </a>
    <figcaption>Medicul vede situația cotizației și plățile din istoric.</figcaption>
</figure>

## Detaliile plății

Pagina plății prezintă referința, starea, data, suma, metoda și datele de facturare asociate. În exemplu, plata este marcată **Plătită** și a fost înregistrată în numerar.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/contributions-payments/02-medic-payment-details.jpg" target="_blank">
        <img src="/screenshots/contributions-payments/02-medic-payment-details.jpg"
            alt="Detaliile unei plăți de cotizație în contul Medicului"
            loading="lazy">
    </a>
    <figcaption>Referința și informațiile plății consultate de Medic.</figcaption>
</figure>

## Evidența cotizațiilor

Operatorul poate căuta membrul după nume sau cod RU și vede suma, data, metoda și starea cotizației. Aceeași plată apare cu starea **Paid** în interfața Operatorului.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/contributions-payments/03-operator-contribution-filtered.jpg" target="_blank">
        <img src="/screenshots/contributions-payments/03-operator-contribution-filtered.jpg"
            alt="Cotizația unui membru în evidența Operatorului My CMSR"
            loading="lazy">
    </a>
    <figcaption>Operatorul găsește membrul și plata asociată în lista cotizațiilor.</figcaption>
</figure>

## Operațiunea de ghișeu

Plățile în numerar și cu cardul la ghișeu sunt urmărite separat în zona **Counter Operations**. Lista arată data, referința, membrul, perioada, suma, metoda și Operatorul care a înregistrat plata.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/contributions-payments/04-operator-counter-operation.jpg" target="_blank">
        <img src="/screenshots/contributions-payments/04-operator-counter-operation.jpg"
            alt="O plată înregistrată în lista operațiunilor de ghișeu"
            loading="lazy">
    </a>
    <figcaption>Plata în numerar apare în lista operațiunilor de ghișeu.</figcaption>
</figure>

::: info Date demonstrative
Plata și datele din capturi sunt demonstrative. Nu a fost inițiată nicio tranzacție reală și nu a fost accesat un procesator extern de plăți.
:::

Vezi și [Evidența membrilor pentru Operator](/flows/operator-members) și [Cerere Medic → procesare Operator](/flows/request-lifecycle).
