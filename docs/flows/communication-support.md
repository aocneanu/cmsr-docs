# Mesaje, notificări și ajutor

Fiecare rol primește notificările care îi sunt adresate. Medicul are și o zonă de mesaje, precum și acces la întrebările frecvente publicate de Administrator.

## Diagrama notificărilor Admin–Operator

<FlowDiagram
    title="Transmiterea unei notificări către Operatori"
    description="Administratorul transmite informări relevante Operatorilor."
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
    description="Mesajul este transmis în aplicația My CMSR a Medicului."
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

Zona **Mesaje** afișează notificările primite, momentul transmiterii și starea de citire. Exemplul pornește de la cererea transmisă de Medic.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/communication-support/01-medic-inbox.jpg" target="_blank">
        <img src="/screenshots/communication-support/01-medic-inbox.jpg"
            alt="Lista de notificări din contul Medicului"
            loading="lazy">
    </a>
    <figcaption>Confirmarea înregistrării cererii apare în lista de mesaje a Medicului.</figcaption>
</figure>

Deschiderea mesajului afișează expeditorul de sistem, titlul, data și conținutul notificării. Mesajul este marcat drept citit la consultare.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/communication-support/02-medic-notification.jpg" target="_blank">
        <img src="/screenshots/communication-support/02-medic-notification.jpg"
            alt="Detaliul unei notificări de sistem pentru Medic"
            loading="lazy">
    </a>
    <figcaption>Mesajul confirmă automat înregistrarea cererii.</figcaption>
</figure>

## Notificările Operatorului

Operatorul primește notificările operaționale în zona dedicată. Sumarul arată mesajele necitite, activitatea zilei, mesajele procesate și totalul, iar lista poate fi căutată și filtrată după stare.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/communication-support/03-operator-inbox.jpg" target="_blank">
        <img src="/screenshots/communication-support/03-operator-inbox.jpg"
            alt="Inbox-ul de notificări al Operatorului"
            loading="lazy">
    </a>
    <figcaption>Operatorul este informat că cererea Medicului este pregătită pentru verificare.</figcaption>
</figure>

## Întrebări frecvente pentru Medic

Secțiunea **Întrebări frecvente** grupează răspunsurile publicate în platformă. Medicul poate deschide răspunsul dorit direct din aplicația My CMSR.

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/communication-support/04-medic-faq.jpg" target="_blank">
        <img src="/screenshots/communication-support/04-medic-faq.jpg"
            alt="Întrebări frecvente și un răspuns deschis în contul Medicului"
            loading="lazy">
    </a>
    <figcaption>Exemplu de răspuns publicat despre creditele EMC.</figcaption>
</figure>

::: info De reținut
Mesajele și notificările prezentate nu reprezintă un canal de conversație directă între Medic și Operator.
:::

Vezi și [Cerere Medic → procesare Operator](/flows/request-lifecycle), [Credite EMC: transmitere și procesare](/flows/emc-credits) și [Acces și securitate](/flows/access-security).
