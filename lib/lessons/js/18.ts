import { Step } from "@/lib/types"

export const lesson18: Step[] = [
  {
    type: "text",
    title: "🛠 Obsługa błędów w JavaScript",
    content:
`Podczas działania programu mogą pojawić się błędy.

Błędy mogą powodować:
👉 zatrzymanie aplikacji  
👉 brak działania funkcji  
👉 problemy z danymi  

JavaScript posiada mechanizm:
✔ try  
✔ catch  

📌 Obsługa błędów pozwala zabezpieczyć aplikację.`,
  },

  {
    type: "text",
    title: "🔍 Blok try",
    content:
`W bloku try umieszczamy kod,
który może spowodować błąd.

📌 JavaScript spróbuje wykonać kod z try.`,
  },

  {
    type: "code",
    title: "👀 Przykład try",
    content: `try {
  console.log("Start")
}`,
  },

  {
    type: "text",
    title: "❌ Blok catch",
    content:
`Jeśli w try wystąpi błąd,
JavaScript przejdzie do:
👉 catch  

📌 Dzięki temu aplikacja nie zatrzyma się całkowicie.`,
  },

  {
    type: "code",
    title: "🚨 Przykład catch",
    content: `try {

  console.log(user)

} catch(error) {

  console.log("Wystąpił błąd")

}`,
  },

  {
    type: "text",
    title: "📦 Obiekt error",
    content:
`catch może przechwytywać informacje o błędzie.

Najczęściej używamy:
👉 error  

📌 error zawiera szczegóły problemu.`,
  },

  {
    type: "code",
    title: "📊 Informacje o błędzie",
    content: `try {

  console.log(user)

} catch(error) {

  console.log(error)

}`,
  },

  {
    type: "text",
    title: "🚀 finally",
    content:
`finally wykonuje się zawsze:
👉 niezależnie od błędu  

Można używać go do:
✔ zamykania połączeń  
✔ kończenia operacji  
✔ czyszczenia danych`,
  },

  {
    type: "code",
    title: "🔄 finally",
    content: `try {

  console.log("Start")

} catch(error) {

  console.log("Błąd")

} finally {

  console.log("Koniec programu")

}`,
  },

  {
    type: "text",
    title: "⛔ throw",
    content:
`throw pozwala tworzyć własne błędy.

📌 Dzięki temu możemy kontrolować działanie aplikacji.`,
  },

  {
    type: "code",
    title: "⚡ throw",
    content: `let wiek = 15

try {

  if (wiek < 18) {
    throw new Error("Brak dostępu")
  }

} catch(error) {

  console.log(error.message)

}`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z błędami uczniowie często popełniają błędy:

❌ brak catch  
❌ błędna nazwa error  
❌ używanie zmiennej która nie istnieje  
❌ brak throw przy własnych błędach  

📌 Obsługa błędów poprawia stabilność aplikacji.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz blok try catch.

Następnie:
✔ spróbuj wyświetlić nieistniejącą zmienną  
✔ w catch wyświetl:
"Wystąpił błąd w programie"`,
  },

  {
    type: "quiz",
    question: "Do czego służy catch?",
    answers: [
      "Do tworzenia tablic",
      "Do obsługi błędów",
      "Do tworzenia HTML",
      "Do zmiany CSS",
    ],
    correct: 1,
    explanation:
`catch przechwytuje błędy występujące w try.`,
  },

  {
    type: "quiz",
    question: "Który blok wykona się zawsze?",
    answers: [
      "if",
      "throw",
      "finally",
      "switch",
    ],
    correct: 2,
    explanation:
`finally wykonuje się niezależnie od tego,
czy wystąpił błąd.`,
  },
]

export const lesson18Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Obsługa błędów pozwala zabezpieczyć aplikację przed awariami.

Zapamiętaj najważniejsze informacje:

✔ try zawiera kod który może powodować błąd  
✔ catch obsługuje błędy  
✔ finally wykonuje się zawsze  
✔ throw tworzy własny błąd  
✔ error zawiera informacje o problemie  

Najważniejsze elementy:
🔹 try  
🔹 catch  
🔹 finally  
🔹 throw  
🔹 error  

👉 Obsługa błędów jest bardzo ważna w profesjonalnych aplikacjach JavaScript.
`,
}