import { Step } from "@/lib/types"

export const lesson8: Step[] = [
  {
    type: "text",
    title: "📊 Tabele w HTML",
    content:
`Tabele służą do prezentowania danych w formie wierszy i kolumn.

Dzięki nim można w czytelny sposób wyświetlać:
✔ wyniki  
✔ harmonogramy  
✔ ceny  
✔ rankingi  
✔ dane użytkowników  
✔ statystyki  

Tabela działa podobnie do arkusza kalkulacyjnego.

Każda tabela składa się z:
👉 wierszy  
👉 kolumn  
👉 komórek z danymi`,
  },

  {
    type: "text",
    title: "🏷 Znacznik <table>",
    content:
`Podstawowym elementem tabeli jest:
<table>

To kontener przechowujący całą tabelę.

Wewnątrz znajdują się:
✔ wiersze  
✔ nagłówki  
✔ komórki danych`,
  },

  {
    type: "code",
    title: "👀 Najprostsza tabela",
    content: `<table>

</table>`,
  },

  {
    type: "text",
    title: "📄 Wiersze tabeli",
    content:
`Do tworzenia wierszy używa się:
<tr>

Nazwa pochodzi od:
table row

Każdy <tr> reprezentuje jeden poziomy wiersz tabeli.`,
  },

  {
    type: "code",
    title: "📌 Przykład wiersza",
    content: `<table>
  <tr>
  </tr>
</table>`,
  },

  {
    type: "text",
    title: "🧩 Komórki danych",
    content:
`Dane w tabeli umieszcza się w:
<td>

Nazwa pochodzi od:
table data

Każde <td> reprezentuje jedną komórkę tabeli.`,
  },

  {
    type: "code",
    title: "📋 Pierwsze dane w tabeli",
    content: `<table>
  <tr>
    <td>HTML</td>
    <td>CSS</td>
  </tr>
</table>`,
  },

  {
    type: "text",
    title: "🔠 Nagłówki tabeli",
    content:
`Nagłówki kolumn tworzy się za pomocą:
<th>

Nazwa pochodzi od:
table header

Nagłówki:
✔ opisują dane  
✔ pomagają zrozumieć tabelę  
✔ są domyślnie pogrubione`,
  },

  {
    type: "code",
    title: "🧠 Tabela z nagłówkami",
    content: `<table>
  <tr>
    <th>Technologia</th>
    <th>Poziom</th>
  </tr>

  <tr>
    <td>HTML</td>
    <td>Podstawowy</td>
  </tr>
</table>`,
  },

  {
    type: "text",
    title: "📐 Budowa tabeli",
    content:
`Tabela składa się z kilku warstw:

✔ <table>
→ cała tabela

✔ <tr>
→ wiersz

✔ <th>
→ nagłówek

✔ <td>
→ dane

Każdy element ma określoną rolę.`,
  },

  {
    type: "text",
    title: "📚 Większa tabela",
    content:
`Tabele mogą zawierać wiele:
✔ wierszy  
✔ kolumn  
✔ danych  

Przeglądarka automatycznie układa dane w odpowiednich komórkach.`,
  },

  {
    type: "code",
    title: "🧱 Rozbudowana tabela",
    content: `<table>

  <tr>
    <th>Imię</th>
    <th>Wiek</th>
    <th>Miasto</th>
  </tr>

  <tr>
    <td>Anna</td>
    <td>21</td>
    <td>Warszawa</td>
  </tr>

  <tr>
    <td>Jan</td>
    <td>25</td>
    <td>Kraków</td>
  </tr>

</table>`,
  },

  {
    type: "text",
    title: "🎨 Obramowanie tabel",
    content:
`Domyślnie tabela może nie posiadać widocznych granic.

Do szybkiego dodania obramowania można użyć:
border

📌 W nowoczesnych projektach wygląd tabel zwykle tworzy się za pomocą CSS.`,
  },

  {
    type: "code",
    title: "🖥 Tabela z obramowaniem",
    content: `<table border="1">

  <tr>
    <th>Produkt</th>
    <th>Cena</th>
  </tr>

  <tr>
    <td>Laptop</td>
    <td>3500 zł</td>
  </tr>

</table>`,
  },

  {
    type: "text",
    title: "⚠️ Kiedy używać tabel?",
    content:
`Tabele powinny być używane wyłącznie do danych tabelarycznych.

Dobre zastosowania:
✔ harmonogramy  
✔ rankingi  
✔ dane statystyczne  
✔ listy produktów  
✔ wyniki sportowe  

❌ Tabele nie powinny służyć do budowania całego układu strony.`,
  },

  {
    type: "text",
    title: "⚠️ Najczęstsze błędy",
    content:
`Początkujący często:
❌ zapominają o <tr>  
❌ umieszczają <td> poza wierszem  
❌ tworzą nierówne kolumny  
❌ mieszają dane i nagłówki  
❌ używają tabel do budowy layoutu strony  

Dobra tabela powinna być:
✔ czytelna  
✔ logiczna  
✔ uporządkowana`,
  },

  {
    type: "code",
    title: "💡 Kompletny przykład tabeli",
    content: `<h1>Plan nauki</h1>

<table border="1">

  <tr>
    <th>Dzień</th>
    <th>Temat</th>
  </tr>

  <tr>
    <td>Poniedziałek</td>
    <td>HTML</td>
  </tr>

  <tr>
    <td>Wtorek</td>
    <td>CSS</td>
  </tr>

</table>`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Stwórz tabelę zawierającą:

👉 <table>  
👉 minimum 3 wiersze <tr>  
👉 minimum 2 nagłówki <th>  
👉 minimum 4 komórki danych <td>  

Temat:
„Plan nauki technologii webowych”`,
  },

  {
    type: "quiz",
    question: "Który znacznik tworzy tabelę?",
    answers: [
      "<tab>",
      "<table>",
      "<td>",
      "<tr>",
    ],
    correct: 1,
    explanation:
`<table> tworzy całą tabelę HTML.`,
  },

  {
    type: "quiz",
    question: "Który znacznik tworzy wiersz tabeli?",
    answers: [
      "<row>",
      "<td>",
      "<tr>",
      "<th>",
    ],
    correct: 2,
    explanation:
`<tr> reprezentuje pojedynczy wiersz tabeli.`,
  },

  {
    type: "quiz",
    question: "Który element tworzy nagłówek kolumny?",
    answers: [
      "<td>",
      "<head>",
      "<th>",
      "<header>",
    ],
    correct: 2,
    explanation:
`<th> tworzy komórkę nagłówkową tabeli.`,
  },

  {
    type: "quiz",
    question: "Do czego służy <td>?",
    answers: [
      "Do tworzenia obrazu",
      "Do tworzenia danych w tabeli",
      "Do tworzenia linków",
      "Do tworzenia listy",
    ],
    correct: 1,
    explanation:
`<td> reprezentuje zwykłą komórkę danych.`,
  },

  {
    type: "quiz",
    question: "Do czego najlepiej nadają się tabele?",
    answers: [
      "Do budowania całego layoutu strony",
      "Do wyświetlania danych w kolumnach i wierszach",
      "Do tworzenia obrazów",
      "Do stylowania strony",
    ],
    correct: 1,
    explanation:
`Tabele służą do prezentowania danych tabelarycznych.`,
  },
]

export const lesson8Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
HTML umożliwia tworzenie tabel służących do prezentowania danych.

Najważniejsze znaczniki:
✔ <table> → tabela  
✔ <tr> → wiersz  
✔ <th> → nagłówek kolumny  
✔ <td> → komórka danych  

Zapamiętaj:
👉 tabele służą do danych tabelarycznych  
👉 każdy wiersz tworzy <tr>  
👉 nagłówki tworzy się za pomocą <th>  
👉 dane znajdują się w <td>  

Tabele są bardzo często używane w:
✔ panelach administracyjnych  
✔ sklepach internetowych  
✔ rankingach  
✔ harmonogramach  
✔ dashboardach  

To jeden z podstawowych elementów HTML.
`,
}