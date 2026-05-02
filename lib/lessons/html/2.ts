import { Step } from "@/lib/types"

export const lesson2: Step[] = [

  {
    type: "text",
    title: "🏗 Struktura strony HTML",
    content:
`Każda strona HTML ma swój szkielet.

To nie jest opcjonalne — to PODSTAWA.

Bez struktury:
❌ strona może działać źle  
❌ przeglądarka może zgadywać co masz na myśli  

👉 Myślisz o stronie jak o budynku:
najpierw konstrukcja → potem reszta`,
  },

  {
    type: "text",
    title: "🧠 Jak to zapamiętać?",
    content:
`HTML ma 3 kluczowe elementy:

<html> → cała strona  
<head> → ustawienia (niewidoczne)  
<body> → to co widzi użytkownik  

👉 wszystko co widzisz na stronie = body`,
  },

  {
    type: "code",
    title: "📄 Podstawowy szablon",
    content: `<!DOCTYPE html>
<html>
<head>
  <title>Moja strona</title>
</head>
<body>

</body>
</html>`,
  },

  {
    type: "text",
    title: "⚠️ DOCTYPE — co to?",
    content:
`<!DOCTYPE html>

👉 mówi przeglądarce: "to jest HTML5"

Jeśli tego nie ma:
❌ strona może działać dziwnie  
❌ layout może się psuć  

👉 ZAWSZE dawaj na górze`,
  },

  {
    type: "text",
    title: "🌍 <html>",
    content:
`<html> to kontener całej strony.

Wszystko MUSI być w środku.

👉 to jak pudełko na całą stronę`,
  },

  {
    type: "text",
    title: "⚙️ <head>",
    content:
`<head> zawiera rzeczy których NIE widzisz:

- tytuł strony (title)
- meta dane
- style (CSS)
- skrypty (JS)

👉 użytkownik tego nie widzi`,
  },

  {
    type: "text",
    title: "👀 <body>",
    content:
`<body> to NAJWAŻNIEJSZE miejsce.

Tu trafia wszystko co widzi użytkownik:

✔ nagłówki  
✔ tekst  
✔ obrazki  
✔ linki  

👉 jeśli coś nie jest w body → nie istnieje dla użytkownika`,
  },

  {
    type: "code",
    title: "💡 Przykład strony",
    content: `<!DOCTYPE html>
<html>
<head>
  <title>Moja pierwsza strona</title>
</head>
<body>
  <h1>Cześć!</h1>
  <p>To jest moja strona</p>
</body>
</html>`,
  },

  {
    type: "text",
    title: "❌ Najczęstsze błędy",
    content:
`Na egzaminie to zabija punkty:

❌ brak DOCTYPE  
❌ elementy poza <body>  
❌ brak <html>  
❌ brak zamknięcia tagów  

👉 egzaminator widzi to od razu`,
  },

  {
    type: "code-task",
    title: "💻 Twoje zadanie",
    content:
`Stwórz pełną stronę HTML:

✔ <!DOCTYPE html>  
✔ <html>  
✔ <head> + <title>  
✔ <body>  
✔ <h1>  
✔ <p>  

👉 to jest dokładnie zadanie egzaminacyjne`,
  },

  {
    type: "quiz",
    question: "Który element zawiera to co widzi użytkownik?",
    answers: [
      "<head>",
      "<html>",
      "<body>",
      "<title>",
    ],
    correct: 2,
    explanation:
`<body> zawiera wszystko co widzi użytkownik.

To najważniejszy element strony.`,
  },
]

export const lesson2Summary = {
  title: "📚 Podsumowanie: Struktura HTML",
  content: `
Każda strona HTML ma szkielet.

Najważniejsze elementy:

✔ <!DOCTYPE html> — informuje o HTML5  
✔ <html> — cały dokument  
✔ <head> — ustawienia (niewidoczne)  
✔ <body> — zawartość strony  

Zapamiętaj:

👉 wszystko co widzisz = body  
👉 brak struktury = błędy  

To jest jedna z NAJWAŻNIEJSZYCH rzeczy na egzaminie INF03.
`,
}