# Asistent completare dosar

Asistentul de completare a dosarului este punctul comun în care datele profesionale ale Medicului sunt pregătite, verificate și predate Operatorului. Medicul îl folosește pentru propriul dosar, iar Operatorul deschide același parcurs din evidența membrului pentru verificare și corectare.

## Parcursul complet

<FlowDiagram
    title="Dosar Medic → verificare Operator"
    description="Cele două perspective folosesc aceleași informații, cu drepturi și acțiuni diferite."
    :steps='[
        {
            type: "start",
            role: "Medic · Pregătire",
            title: "Consultă arhiva și pregătește documentele",
            description: "Medicul verifică documentele existente și lista documentelor obligatorii înainte de completare.",
        },
        {
            type: "process",
            role: "Medic · Completare",
            title: "Parcurge datele personale și profesionale",
            description: "Identitatea, contactul, adresa, facturarea și datele din registrul profesional sunt verificate în pași separați.",
        },
        {
            type: "process",
            role: "Medic · Documente",
            title: "Completează fișierele și metadatele",
            description: "Documentele obligatorii sunt încărcate în categoriile corecte; specializările și competențele pot avea documente opționale.",
        },
        {
            type: "handoff",
            role: "Medic → Operator",
            title: "Verifică rezumatul și trimite dosarul",
            description: "După declarația de corectitudine, dosarul intră în validare și nu mai poate fi modificat de Medic.",
        },
        {
            type: "decision",
            role: "Operator · Verificare",
            title: "Corectează sau aprobă dosarul",
            description: "Operatorul verifică aceiași pași, poate corecta datele și aprobă activarea numai după rezolvarea lipsurilor.",
            branches: [
                {
                    label: "Clarificări",
                    title: "Dosarul rămâne în verificare",
                    description: "Medicul este informat prin mesajele și datele de contact înregistrate.",
                    type: "warning",
                },
                {
                    label: "Aprobare",
                    title: "Profilul este activat",
                    description: "Medicul primește accesul complet după decizia Operatorului.",
                    type: "success",
                },
            ],
        },
    ]'
/>

## 1. Pregătire

Medicul consultă arhiva electronică și pregătește certificatul de membru, actul de identitate, diploma de studii și asigurarea de malpraxis. Documentele pentru specializări și competențe sunt opționale și pot fi adăugate ulterior.

<figure class="cmsr-doc-screenshot"><a href="/screenshots/dosar-profesional/01-pregatire.png" target="_blank"><img src="/screenshots/dosar-profesional/01-pregatire.png" alt="Pasul Pregătire din asistentul de completare a dosarului" loading="lazy"></a><figcaption>Pregătirea explică verificarea, documentele necesare și folosirea arhivei electronice.</figcaption></figure>

## 2. Date personale

Pasul reunește identitatea, datele de contact și adresa. Data nașterii și sexul sunt precompletate din CNP. Tot aici Medicul poate folosi datele personale pentru plată sau poate completa un profil de plată separat.

<figure class="cmsr-doc-screenshot"><a href="/screenshots/dosar-profesional/02-date-personale.png" target="_blank"><img src="/screenshots/dosar-profesional/02-date-personale.png" alt="Pasul Date personale din asistentul de completare a dosarului" loading="lazy"></a><figcaption>Datele de identitate, contact, adresă și facturare sunt verificate împreună.</figcaption></figure>

## 3. Date profesionale

Colegiul, codul RU și data înscrierii provin din registrul CMSR și nu pot fi modificate în acest pas. Codul de parafă, tipul de membru și gradul profesional sunt editabile. Medicul poate semnala o informație greșită și poate declara specializări sau competențe.

<figure class="cmsr-doc-screenshot"><a href="/screenshots/dosar-profesional/03-date-profesionale.png" target="_blank"><img src="/screenshots/dosar-profesional/03-date-profesionale.png" alt="Pasul Date profesionale din asistentul de completare a dosarului" loading="lazy"></a><figcaption>Datele de registru sunt diferențiate de informațiile pe care Medicul le poate actualiza.</figcaption></figure>

## 4. Documente

Fișierele sunt grupate pe tip de document, împreună cu metadatele și starea lor. Arhiva rămâne o zonă de consultare: fișierul util este descărcat și încărcat manual în categoria potrivită.

<figure class="cmsr-doc-screenshot"><a href="/screenshots/dosar-profesional/04-documente.png" target="_blank"><img src="/screenshots/dosar-profesional/04-documente.png" alt="Pasul Documente din asistentul de completare a dosarului" loading="lazy"></a><figcaption>Pasul Documente separă fișierele obligatorii de cele opționale și cere metadatele relevante.</figcaption></figure>

## 5. Rezumat și trimitere

Rezumatul verifică fiecare secțiune, indică lipsurile obligatorii și oferă revenire directă la pasul care trebuie corectat. Trimiterea devine disponibilă numai după rezolvarea lipsurilor și confirmarea declarației.

<figure class="cmsr-doc-screenshot"><a href="/screenshots/dosar-profesional/05-rezumat.png" target="_blank"><img src="/screenshots/dosar-profesional/05-rezumat.png" alt="Rezumatul asistentului de completare a dosarului" loading="lazy"></a><figcaption>Rezumatul arată informațiile declarate și lipsurile care blochează trimiterea.</figcaption></figure>

## Dosarul în verificare

După trimitere, Medicul vede progresul în trei etape: dosar trimis, verificare Operator CMSR și activare profil. În această stare, dosarul nu mai poate fi modificat de Medic.

<figure class="cmsr-doc-screenshot"><a href="/screenshots/dosar-profesional/06-in-verificare.png" target="_blank"><img src="/screenshots/dosar-profesional/06-in-verificare.png" alt="Dosarul Medicului aflat în verificare" loading="lazy"></a><figcaption>Medicul urmărește starea dosarului și colegiul care îl verifică.</figcaption></figure>

## Verificarea de către Operator

Operatorul deschide dosarul din evidența membrilor și parcurge aceiași pași. Poate verifica și corecta informațiile înaintea aprobării; activarea este rezultatul aprobării dosarului, nu o acțiune separată disponibilă oricând.

<figure class="cmsr-doc-screenshot"><a href="/screenshots/dosar-profesional/07-verificare-operator.png" target="_blank"><img src="/screenshots/dosar-profesional/07-verificare-operator.png" alt="Dosarul Medicului deschis de Operator" loading="lazy"></a><figcaption>Operatorul vede identitatea membrului, starea dosarului și toate etapele care trebuie verificate.</figcaption></figure>
