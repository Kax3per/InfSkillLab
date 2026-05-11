import { Step } from "@/lib/types"

export const lesson3: Step[] = [
  {
    type: "text",
    title: "➕ Operatory w JavaScript",
    content:
`Operatory służą do wykonywania działań na danych.

W JavaScript istnieją:
👉 operatory matematyczne  
👉 operatory porównania  
👉 operatory logiczne  

Dzięki operatorom możemy:
✔ liczyć  
✔ porównywać wartości  
✔ sprawdzać warunki  

📌 Operatory są używane praktycznie w każdym programie.`,
  },

  {
    type: "text",
    title: "🧮 Operatory matematyczne",
    content:
`Najważniejsze operatory matematyczne:

👉 +  — dodawanie  
👉 -  — odejmowanie  
👉 *  — mnożenie  
👉 /  — dzielenie  
👉 %  — reszta z dzielenia  

Przykłady:
🔹 5 + 2  
🔹 10 - 3  
🔹 4 * 2`,
  },

  {
    type: "code",
    title: "👀 Przykład działań matematycznych",
    content: `let wynik = 10 + 5

console.log(wynik)`,
  },

  {
    type: "text",
    title: "🔍 Operatory porównania",
    content:
`Operatory porównania sprawdzają wartości.

Najważniejsze:
👉 ==  — równe  
👉 === — identyczne  
👉 !=  — różne  
👉 >   — większe  
👉 <   — mniejsze  

Wynik porównania to:
✔ true  
lub  
✔ false`,
  },

  {
    type: "code",
    title: "📊 Przykład porównania",
    content: `console.log(10 > 5)

console.log(8 === 8)

console.log(4 != 2)`,
  },

  {
    type: "text",
    title: "🧠 Operatory logiczne",
    content:
`Operatory logiczne służą do łączenia warunków.

Najważniejsze:
👉 && — AND (i)  
👉 || — OR (lub)  
👉 ! — NOT (zaprzeczenie)  

Przykłady:
🔹 true && true  
🔹 false || true  

📌 Operatory logiczne często używane są w instrukcjach if.`,
  },

  {
    type: "code",
    title: "🔗 Przykład operatorów logicznych",
    content: `console.log(true && true)

console.log(false || true)

console.log(!false)`,
  },

  {
    type: "text",
    title: "📦 Skrócone operatory",
    content:
`JavaScript posiada skrócone zapisy działań.

Najczęściej używane:
👉 +=  
👉 -=  
👉 ++  
👉 --  

Przykład:
🔹 liczba++ zwiększa wartość o 1`,
  },

  {
    type: "code",
    title: "⚡ Skrócony zapis",
    content: `let punkty = 5

punkty++

console.log(punkty)`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania operatorów uczniowie często popełniają błędy:

❌ mylenie = z ==  
❌ używanie == zamiast ===  
❌ dzielenie przez 0  
❌ porównywanie tekstu z liczbą  

📌 = przypisuje wartość, a == oraz === porównują wartości.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz 2 zmienne:
👉 a = 10  
👉 b = 5  

Następnie:
✔ dodaj liczby  
✔ odejmij liczby  
✔ sprawdź czy a jest większe od b  

Wyświetl wyniki za pomocą console.log()`,
  },

  {
    type: "quiz",
    question: "Który operator oznacza mnożenie?",
    answers: [
      "+",
      "-",
      "*",
      "/",
    ],
    correct: 2,
    explanation:
`Operator * służy do mnożenia liczb.`,
  },

  {
    type: "quiz",
    question: "Co zwraca operator porównania?",
    answers: [
      "Tekst",
      "Liczbę",
      "Tablicę",
      "true lub false",
    ],
    correct: 3,
    explanation:
`Operatory porównania zwracają wartość logiczną:
✔ true  
lub  
✔ false`,
  },
]

export const lesson3Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Operatory pozwalają wykonywać działania i porównania w JavaScript.

Zapamiętaj najważniejsze informacje:

✔ + dodaje liczby  
✔ * mnoży liczby  
✔ == i === porównują wartości  
✔ && oznacza AND  
✔ || oznacza OR  

Najważniejsze operatory:
🔹 + — dodawanie  
🔹 - — odejmowanie  
🔹 * — mnożenie  
🔹 / — dzielenie  
🔹 === — porównanie  
🔹 && — operator logiczny AND  

👉 Operatory są podstawą działania warunków i logiki programu.
`,
}