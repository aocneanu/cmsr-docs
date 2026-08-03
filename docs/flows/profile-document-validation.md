# Document de profil: transmitere și validare

Documentele încărcate de Medic sunt trimise Operatorului din colegiul teritorial pentru verificare. Exemplul urmărește o asigurare nouă, afișată separat de documentul deja aprobat.

## Diagrama fluxului

<FlowDiagram
    title="Încărcarea și validarea unui document"
    description="Decizia Operatorului actualizează starea documentului și informează Medicul."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Medic",
            title: "Selectează tipul de document",
            description: "Medicul completează câmpurile disponibile și încarcă fișierul documentului.",
        },
        {
            type: "action",
            role: "Validare · My CMSR",
            title: "Verifică formularul și înregistrează documentul",
            description: "Documentul este salvat cu starea inițială și nu este activ până la aprobare.",
        },
        {
            type: "handoff",
            role: "Transfer · Medic → Operator",
            title: "Trimite documentul pentru validare",
            description: "Operatorii colegiului primesc notificarea despre documentul nou.",
        },
        {
            type: "decision",
            role: "Decizie · Operator",
            title: "Care este rezultatul validării?",
            description: "Operatorul consultă documentul, datele membrului și câmpurile asociate.",
            branches: [
                {
                    label: "Aprobat · Rezultat",
                    title: "Documentul devine activ",
                    description: "Documentul este aprobat, iar Medicul este notificat.",
                    type: "success",
                },
                {
                    label: "Respins · Rezultat",
                    title: "Documentul rămâne inactiv",
                    description: "Documentul este respins, iar Medicul este notificat.",
                    type: "danger",
                },
            ],
        },
    ]'
/>

## Urmărirea documentelor în profilul Medicului

În **Profil → Documente**, Medicul vede tipul documentului, câmpurile relevante, starea validării și dacă documentul este activ. Un document nou rămâne inactiv până la finalizarea verificării.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/profile-document-validation/01-medic-documents.jpg" target="_blank">
        <img src="/screenshots/profile-document-validation/01-medic-documents.jpg"
            alt="Documentele aprobate și documentul nou din profilul Medicului"
            loading="lazy">
    </a>
    <figcaption>Asigurarea nouă are starea „Nou” și apare separat de documentul aprobat.</figcaption>
</figure>

## Lista documentelor care așteaptă validarea

Zona **Document Validations** reunește documentele care trebuie verificate de Operator. Sumarul arată câte documente sunt în așteptare, aprobate sau respinse, iar lista poate fi căutată și filtrată după tip și stare.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/profile-document-validation/02-operator-validation-queue.jpg" target="_blank">
        <img src="/screenshots/profile-document-validation/02-operator-validation-queue.jpg"
            alt="Coada de validare a documentelor pentru Operator"
            loading="lazy">
    </a>
    <figcaption>Documentul nou este identificat prin membru, cod RU, tip, dată, referință și stare.</figcaption>
</figure>

## Verificarea documentului

În detaliu, Operatorul consultă informațiile membrului, câmpurile specifice tipului de document și previzualizarea PDF. Starea poate fi actualizată împreună cu valorile documentului, folosind opțiunile active configurate în sistem.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/profile-document-validation/03-operator-document-review.jpg" target="_blank">
        <img src="/screenshots/profile-document-validation/03-operator-document-review.jpg"
            alt="Revizuirea unei asigurări în interfața Operatorului"
            loading="lazy">
    </a>
    <figcaption>Operatorul verifică datele asigurării și documentul PDF înainte de a lua o decizie.</figcaption>
</figure>

::: info Date demonstrative
Datele și documentele din capturi sunt demonstrative. Criteriile de aprobare și termenele de soluționare depind de tipul documentului și de regulile aplicabile.
:::

Vezi și [Profilul Medicului și documentele](/flows/medic-profile), [Evidența membrilor pentru Operator](/flows/operator-members) și [Credite EMC: transmitere și procesare](/flows/emc-credits).
