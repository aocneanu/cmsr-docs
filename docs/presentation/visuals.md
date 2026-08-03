# Materiale vizuale

Capturile de ecran și diagramele completează demonstrația atunci când un flux este mai ușor de înțeles vizual.

## Convenții

- folosește imagini care provin din versiunea aplicației prezentate;
- elimină sau maschează datele personale și sensibile;
- păstrează aceeași rezoluție și același raport de aspect pentru capturi similare;
- numește fișierele în engleză, după fluxul și pasul ilustrat;
- adaugă text alternativ care explică scopul imaginii;
- folosește diagrame simple pentru relațiile și pașii care nu se văd clar într-o captură.

## Standardul paginilor de flux

O pagină care explică un flux My CMSR urmează aceeași ordine:

1. **diagrama fluxului**, realizată cu componenta globală `FlowDiagram`;
2. **`Capturi din flux`**, secțiune opțională plasată după diagramă atunci când există imagini relevante;
3. **notele de limită**, pentru etapele aflate în lucru sau detaliile care nu pot fi deduse din interfață.

Pentru fiecare captură:

- folosește un element `<figure class="cmsr-doc-screenshot">`, stilizat responsive de tema My CMSR;
- include imaginea într-o legătură către activul original, pentru vizualizare la dimensiune completă;
- adaugă un text alternativ și o legendă concise, în limba română;
- folosește încărcarea întârziată prin `loading="lazy"`;
- păstrează ordinea capturilor identică ordinii pașilor din diagramă.

Secțiunea `Capturi din flux` se omite atunci când nu există imagini potrivite. Un ecran sau o etapă lipsă nu se înlocuiește cu un exemplu inventat.

## Listă de materiale

Lista se stabilește în funcție de scenariile alese pentru prezentare.
