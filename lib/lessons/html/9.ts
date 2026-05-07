import { Step } from "@/lib/types"

export const lesson9: Step[] = [
  {
    type: "text",
    title: "📝 Formularze w HTML",
    content:
`Formularze pozwalają użytkownikowi wprowadzać dane na stronie internetowej.

Są jednym z najważniejszych elementów nowoczesnych aplikacji webowych.

Formularze są używane m.in. do:
✔ logowania  
✔ rejestracji  
✔ wyszukiwania  
✔ kontaktu  
✔ składania zamówień  
✔ wysyłania wiadomości  

Bez formularzy strony byłyby wyłącznie statyczne i nie mogłyby odbierać danych od użytkownika.`,
  },

  {
    type: "text",
    title: "🏷 Znacznik <form>",
    content:
`Każdy formularz rozpoczyna się od:
<form>

Znacznik ten działa jak kontener przechowujący pola formularza.

Wewnątrz formularza mogą znajdować się:
✔ pola tekstowe  
✔ przyciski  
✔ checkboxy  
✔ listy wyboru  
✔ pola e-mail  
✔ hasła`,
  },

  {
    type: "code",
    title: "👀 Najprostszy formularz",
    content: `<form>

</form>`,
  },

  {
    type: "text",
    title: "⌨️ Pole tekstowe",
    content:
`Najpopularniejszym elementem formularzy jest:
<input>

Pole tekstowe tworzy się za pomocą:
type="text"

Użytkownik może wpisywać dane z klawiatury.`,
  },

  {
    type: "code",
    title: "📄 Pierwsze pole input",
    content: `<input type="text">`,
  },

  {
    type: "text",
    title: "🏷 Znacznik <label>",
    content:
`<label> opisuje pole formularza.

Dzięki niemu użytkownik wie:
👉 co powinien wpisać  

Dobrą praktyką jest dodawanie label do każdego pola formularza.`,
  },

  {
    type: "code",
    title: "🧩 Label i input",
    content: `<label>Imię:</label>

<input type="text">`,
  },

  {
    type: "text",
    title: "📧 Pole e-mail",
    content:
`HTML posiada specjalny typ pola dla adresów e-mail:
type="email"

Przeglądarka może automatycznie sprawdzać:
✔ czy wpisano poprawny adres  
✔ czy pole zawiera znak @`,
  },

  {
    type: "code",
    title: "✉️ Pole email",
    content: `<label>Email:</label>

<input type="email">`,
  },

  {
    type: "text",
    title: "🔒 Pole hasła",
    content:
`Do wpisywania haseł używa się:
type="password"

Wpisane znaki:
✔ są ukrywane  
✔ nie są widoczne dla innych użytkowników`,
  },

  {
    type: "code",
    title: "🔐 Pole hasła",
    content: `<label>Hasło:</label>

<input type="password">`,
  },

  {
    type: "text",
    title: "🔘 Przycisk formularza",
    content:
`Do wysyłania formularza używa się:
<button>

lub:
<input type="submit">

Po kliknięciu dane formularza mogą zostać przesłane do serwera.`,
  },

  {
    type: "code",
    title: "🚀 Przycisk wysyłania",
    content: `<button>
  Wyślij
</button>`,
  },

  {
    type: "text",
    title: "📦 Atrybut placeholder",
    content:
`placeholder wyświetla podpowiedź wewnątrz pola formularza.

Pomaga użytkownikowi zrozumieć:
👉 jakie dane należy wpisać`,
  },

  {
    type: "code",
    title: "💡 Placeholder",
    content: `<input 
  type="text"
  placeholder="Wpisz swoje imię"
>`,
  },

  {
    type: "text",
    title: "☑️ Checkbox",
    content:
`Checkbox pozwala zaznaczać opcje.

Najczęściej używa się go do:
✔ akceptacji regulaminu  
✔ wyboru zainteresowań  
✔ ustawień użytkownika`,
  },

  {
    type: "code",
    title: "✅ Checkbox",
    content: `<label>
  <input type="checkbox">
  Akceptuję regulamin
</label>`,
  },

  {
    type: "text",
    title: "🔘 Radio button",
    content:
`Radio button pozwala wybrać jedną opcję z kilku dostępnych.

Przykłady:
✔ wybór płci  
✔ wybór planu  
✔ wybór odpowiedzi`,
  },

  {
    type: "code",
    title: "📻 Radio button",
    content: `<input type="radio" name="poziom">
<label>Podstawowy</label>

<input type="radio" name="poziom">
<label>Zaawansowany</label>`,
  },

  {
    type: "text",
    title: "🗒 Pole wieloliniowe",
    content:
`Do wpisywania większej ilości tekstu używa się:
<textarea>

Świetnie nadaje się do:
✔ wiadomości  
✔ komentarzy  
✔ opisów`,
  },

  {
    type: "code",
    title: "📄 Textarea",
    content: `<textarea>

</textarea>`,
  },

  {
    type: "text",
    title: "📋 Lista wyboru",
    content:
`HTML pozwala tworzyć rozwijane listy.

Służą do tego:
✔ <select>
✔ <option>

Użytkownik może wybrać jedną opcję z listy.`,
  },

  {
    type: "code",
    title: "📂 Select i option",
    content: `<select>

  <option>HTML</option>
  <option>CSS</option>
  <option>JavaScript</option>

</select>`,
  },

  {
    type: "text",
    title: "⚠️ Najczęstsze błędy",
    content:
`Początkujący często:
❌ zapominają o <label>  
❌ używają złego typu input  
❌ tworzą nieczytelne formularze  
❌ nie dodają placeholderów  
❌ nie grupują pól logicznie  

Dobry formularz powinien być:
✔ prosty  
✔ czytelny  
✔ wygodny dla użytkownika`,
  },

  {
    type: "code",
    title: "🧱 Kompletny formularz",
    content: `<form>

  <label>Imię:</label>
  <input 
    type="text"
    placeholder="Wpisz imię"
  >

  <br><br>

  <label>Email:</label>
  <input type="email">

  <br><br>

  <label>Hasło:</label>
  <input type="password">

  <br><br>

  <button>
    Zarejestruj
  </button>

</form>`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Stwórz formularz zawierający:

👉 <form>  
👉 pole tekstowe  
👉 pole email  
👉 pole hasła  
👉 checkbox  
👉 przycisk wysyłania  

Temat:
„Formularz rejestracji”`,
  },

  {
    type: "quiz",
    question: "Który znacznik tworzy formularz?",
    answers: [
      "<input>",
      "<form>",
      "<button>",
      "<fieldset>",
    ],
    correct: 1,
    explanation:
`<form> tworzy formularz HTML.`,
  },

  {
    type: "quiz",
    question: "Który typ input służy do adresów e-mail?",
    answers: [
      'type="mail"',
      'type="email"',
      'type="text"',
      'type="message"',
    ],
    correct: 1,
    explanation:
`type="email" tworzy pole przeznaczone dla adresów e-mail.`,
  },

  {
    type: "quiz",
    question: "Który element opisuje pole formularza?",
    answers: [
      "<label>",
      "<legend>",
      "<title>",
      "<caption>",
    ],
    correct: 0,
    explanation:
`<label> opisuje pole formularza.`,
  },

  {
    type: "quiz",
    question: "Który typ input ukrywa wpisywane znaki?",
    answers: [
      'type="hidden"',
      'type="secure"',
      'type="password"',
      'type="private"',
    ],
    correct: 2,
    explanation:
`type="password" ukrywa wpisywane znaki.`,
  },

  {
    type: "quiz",
    question: "Który element pozwala wpisywać wiele linii tekstu?",
    answers: [
      "<input>",
      "<textarea>",
      "<select>",
      "<option>",
    ],
    correct: 1,
    explanation:
`<textarea> służy do wpisywania większej ilości tekstu.`,
  },
]

export const lesson9Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Formularze umożliwiają użytkownikowi wprowadzanie danych na stronie internetowej.

Najważniejsze elementy:
✔ <form> → formularz  
✔ <input> → pole danych  
✔ <label> → opis pola  
✔ <textarea> → większy tekst  
✔ <select> → lista wyboru  
✔ <button> → przycisk  

Poznane typy input:
🔹 text  
🔹 email  
🔹 password  
🔹 checkbox  
🔹 radio  

Zapamiętaj:
👉 formularze są podstawą nowoczesnych aplikacji webowych  
👉 każdy formularz powinien być czytelny  
👉 label poprawia użyteczność formularza  

Formularze są używane niemal na każdej nowoczesnej stronie internetowej.
`,
}