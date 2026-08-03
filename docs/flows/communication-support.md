# Mesaje, notificări și ajutor

My CMSR oferă fiecărui rol o zonă proprie de notificări. Evenimentele operaționale relevante sunt transformate în mesaje de sistem, iar Medicul are separat acces la întrebările frecvente publicate în platformă.

## Diagrama notificărilor Admin–Operator

<FlowDiagram
    title="Transmiterea unei notificări către Operatori"
    description="Zona este prezentată Operatorului ca flux de notificări operaționale."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Administrator",
            title: "Creează notificarea",
            description: "Administratorul selectează rolul Operator, colegiul sau destinatarii și completează titlul și conținutul.",
        },
        {
            type: "decision",
            role: "Validare · My CMSR",
            title: "Există Operatori activi eligibili?",
            branches: [
                {
                    label: "Da · Transfer Admin → Operator",
                    title: "Operatorul primește notificarea",
                    description: "Sistemul distribuie notificarea, iar Operatorul o poate deschide și marca drept citită în zona dedicată.",
                    type: "success",
                },
                {
                    label: "Nu · Rezultat",
                    title: "Trimiterea nu este creată",
                    description: "Administratorul primește validarea privind lipsa destinatarilor eligibili.",
                    type: "warning",
                },
            ],
        },
    ]'
/>

## Diagrama mesajelor și notificărilor Admin–Medic

<FlowDiagram
    title="Transmiterea unui mesaj către Medici"
    description="Mesajul este distribuit în experiența My CMSR a Medicului."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Administrator",
            title: "Creează mesajul",
            description: "Administratorul selectează rolul Medic, colegiul sau destinatarii și completează titlul și conținutul.",
        },
        {
            type: "decision",
            role: "Validare · My CMSR",
            title: "Există Medici activi eligibili?",
            branches: [
                {
                    label: "Da · Transfer Admin → Medic",
                    title: "Medicul primește mesajul sau notificarea",
                    description: "Conținutul apare în zona Mesaje, poate fi transmis prin notificare mobilă atunci când canalul este disponibil și poate fi marcat drept citit.",
                    type: "success",
                },
                {
                    label: "Nu · Rezultat",
                    title: "Trimiterea nu este creată",
                    description: "Administratorul primește validarea privind lipsa destinatarilor eligibili.",
                    type: "warning",
                },
            ],
        },
    ]'
/>

## Notificările Medicului

Zona **Mesaje** afișează notificările primite, momentul transmiterii și starea de citire. Exemplul local pornește de la cererea demonstrativă transmisă de Medic.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/communication-support/01-medic-inbox.jpg" target="_blank">
        <img src="/screenshots/communication-support/01-medic-inbox.jpg"
            alt="Lista de notificări din contul Medicului"
            loading="lazy">
    </a>
    <figcaption>Confirmarea înregistrării cererii apare în inbox-ul Medicului.</figcaption>
</figure>

Deschiderea mesajului afișează expeditorul de sistem, titlul, data și conținutul notificării. Mesajul este marcat drept citit la consultare.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/communication-support/02-medic-notification.jpg" target="_blank">
        <img src="/screenshots/communication-support/02-medic-notification.jpg"
            alt="Detaliul unei notificări de sistem pentru Medic"
            loading="lazy">
    </a>
    <figcaption>Detaliul confirmării automate pentru cererea demonstrativă.</figcaption>
</figure>

## Notificările Operatorului

Operatorul primește separat notificarea operațională corespunzătoare. Inbox-ul oferă indicatori pentru mesajele necitite, activitatea zilei, mesajele procesate și total, plus căutare și filtrare după stare.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/communication-support/03-operator-inbox.jpg" target="_blank">
        <img src="/screenshots/communication-support/03-operator-inbox.jpg"
            alt="Inbox-ul de notificări al Operatorului"
            loading="lazy">
    </a>
    <figcaption>Operatorul este informat că cererea Medicului este pregătită pentru verificare.</figcaption>
</figure>

## Întrebări frecvente pentru Medic

Secțiunea **Întrebări frecvente** grupează răspunsurile publicate în platformă. Medicul deschide punctual întrebarea dorită, fără a părăsi experiența My CMSR.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/communication-support/04-medic-faq.jpg" target="_blank">
        <img src="/screenshots/communication-support/04-medic-faq.jpg"
            alt="Întrebări frecvente și un răspuns deschis în contul Medicului"
            loading="lazy">
    </a>
    <figcaption>Exemplu de răspuns publicat despre creditele EMC.</figcaption>
</figure>

::: info Scopul prezentării
Mesajele și datele provin exclusiv din mediul local. Capturile confirmă notificările automate și conținutul FAQ disponibil; nu presupun existența unui canal de conversație directă între Medic și Operator.
:::

Vezi și [Cerere Medic → procesare Operator](/flows/request-lifecycle), [Credite EMC: transmitere și procesare](/flows/emc-credits) și [Acces și securitate](/flows/access-security).
