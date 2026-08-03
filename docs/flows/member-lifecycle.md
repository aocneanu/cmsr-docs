# Ciclul de viață al membrului

Operatorul gestionează înscrierea, transferul, suspendarea și radierea membrilor din colegiul teritorial. Fiecare schimbare este păstrată în istoricul membrului.

## Fluxul operațional

<FlowDiagram
    title="Gestionarea ciclului de viață"
    description="Acțiunile sunt păstrate în istoricul membrului."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Operator",
            title: "Deschide evidența membrului",
            description: "Operatorul selectează membrul din colegiul teritorial și îi consultă istoricul.",
        },
        {
            type: "handoff",
            role: "Acțiune · Operator",
            title: "Selectează acțiunea de ciclu de viață",
            description: "Sistemul afișează acțiunile disponibile pentru înregistrarea curentă.",
        },
        {
            type: "decision",
            role: "Validare · My CMSR",
            title: "Ce acțiune este inițiată?",
            description: "Sistemul validează starea profilului înainte de înregistrarea evenimentului.",
            branches: [
                {
                    label: "Înscriere · Rezultat",
                    title: "Membrul este înscris sau reînscris",
                    description: "Evenimentul de înscriere este adăugat, iar evidența membrului este actualizată.",
                    type: "success",
                },
                {
                    label: "Suspendare · Rezultat",
                    title: "Membrul este suspendat",
                    description: "Suspendarea este înregistrată în istoricul și starea membrului.",
                    type: "warning",
                },
                {
                    label: "Radiere · Rezultat",
                    title: "Membrul este radiat",
                    description: "Radierea și motivul asociat sunt înregistrate în evidența membrului.",
                    type: "danger",
                },
            ],
        },
    ]'
/>

## Capturi din flux

<figure class="cmsr-doc-screenshot"><a href="/screenshots/member-lifecycle/01-member-timeline.jpg" target="_blank"><img src="/screenshots/member-lifecycle/01-member-timeline.jpg" alt="Istoricul schimbărilor înregistrate pentru un membru" loading="lazy"></a><figcaption>Istoricul arată schimbările înregistrate pentru membru.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/member-lifecycle/05-inscriere-reinscriere.png" target="_blank"><img src="/screenshots/member-lifecycle/05-inscriere-reinscriere.png" alt="Înscrierea sau reînscrierea unui membru radiat" loading="lazy"></a><figcaption>Operatorul selectează colegiul și data efectivă pentru înscrierea sau reînscrierea unui membru eligibil.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/member-lifecycle/02-transfer.jpg" target="_blank"><img src="/screenshots/member-lifecycle/02-transfer.jpg" alt="Formularul pentru transferul unui membru" loading="lazy"></a><figcaption>Operatorul alege colegiul și data de la care se aplică transferul.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/member-lifecycle/03-suspend.jpg" target="_blank"><img src="/screenshots/member-lifecycle/03-suspend.jpg" alt="Formularul pentru suspendarea unui membru" loading="lazy"></a><figcaption>Operatorul completează tipul suspendării și data de la care aceasta se aplică.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/member-lifecycle/04-deregister.jpg" target="_blank"><img src="/screenshots/member-lifecycle/04-deregister.jpg" alt="Formularul pentru radierea unui membru" loading="lazy"></a><figcaption>Operatorul completează motivul radierii și data de la care aceasta se aplică.</figcaption></figure>

::: warning În curs de clarificare
„Activare” nu este încă documentată ca acțiune distinctă și nu apare în diagramă sau în capturi.
:::

::: info Date demonstrative
Formularul de înscriere sau reînscriere din captură nu a fost trimis.
:::
