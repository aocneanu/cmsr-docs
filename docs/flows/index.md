# Fluxuri My CMSR

My CMSR conectează experiența de autoservire a Medicului, activitatea județeană a Operatorului și back-office-ul web al Administratorului. Această pagină prezintă legăturile dintre cele trei perspective la nivelul potrivit unei demonstrații.

::: info Nivel de detaliu
Descrierile de mai jos indică zone de responsabilitate și puncte de legătură. Nu stabilesc ordinea operațiunilor, reguli de aprobare sau excepții de business.
:::

## Acces comun

Autentificarea și resetarea parolei sunt prezentate o singură dată, ca experiență transversală pentru cele trei roluri. Vezi [Acces și securitate](/flows/access-security).

## Zone comune și responsabilități

| Zonă | Medic | Operator | Administrator |
| --- | --- | --- | --- |
| [Acces și securitate](/flows/access-security) | Resetarea parolei și revenirea la autentificare | Resetarea parolei și revenirea la autentificare | Resetarea parolei și revenirea la autentificare |
| [Ciclul de viață al membrului](/flows/member-lifecycle) | Consultarea stării proprii în experiența de autoservire | Înscriere, suspendare, radiere și activare de confirmat | Configurația comună a sistemului |
| [Validarea documentelor](/flows/profile-document-validation) | Încărcarea documentelor de profil și primirea rezultatului | Verificarea, aprobarea sau respingerea documentelor | Configurarea tipurilor, câmpurilor și stărilor documentelor |
| [Cereri](/flows/request-lifecycle) | Depunerea, completarea și urmărirea cererii | Gestionarea și soluționarea cererilor județene | Configuratorul tipurilor de cereri |
| [Plăți, cotizații și ghișeu](/flows/contributions-payments) | Plata online și consultarea istoricului | Înregistrarea cotizațiilor și operațiunilor de ghișeu | Administrarea configurației cotizațiilor |
| [Credite EMC](/flows/emc-credits) | Depunerea cererilor și consultarea creditelor | Verificarea cererilor și gestionarea creditelor EMC | Configurația comună a sistemului |
| [Comunicare](/flows/communication-support) | Mesaje și notificări din zona Admin | Notificări operaționale din zona Admin | Selectarea audienței și transmiterea conținutului |
| Raportare și audit | — | Rapoarte operaționale disponibile Operatorului | Auditul accesului, acțiunilor și interfețelor API |

## Legături la nivel înalt

### Evidență și documente

Medicul își accesează profilul, datele profesionale și documentele în experiența de autoservire. Operatorul gestionează la nivel județean evidența membrilor, ciclul de viață și documentele asociate. Administratorul configurează tipurile și șabloanele de documente utilizate în sistem.

Vezi fluxurile ilustrate [Profilul Medicului și documentele](/flows/medic-profile), [Validarea documentelor de profil](/flows/profile-document-validation) și [Evidența membrilor pentru Operator](/flows/operator-members).

### Cereri

Medicul accesează zona de cereri, Operatorul gestionează fluxurile județene, iar Administratorul configurează tipurile disponibile. Vezi traseul ilustrat [Cerere Medic → procesare Operator](/flows/request-lifecycle). Regulile fiecărui tip de cerere vor fi documentate numai după validarea lor.

### Plăți, cotizații și credite EMC

Medicul consultă plățile și creditele EMC. Operatorul gestionează cotizațiile, operațiunile de ghișeu și fluxurile pentru creditele EMC, iar Administratorul administrează zonele de sistem asociate. Vezi traseele ilustrate [Cotizația Medicului și evidența Operatorului](/flows/contributions-payments) și [Credite EMC: transmitere și procesare](/flows/emc-credits).

### Comunicare

Zona Admin transmite mesaje și notificări către aplicația Medic și notificări către Operatori. Fiecare perspectivă prezintă numai canalul relevant rolului său. Vezi [Mesaje, notificări și ajutor](/flows/communication-support).

### Raportare și audit

Operatorul utilizează rapoartele operaționale disponibile, iar Administratorul urmărește autentificările, acțiunile, jurnalul de audit și jurnalul API.

## Explorează prezentarea

- [Acces și securitate](/flows/access-security)
- [Profilul Medicului și documentele](/flows/medic-profile)
- [Evidența membrilor pentru Operator](/flows/operator-members)
- [Cerere Medic → procesare Operator](/flows/request-lifecycle)
- [Cotizația Medicului și evidența Operatorului](/flows/contributions-payments)
- [Credite EMC: transmitere și procesare](/flows/emc-credits)
- [Document de profil: transmitere și validare](/flows/profile-document-validation)
- [Mesaje, notificări și ajutor](/flows/communication-support)
- [Setările contului Medic](/flows/medic-settings)
- [Ciclul de viață al membrului](/flows/member-lifecycle)
- [Back-office-ul Administratorului](/flows/admin-backoffice)
- [Administrator](/audiences/administrator)
- [Operator](/audiences/operator)
- [Medic](/audiences/medic)

## Acoperire verificată

| Perspectivă | Zone documentate | Stare |
| --- | --- | --- |
| Medic | acces, dashboard, profil, setări, documente, plăți, EMC, cereri, mesaje și FAQ | Verificat local |
| Operator | membri, documente, cereri, EMC, cotizații, ghișeu, notificări și ciclul de viață | Verificat local |
| Administrator | FAQ, cotizații, șabloane de cereri și stări operaționale | Verificat local |
| Medic — Diplome | interfața există | WIP în aplicație |
| Operator — Rapoarte | rutele există | Ecrane placeholder |

Pentru trasee grupate pe roluri, deschide [Manualul de utilizare](/manual/).
