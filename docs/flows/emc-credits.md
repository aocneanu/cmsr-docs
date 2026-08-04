# Credite EMC

Medicul solicită acordarea creditelor EMC, iar Operatorul din colegiul teritorial verifică cererea și documentele trimise.

## Fluxul cererii EMC

<FlowDiagram
    title="Depunerea și procesarea unei cereri EMC"
    description="Medicul trimite cererea, iar Operatorul o verifică și stabilește rezultatul."
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

## Capturi din flux

<figure class="cmsr-doc-screenshot"><a href="/screenshots/emc-credits/01-medic-emc-overview.jpg" target="_blank"><img src="/screenshots/emc-credits/01-medic-emc-overview.jpg" alt="Situația creditelor EMC din contul Medicului" loading="lazy"></a><figcaption>Medicul vede progresul creditelor EMC și poate începe o cerere nouă.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/emc-credits/02-operator-emc-queue.jpg" target="_blank"><img src="/screenshots/emc-credits/02-operator-emc-queue.jpg" alt="Coada cererilor EMC a Operatorului" loading="lazy"></a><figcaption>Operatorul filtrează și deschide cererile EMC ale colegiului.</figcaption></figure>

<figure class="cmsr-doc-screenshot"><a href="/screenshots/emc-credits/03-operator-emc-processing.jpg" target="_blank"><img src="/screenshots/emc-credits/03-operator-emc-processing.jpg" alt="Ecranul pentru verificarea unei cereri EMC" loading="lazy"></a><figcaption>Operatorul consultă documentul și informațiile despre sursa creditelor.</figcaption></figure>

::: info Adăugarea de credite
Operatorul poate adăuga direct credite EMC unui membru; creditul este înregistrat, iar Medicul este notificat.
:::
