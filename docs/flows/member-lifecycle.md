# Ciclul de viață al membrului

Operatorul gestionează înscrierea, transferul, suspendarea, radierea și reînscrierea membrilor din colegiul teritorial. Fiecare schimbare este păstrată în istoricul membrului.

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
                    label: "Transfer · Rezultat",
                    title: "Membrul este transferat",
                    description: "Colegiul de destinație și data efectivă sunt înregistrate, iar profilul intră în starea corespunzătoare transferului.",
                    type: "handoff",
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

<figure class="cmsr-doc-screenshot"><a href="/screenshots/member-lifecycle/01-istoric-membru.png" target="_blank"><img src="/screenshots/member-lifecycle/01-istoric-membru.png" alt="Istoricul schimbărilor înregistrate pentru un membru" loading="lazy"></a><figcaption>Cronologia arată starea curentă și acțiunile disponibile pentru membru.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/member-lifecycle/02-transfer-actual.png" target="_blank"><img src="/screenshots/member-lifecycle/02-transfer-actual.png" alt="Formularul pentru transferul unui membru" loading="lazy"></a><figcaption>Operatorul alege colegiul și data de la care se aplică transferul.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/member-lifecycle/03-suspendare-actuala.png" target="_blank"><img src="/screenshots/member-lifecycle/03-suspendare-actuala.png" alt="Formularul pentru suspendarea unui membru" loading="lazy"></a><figcaption>Operatorul completează tipul suspendării și data de la care aceasta se aplică.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/member-lifecycle/04-radiere-actuala.png" target="_blank"><img src="/screenshots/member-lifecycle/04-radiere-actuala.png" alt="Formularul pentru radierea unui membru" loading="lazy"></a><figcaption>Operatorul completează motivul radierii și data de la care aceasta se aplică.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/member-lifecycle/05-inscriere-reinscriere-actuala.png" target="_blank"><img src="/screenshots/member-lifecycle/05-inscriere-reinscriere-actuala.png" alt="Înscrierea sau reînscrierea unui membru radiat" loading="lazy"></a><figcaption>După radiere, Operatorul poate reînscrie un membru eligibil, alegând colegiul și data efectivă.</figcaption></figure>

::: info Activarea profilului
Activarea nu este o comandă independentă a ciclului de viață. Pentru un profil eligibil, ea este rezultatul aprobării dosarului de către Operator în [Asistent completare dosar](/flows/profile-onboarding).
:::

::: warning Reluarea activității
Acțiunea de reluare este afișată condiționat de starea profilului. Documentația nu include încă o captură separată, deoarece în datele demonstrative verificate nu a fost disponibil un ecran valid pentru această stare.
:::
