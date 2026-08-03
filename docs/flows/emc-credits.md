# Credite EMC

Medicul poate depune o cerere pentru credite EMC, iar Operatorul o procesează în aplicația județeană.

## Fluxul cererii EMC

<FlowDiagram
    title="Depunerea și procesarea unei cereri EMC"
    description="Cererea leagă experiența Medicului de activitatea Operatorului."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Medic",
            title: "Depune cererea EMC",
            description: "Medicul selectează sursa creditelor, completează informațiile solicitate și atașează documentul disponibil.",
        },
        {
            type: "handoff",
            role: "Transfer · Medic → Operator",
            title: "Cererea intră în zona Operatorului",
            description: "Operatorii colegiului sunt notificați despre cererea EMC nouă.",
        },
        {
            type: "action",
            role: "Validare · Operator",
            title: "Verifică sursa și documentul",
            description: "Operatorul consultă cererea, documentul și sursa de credit selectată.",
        },
        {
            type: "decision",
            role: "Decizie · Operator",
            title: "Care este rezultatul procesării?",
            branches: [
                {
                    label: "Aprobare · Rezultat",
                    title: "Creditul EMC este acordat",
                    description: "Creditul este adăugat în evidența Medicului, iar acesta este notificat.",
                    type: "success",
                },
                {
                    label: "Respingere · Rezultat",
                    title: "Cererea este respinsă",
                    description: "Starea cererii este actualizată, iar Medicul este notificat.",
                    type: "danger",
                },
                {
                    label: "Eveniment · Transfer",
                    title: "Cererea poate fi escaladată",
                    description: "Pentru sursa de tip eveniment, cererea poate fi trimisă unui supervizor pentru verificare.",
                    type: "info",
                },
            ],
        },
    ]'
/>

::: info Acțiune suplimentară confirmată
Operatorul poate adăuga direct un credit EMC unui membru; creditul este înregistrat, iar Medicul este notificat.
:::
