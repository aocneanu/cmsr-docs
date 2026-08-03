# Cotizația Medicului și evidența Operatorului

Fluxul cotizațiilor conectează istoricul financiar disponibil Medicului cu evidența județeană administrată de Operator. Exemplul de mai jos urmărește o plată cash demonstrativă pentru luna curentă, înregistrată exclusiv în mediul local.

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
            role: "Context · Admin → Operator",
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
    <figcaption>Situația la zi și plata demonstrativă din istoricul Medicului.</figcaption>
</figure>

## Detaliile plății

Pagina plății prezintă referința, starea, data, suma, metoda și datele de facturare asociate. În exemplul demonstrativ, plata este marcată **Plătită** și a fost înregistrată cash.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/contributions-payments/02-medic-payment-details.jpg" target="_blank">
        <img src="/screenshots/contributions-payments/02-medic-payment-details.jpg"
            alt="Detaliile unei plăți de cotizație în perspectiva Medicului"
            loading="lazy">
    </a>
    <figcaption>Referința și informațiile plății consultate de Medic.</figcaption>
</figure>

## Evidența cotizațiilor

Operatorul poate căuta membrul după nume sau cod RU și vede suma, data, metoda și starea contribuției. Aceeași plată demonstrativă apare cu starea **Paid** în evidența județeană.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/contributions-payments/03-operator-contribution-filtered.jpg" target="_blank">
        <img src="/screenshots/contributions-payments/03-operator-contribution-filtered.jpg"
            alt="Cotizația unui membru în evidența Operatorului My CMSR"
            loading="lazy">
    </a>
    <figcaption>Membrul demo filtrat în lista cotizațiilor Operatorului.</figcaption>
</figure>

## Operațiunea de ghișeu

Plățile cash și cu card fizic înregistrate de Operator sunt urmărite separat în zona **Counter Operations**. Jurnalul păstrează data, referința, membrul, perioada acoperită, suma, metoda și Operatorul care a înregistrat operațiunea.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/contributions-payments/04-operator-counter-operation.jpg" target="_blank">
        <img src="/screenshots/contributions-payments/04-operator-counter-operation.jpg"
            alt="Operațiunea de ghișeu demonstrativă în My CMSR"
            loading="lazy">
    </a>
    <figcaption>Trasabilitatea plății cash în jurnalul operațiunilor de ghișeu.</figcaption>
</figure>

::: info Scopul prezentării
Plata și datele afișate sunt demonstrative și provin exclusiv din mediul local. Nu a fost inițiată nicio tranzacție reală și nu a fost accesat niciun procesator extern de plăți.
:::

Vezi și [Evidența membrilor pentru Operator](/flows/operator-members) și [Cerere Medic → procesare Operator](/flows/request-lifecycle).
