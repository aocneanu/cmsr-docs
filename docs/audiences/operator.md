# Operator

Operatorul lucrează la nivel județean în aplicația web My CMSR. Perspectiva sa este centrată pe evidența membrilor și pe gestionarea fluxurilor operaționale asociate.

## Zone funcționale

- **[Evidența membrilor](/flows/operator-members)** — gestionarea înregistrărilor membrilor și a documentelor asociate din aria județeană.
  - **[Gestionarea documentelor](/flows/profile-document-validation)** — verificarea câmpurilor și a dovezilor PDF transmise de Medic.
- **[Ciclul de viață al membrilor](/flows/member-lifecycle)** — gestionarea etapelor operaționale asociate evidenței membrilor.
  - **Înscrieri** — gestionarea fluxurilor de înscriere.
  - **Suspendări** — inițierea suspendării și consultarea registrului dedicat.
  - **Radieri** — inițierea radierii și consultarea registrului dedicat.
  - **Reluare / reînregistrare** — acțiuni afișate condiționat, în funcție de starea profilului.
- **[Cotizații](/flows/contributions-payments)** — gestionarea cotizațiilor, a plăților și a operațiunilor de ghișeu.
  - **Plăți și operațiuni de ghișeu** — înregistrarea și urmărirea activităților financiare disponibile Operatorului.
- **[Credite EMC](/flows/emc-credits)** — verificarea dovezilor, asocierea sursei și procesarea cererilor EMC.
- **[Cereri](/flows/request-lifecycle)** — preluarea și gestionarea cererilor transmise la nivel județean.
  - **[Documente de profil](/flows/profile-document-validation)** — coada și ecranul de validare pentru documentele membrilor.
  - **Cereri** — gestionarea fluxurilor de cereri.
- **[Notificări](/flows/communication-support)** — informări operaționale și urmărirea stării de citire.
- **Raportare (WIP)** — rutele pentru asigurări, cotizații, credite EMC, raportul de casă și SAGA folosesc momentan ecrane placeholder și nu sunt prezentate drept fluxuri finalizate.

## Rol în sistem

Operatorul asigură perspectiva județeană asupra înregistrărilor și fluxurilor membrilor. Vezi traseul ilustrat [Evidența membrilor pentru Operator](/flows/operator-members). [Fluxuri My CMSR](/flows/) arată conexiunile cu experiența Medicului și cu back-office-ul Administratorului, fără a defini reguli de aprobare sau excepții de proces.
