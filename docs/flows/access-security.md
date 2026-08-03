# Acces și securitate

Accesul în My CMSR este comun Administratorului, Operatorului și Medicului. În prezentare, resetarea parolei este demonstrată o singură dată.

## Resetarea parolei

<FlowDiagram
    title="Resetarea parolei"
    description="Flux comun celor trei roluri My CMSR."
    :steps='[
        {
            type: "start",
            role: "Inițiator · Utilizator",
            title: "Solicită resetarea parolei",
            description: "Administratorul, Operatorul sau Medicul deschide opțiunea de resetare și completează adresa de e-mail.",
        },
        {
            type: "handoff",
            role: "Transfer · My CMSR → Utilizator",
            title: "Primește legătura de resetare",
            description: "Sistemul trimite mecanismul de continuare a resetării către utilizator.",
        },
        {
            type: "action",
            role: "Utilizator",
            title: "Completează parola nouă",
            description: "Utilizatorul completează adresa de e-mail, parola nouă și confirmarea parolei.",
        },
        {
            type: "decision",
            role: "Validare · My CMSR",
            title: "Parola și confirmarea sunt valide?",
            description: "Formularul verifică datele necesare înainte de actualizare.",
            branches: [
                {
                    label: "Da · Rezultat",
                    title: "Parola este actualizată",
                    description: "Utilizatorul revine în zona de autentificare și accesează interfața rolului său.",
                    type: "success",
                },
                {
                    label: "Nu · Rezultat",
                    title: "Sunt afișate validările",
                    description: "Utilizatorul corectează datele din formular înainte de retrimitere.",
                    type: "warning",
                },
            ],
        },
    ]'
/>

## Capturi din flux

### Accesul la resetarea parolei

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/password-reset/01-login-forgot-password.jpg" target="_blank">
        <img src="/screenshots/password-reset/01-login-forgot-password.jpg"
            alt="Accesul la opțiunea de resetare a parolei din pagina de autentificare My CMSR"
            loading="lazy">
    </a>
    <figcaption>Opțiunea de recuperare a accesului disponibilă în pagina de autentificare My CMSR.</figcaption>
</figure>

### Solicitarea legăturii de resetare

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/password-reset/02-request-reset-link.jpg" target="_blank">
        <img src="/screenshots/password-reset/02-request-reset-link.jpg"
            alt="Formularul My CMSR pentru solicitarea legăturii de resetare a parolei"
            loading="lazy">
    </a>
    <figcaption>Formularul în care utilizatorul introduce adresa de e-mail pentru a solicita legătura de resetare.</figcaption>
</figure>

### Confirmarea solicitării

<figure class="cmsr-doc-screenshot">
    <a href="/screenshots/password-reset/03-reset-link-confirmation.jpg" target="_blank">
        <img src="/screenshots/password-reset/03-reset-link-confirmation.jpg"
            alt="Confirmarea My CMSR pentru solicitarea legăturii de resetare a parolei"
            loading="lazy">
    </a>
    <figcaption>Confirmarea afișată după trimiterea solicitării pentru resetarea parolei.</figcaption>
</figure>

::: info Limită de documentare
Diagrama nu descrie reguli tehnice pentru expirarea legăturii sau politica parolelor, deoarece acestea nu fac parte din planul de prezentare validat.
:::

Continuă cu [Fluxuri My CMSR](/flows/) pentru conexiunile dintre cele trei perspective.
