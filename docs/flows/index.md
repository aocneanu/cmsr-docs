# Prezentare

Această pagină prezintă legăturile dintre cele trei perspective.

::: info Cum să citești pagina
Descrierile de mai jos arată responsabilitățile fiecărui rol și punctele în care acestea se întâlnesc. Regulile specifice fiecărui tip de cerere sau document sunt explicate în paginile dedicate.
:::

## Acces comun

Administratorul, Operatorul și Medicul folosesc același flux de autentificare și resetare a parolei. Vezi [Acces și securitate](/flows/access-security).

## Asistent completare dosar

[Asistentul de completare a dosarului](/flows/profile-onboarding) este punctul comun dintre Medic și Operator: Medicul pregătește și trimite dosarul profesional, iar Operatorul verifică aceiași pași, corectează informațiile și aprobă activarea profilului.

## Zone comune și responsabilități

| Zonă | Medic | Operator | Administrator |
| --- | --- | --- | --- |
| [Acces și securitate](/flows/access-security) | Resetarea parolei și revenirea la autentificare | Resetarea parolei și revenirea la autentificare | Resetarea parolei și revenirea la autentificare |
| [Evidența și ciclul de viață al membrului](/flows/operator-members) | Consultarea propriei stări și inițierea solicitărilor | Filtrare, export, înscriere, transfer, suspendare, radiere și reînscriere | Corectarea controlată a unei decizii operaționale și auditarea schimbării |
| [Validarea documentelor](/flows/profile-document-validation) | Încărcarea documentelor de profil și primirea rezultatului | Verificarea, aprobarea sau respingerea documentelor | Configurarea tipurilor, câmpurilor și stărilor documentelor |
| [Cereri](/flows/request-lifecycle) | Depunerea, completarea și urmărirea cererii | Gestionarea și soluționarea cererilor județene | Configuratorul tipurilor de cereri |
| [Cotizație și plată](/flows/contributions-payments) | Plata online și consultarea istoricului | Înregistrarea plății din profilul membrului și operațiuni de ghișeu | Administrarea configurației cotizațiilor |
| [Credite EMC](/flows/emc-credits) | Depunerea cererilor și consultarea creditelor | Verificarea cererilor și gestionarea creditelor EMC | Configurarea informațiilor folosite în sistem |
| [Diplome](/flows/medic-diplomas) | Consultarea diplomelor asociate evenimentelor eligibile | Verifică diplomele atașate de medic la cererile de acordare a creditelor EMC. | Configurarea evenimentelor și participanților |
| [Comunicare](/flows/communication-support) | Mesaje și notificări din zona Admin | Notificări operaționale din zona Admin | Selectarea audienței și transmiterea conținutului |
| Audit | Vizualizarea timeline-ului și a evenimentelor din fluxurile specifice. | Vizualizarea timeline-ului și a evenimentelor din fluxurile specifice. | Auditul autentificărilor, acțiunilor, modificărilor și apelurilor API. |

## Cum colaborează rolurile

### Evidență și documente

Medicul își consultă profilul, datele profesionale și documentele. Operatorul gestionează dosarele membrilor din colegiul teritorial, iar Administratorul configurează tipurile și șabloanele de documente folosite în sistem.

Vezi fluxurile ilustrate [Profilul Medicului și documentele](/flows/medic-profile), [Validarea documentelor de profil](/flows/profile-document-validation) și [Evidența membrilor pentru Operator](/flows/operator-members).

### Cereri

Medicul depune și urmărește cererile, Operatorul le analizează, iar Administratorul configurează tipurile disponibile. Vezi [depunerea și procesarea unei cereri](/flows/request-lifecycle). Cerințele diferă în funcție de tipul cererii.

### Cotizație, plată și credite EMC

Medicul își consultă cotizația, plățile și creditele EMC. Operatorul poate înregistra plata din profilul membrului, gestionează operațiunile de ghișeu și procesează cererile pentru credite, iar Administratorul configurează informațiile necesare acestor procese. Vezi [cotizația și plata](/flows/contributions-payments) și [cererile pentru credite EMC](/flows/emc-credits).

### Comunicare

Administratorul transmite mesaje și notificări către Medici și notificări operaționale către Operatori. Vezi [Mesaje, notificări și ajutor](/flows/communication-support).

### Filtrare, export și audit

Operatorul folosește widgeturile din [Evidența membrilor](/flows/operator-members) pentru a filtra și exporta membrii cu probleme de cotizație, credite EMC insuficiente, acte de identitate expirate sau asigurări expirate. Administratorul poate consulta autentificările, acțiunile, modificările înregistrate și jurnalul API.

## Explorează prezentarea

### Puncte comune

- [Acces și securitate](/flows/access-security)
- [Asistent completare dosar](/flows/profile-onboarding)

### Operator

- [Perspectiva Operator](/audiences/operator)
- [Evidența membrilor](/flows/operator-members)
- [Înscriere, transfer, suspendare, radiere și reînscriere](/flows/member-lifecycle)
- [Validarea documentelor](/flows/profile-document-validation)
- [Cereri](/flows/request-lifecycle)
- [Cotizații și tranzacții](/flows/contributions-payments)
- [Credite EMC](/flows/emc-credits)
- [Mesaje și notificări](/flows/communication-support)

### Medic

- [Perspectiva Medic](/audiences/medic)
- [Dashboard, profil și documente](/flows/medic-profile)
- [Semnătură, facturare, adrese și locuri de muncă](/flows/medic-settings)
- [Cotizație și plată](/flows/contributions-payments)
- [Credite EMC](/flows/emc-credits)
- [Diplome](/flows/medic-diplomas)
- [Cereri](/flows/request-lifecycle)
- [Transfer, suspendare și radiere](/flows/member-lifecycle)
- [Mesaje, notificări și FAQ](/flows/communication-support)

### Administrator

- [Perspectiva Administrator](/audiences/administrator)
- [Back-office și acțiuni corective](/flows/admin-backoffice)

## Conținut disponibil

| Perspectivă | Zone documentate | Stare |
| --- | --- | --- |
| Medic | acces, Dashboard, profil, setări, documente, cotizație și plată, EMC, diplome, cereri, mesaje și FAQ | Disponibil; starea goală a listei de diplome este ilustrată |
| Operator | membri, filtre și exporturi, documente, cereri, EMC, cotizații, ghișeu, notificări și ciclul de viață | Disponibil |
| Administrator | configurări, conținut, mesagerie, notificări, evenimente și audit | Disponibil |
| Operator — Activare | rezultatul aprobării din asistentul de completare a dosarului | Disponibil în contextul dosarului eligibil |
