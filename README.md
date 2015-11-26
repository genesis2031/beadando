#Feladatkezelő rendszer

##Követelmények:

1. Követelmények összegyűjtése

    + a rendszer személyes felhasználóknak készült, hogy nyilvántarthassák elvégzendő feladataikat
    + megtekinthető a felvitt feladatok listája
    + a felhasználó módosíthatja az elemeket: újakat vehet fel, módosíthat ill. törölhet

2. Használatieset-modell
    - Szerepkörök:
        + vendég: kezdőoldal megtekintése, regisztráció
        + felhasználó: feldatlista megtekintése, új feladat felvétele, meglévő szerkesztése (név, leírás, prioritás, státusz), törlése
    
    - Használati eset diagram:
        ![Használati eset diagram](workspace/pictures/4.png)
    

##Tervezés

    
1. Oldaltérkép
    
    + Publikus:
        
      - főoldal
  		- regisztráció
      - bejelentkezés
        
    + Felhasználó
        
      - feladatok listjája
      - új feladat felvétele
      - meglévő feladat módosítása
      - meglévő feladat törlése

2. Oldalvázlatok
    
    ![Kezdőlap](workspace/pictures/5.png)
    ![Feladatlista](workspace/pictures/6.png)

4. Osztálymodell
    - Adatmodell
    
        ![Adatmodell](workspace/pictures/1.png)

    - Adatbázisterv
    
        ![Adatbázisterv](workspace/pictures/2.png)
        
    - Állapotdiagram
    
        ![Állapotdiagram](workspace/pictures/3.png)

##Tesztelés

	- Selenium IDE segítségével
	- Egy adott listaelem módosítása, majd törlése után a teszt az alábbi eredménnyel zárult:


	![Teszt](workspace/pictures/7.png)

