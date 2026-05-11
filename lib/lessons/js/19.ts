import { Step } from "@/lib/types"

export const lesson19: Step[] = [
  {
    type: "text",
    title: "⚡ Optymalizacja kodu JavaScript",
    content:
`Optymalizacja polega na pisaniu szybszego i lepszego kodu.

Dzięki temu aplikacja:
👉 działa płynniej  
👉 szybciej się ładuje  
👉 zużywa mniej pamięci  
👉 jest łatwiejsza do rozwijania  

📌 Dobre praktyki są bardzo ważne w profesjonalnym programowaniu.`,
  },

  {
    type: "text",
    title: "🧹 Czytelny kod",
    content:
`Kod powinien być czytelny i uporządkowany.

Najważniejsze zasady:
✔ używanie czytelnych nazw  
✔ poprawne wcięcia  
✔ dzielenie kodu na funkcje  
✔ unikanie powtarzania kodu  

📌 Czytelny kod łatwiej naprawiać i rozwijać.`,
  },

  {
    type: "code",
    title: "👀 Dobry przykład kodu",
    content: `function policzPoleKwadratu(bok) {
  return bok * bok
}

console.log(policzPoleKwadratu(5))`,
  },

  {
    type: "text",
    title: "🚫 Unikanie powtarzania kodu",
    content:
`Powtarzanie kodu utrudnia rozwój aplikacji.

Zamiast kopiować kod:
👉 używaj funkcji  
👉 używaj pętli  
👉 twórz moduły  

📌 Takie podejście nazywamy:
✔ DRY (Don't Repeat Yourself)`,
  },

  {
    type: "code",
    title: "🔁 Funkcja zamiast powtarzania",
    content: `function przywitaj(imie) {
  console.log("Cześć " + imie)
}

przywitaj("Kacper")
przywitaj("Ania")`,
  },

  {
    type: "text",
    title: "⚡ Wydajność aplikacji",
    content:
`Niektóre operacje mogą spowalniać aplikację.

Najczęstsze problemy:
👉 zbyt wiele pętli  
👉 niepotrzebne zapytania do DOM  
👉 duże ilości danych  
👉 nieoptymalne funkcje  

📌 Dobrze napisany kod działa szybciej.`,
  },

  {
    type: "code",
    title: "📦 Przechowywanie elementu DOM",
    content: `let button = document.querySelector("button")

button.addEventListener("click", () => {
  console.log("Klik")
})`,
  },

  {
    type: "text",
    title: "🧠 Komentarze w kodzie",
    content:
`Komentarze pomagają opisywać działanie kodu.

Komentarz tworzymy za pomocą:
👉 //  

📌 Komentarze powinny wyjaśniać trudniejsze fragmenty kodu.`,
  },

  {
    type: "code",
    title: "📝 Komentarz",
    content: `// Funkcja oblicza sumę
function dodaj(a, b) {
  return a + b
}`,
  },

  {
    type: "text",
    title: "📂 Organizacja projektu",
    content:
`Większe projekty powinny być uporządkowane.

Najczęściej tworzymy foldery:
👉 components  
👉 utils  
👉 pages  
👉 api  

📌 Dobra organizacja projektu ułatwia pracę zespołową.`,
  },

  {
    type: "code",
    title: "🗂 Struktura projektu",
    content: `src/
 ├── components/
 ├── utils/
 ├── pages/
 └── app.js`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pisania kodu uczniowie często popełniają błędy:

❌ chaotyczne nazwy zmiennych  
❌ bardzo długie funkcje  
❌ powielanie kodu  
❌ brak organizacji plików  

📌 Dobry kod powinien być prosty i czytelny.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz funkcję:
👉 obliczPoleProstokata(a, b)

Następnie:
✔ dodaj komentarz opisujący funkcję  
✔ wyświetl wynik działania`,
  },

  {
    type: "quiz",
    question: "Co oznacza zasada DRY?",
    answers: [
      "Pisanie bardzo długiego kodu",
      "Unikanie powtarzania kodu",
      "Tworzenie wielu plików",
      "Usuwanie funkcji",
    ],
    correct: 1,
    explanation:
`DRY oznacza Don't Repeat Yourself — unikaj powtarzania kodu.`,
  },

  {
    type: "quiz",
    question: "Dlaczego czytelny kod jest ważny?",
    answers: [
      "Bo zajmuje więcej miejsca",
      "Bo działa bez internetu",
      "Bo łatwiej go rozwijać i naprawiać",
      "Bo zmienia wygląd strony",
    ],
    correct: 2,
    explanation:
`Czytelny kod jest łatwiejszy do rozwoju i naprawiania.`,
  },
]

export const lesson19Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Dobre praktyki pomagają tworzyć lepszy i szybszy kod.

Zapamiętaj najważniejsze informacje:

✔ Kod powinien być czytelny  
✔ Unikaj powtarzania kodu  
✔ Używaj funkcji i modułów  
✔ Komentarze pomagają zrozumieć kod  
✔ Dobra organizacja projektu jest bardzo ważna  

Najważniejsze pojęcia:
🔹 DRY  
🔹 funkcje  
🔹 komentarze  
🔹 optymalizacja  
🔹 struktura projektu  

👉 Dobre praktyki są podstawą profesjonalnego programowania.
`,
}