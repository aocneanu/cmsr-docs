# Diplomele Medicului

Zona **Diplome** reunește diplomele asociate evenimentelor acreditate CMSR și oferă căutare și filtre după stare și anul evenimentului.

## Consultarea diplomelor

<FlowDiagram
    title="Consultarea diplomelor"
    description="Conținutul listei depinde de evenimentele eligibile asociate profilului Medicului."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Medic",
            title: "Deschide zona Diplome",
            description: "Medicul accesează lista diplomelor din navigarea My CMSR.",
        },
        {
            type: "decision",
            role: "Verificare · My CMSR",
            title: "Există evenimente eligibile?",
            branches: [
                {
                    label: "Da · Rezultat",
                    title: "Sunt afișate diplomele disponibile",
                    description: "Lista poate fi restrânsă după text, stare și anul evenimentului.",
                    type: "success",
                },
                {
                    label: "Nu · Fără rezultate",
                    title: "Este afișată starea goală",
                    description: "My CMSR explică faptul că nu există evenimente pentru care poate fi emisă o diplomă.",
                    type: "warning",
                },
            ],
        },
    ]'
/>

## Capturi din flux

### Lista diplomelor

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/medic-diplomas/01-lista-diplomelor.png" target="_blank">
        <img src="/screenshots/medic-diplomas/01-lista-diplomelor.png"
            alt="Zona Diplome fără evenimente eligibile pentru profilul Medicului"
            loading="lazy">
    </a>
    <figcaption>Chiar dacă nu există diplome, căutarea și filtrele rămân disponibile.</figcaption>
</figure>

::: info Date demonstrative
Profilul demonstrativ nu are evenimente eligibile pentru emiterea unei diplome, astfel că lista este goală.
:::

Vezi și [Credite EMC: transmitere și procesare](/flows/emc-credits) și [Profilul Medicului și documentele](/flows/medic-profile).
