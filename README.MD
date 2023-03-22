# JS Notes

## Metody tablicowe
- .map - transformuje każdy element tablicy według funkcji 
- .filter - usuwa elementy z tablicy
- .reduce - agreguje tablice do 1 wartości
- .push - dodaje element na koniec tablicy
- .unshift - dodaje element na początek tablicy
- .shift - usuwa pierwszy element tablicy
- .pop - usuwa ostatni element tablicy
- .every - sprawdza czy warunek spełnia każdy element tablicy
- .some - sprawdza czy którykolwiek element spełnia warunek
- .includes - sprawdza czy element istnieje w tablicy
- .indexOf - zwraca indeks elementu, bądź -1
- .at() - zwraca element po indeksie, obsługuje ujemne indeksy
- .concat - łączy tablice
- .flat - spłaszcza tablice 
- forEach - iteruje po tablicy
- .slice - wycina kawałek z tablicy
- .splice - usuwa z tablicy elementy


## Lotto zasady
1. Użytkownik musi podać 6 liczb
   - liczby muszą być z zakresu 1-49
   - liczby nie mogą się powtarzać
   - liczby muszą być liczbami - 2 dwa
2. Użytkownk naciska graj/losuj
3. Losujemy 6 liczb z 1-49 bez powtórzeń
4. Sprawdzamy ile trafił
5. Pokazujemy ile wygrał