# Ciclul de viață al membrului

Operatorul gestionează evenimentele de ciclu de viață din evidența județeană. Înregistrarea, suspendarea și radierea sunt prezente în implementare; activarea rămâne de confirmat.

## Fluxul operațional

<FlowDiagram
    title="Gestionarea ciclului de viață"
    description="Acțiunile sunt păstrate în istoricul membrului."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Operator",
            title: "Deschide evidența membrului",
            description: "Operatorul selectează membrul din aria județeană și consultă istoricul acestuia.",
        },
        {
            type: "handoff",
            role: "Transfer · Operator → My CMSR",
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
                {
                    label: "Activare",
                    title: "Trebuie confirmat",
                    description: "Etapa, validarea și rezultatul activării nu sunt încă documentate ca flux confirmat.",
                    type: "uncertain",
                },
            ],
        },
    ]'
/>

::: warning Punct deschis
Fluxul numit „Activare” trebuie confirmat înainte de a fi prezentat ca funcționalitate disponibilă.
:::
