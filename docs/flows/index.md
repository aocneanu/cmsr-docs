# Fluxuri My CMSR

Această pagină prezintă legăturile dintre cele trei perspective.

::: info Cum să citești pagina
Descrierile de mai jos arată responsabilitățile fiecărui rol și punctele în care acestea se întâlnesc. Regulile specifice fiecărui tip de cerere sau document sunt explicate în paginile dedicate.
:::

## Acces comun

Administratorul, Operatorul și Medicul folosesc același flux de autentificare și resetare a parolei. Vezi [Acces și securitate](/flows/access-security).

## Zone comune și responsabilități

| Zonă | Medic | Operator | Administrator |
| --- | --- | --- | --- |
| [Acces și securitate](/flows/access-security) | Resetarea parolei și revenirea la autentificare | Resetarea parolei și revenirea la autentificare | Resetarea parolei și revenirea la autentificare |
| [Ciclul de viață al membrului](/flows/member-lifecycle) | Consultarea propriei stări | Înscriere, transfer, suspendare și radiere | Configurarea stărilor folosite în sistem |
| [Validarea documentelor](/flows/profile-document-validation) | Încărcarea documentelor de profil și primirea rezultatului | Verificarea, aprobarea sau respingerea documentelor | Configurarea tipurilor, câmpurilor și stărilor documentelor |
| [Cereri](/flows/request-lifecycle) | Depunerea, completarea și urmărirea cererii | Gestionarea și soluționarea cererilor județene | Configuratorul tipurilor de cereri |
| [Plăți, cotizații și ghișeu](/flows/contributions-payments) | Plata online și consultarea istoricului | Înregistrarea cotizațiilor și operațiunilor de ghișeu | Administrarea configurației cotizațiilor |
| [Credite EMC](/flows/emc-credits) | Depunerea cererilor și consultarea creditelor | Verificarea cererilor și gestionarea creditelor EMC | Configurarea informațiilor folosite în sistem |
| [Diplome](/flows/medic-diplomas) | Consultarea diplomelor asociate evenimentelor eligibile | Verifică diplomele atașate de medic la cererile de acordare a creditelor EMC. | Configurarea evenimentelor și participanților |
| [Comunicare](/flows/communication-support) | Mesaje și notificări din zona Admin | Notificări operaționale din zona Admin | Selectarea audienței și transmiterea conținutului |
| Raportare | — | Rapoarte disponibile pentru activitatea sa. | Raportare completă pentru toate structurile existente în sistem. |
| Audit | Vizualizarea timeline-ului și a evenimentelor din fluxurile specifice. | Vizualizarea timeline-ului și a evenimentelor din fluxurile specifice. | Auditul autentificărilor, acțiunilor, modificărilor și apelurilor API. |

## Cum colaborează rolurile

### Evidență și documente

Medicul își consultă profilul, datele profesionale și documentele. Operatorul gestionează dosarele membrilor din colegiul teritorial, iar Administratorul configurează tipurile și șabloanele de documente folosite în sistem.

Vezi fluxurile ilustrate [Profilul Medicului și documentele](/flows/medic-profile), [Validarea documentelor de profil](/flows/profile-document-validation) și [Evidența membrilor pentru Operator](/flows/operator-members).

### Cereri

Medicul depune și urmărește cererile, Operatorul le analizează, iar Administratorul configurează tipurile disponibile. Vezi [depunerea și procesarea unei cereri](/flows/request-lifecycle). Cerințele diferă în funcție de tipul cererii.

### Plăți, cotizații și credite EMC

Medicul își consultă plățile și creditele EMC. Operatorul gestionează cotizațiile, operațiunile de ghișeu și cererile pentru credite, iar Administratorul configurează informațiile necesare acestor procese. Vezi [cotizațiile și plățile](/flows/contributions-payments) și [cererile pentru credite EMC](/flows/emc-credits).

### Comunicare

Administratorul transmite mesaje și notificări către Medici și notificări operaționale către Operatori. Vezi [Mesaje, notificări și ajutor](/flows/communication-support).

### Raportare și audit

Rapoartele Operatorului sunt încă în lucru. Administratorul poate consulta autentificările, acțiunile, modificările înregistrate și jurnalul API.

## Explorează prezentarea

- [Acces și securitate](/flows/access-security)
- [Profilul Medicului și documentele](/flows/medic-profile)
- [Evidența membrilor pentru Operator](/flows/operator-members)
- [Cerere Medic → procesare Operator](/flows/request-lifecycle)
- [Cotizația Medicului și evidența Operatorului](/flows/contributions-payments)
- [Credite EMC: transmitere și procesare](/flows/emc-credits)
- [Diplomele Medicului](/flows/medic-diplomas)
- [Document de profil: transmitere și validare](/flows/profile-document-validation)
- [Mesaje, notificări și ajutor](/flows/communication-support)
- [Setările contului Medic](/flows/medic-settings)
- [Ciclul de viață al membrului](/flows/member-lifecycle)
- [Back-office-ul Administratorului](/flows/admin-backoffice)
- [Administrator](/audiences/administrator)
- [Operator](/audiences/operator)
- [Medic](/audiences/medic)

## Conținut disponibil

| Perspectivă | Zone documentate | Stare |
| --- | --- | --- |
| Medic | acces, Dashboard, profil, setări, documente, plăți, EMC, diplome, cereri, mesaje și FAQ | Disponibil; profilul demonstrativ nu are diplome |
| Operator | membri, documente, cereri, EMC, cotizații, ghișeu, notificări și ciclul de viață | Disponibil |
| Administrator | configurări, conținut, mesagerie, notificări, evenimente și audit | Disponibil |
| Operator — Rapoarte | asigurări, cotizații, credite EMC, casă și SAGA | WIP |
| Operator — Activare | acțiune distinctă | Necesită clarificare înainte de documentare |
