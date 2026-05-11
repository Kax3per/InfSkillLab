import { Step } from "@/lib/types"

export const lesson12: Step[] = [
  {
    type: "text",
    title: "🔐 Logowanie użytkownika",
    content:
`Jednym z najważniejszych zastosowań PHP jest logowanie użytkowników.

System logowania:
👉 pobiera login i hasło
👉 sprawdza dane w bazie
👉 pozwala wejść do aplikacji

📌 To bardzo częsty temat na INF.03.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa logowanie?",
    content:
`Schemat działania:

1️⃣ użytkownik wpisuje login i hasło

2️⃣ formularz wysyła POST

3️⃣ PHP sprawdza dane w MySQL

4️⃣ jeśli dane są poprawne:
użytkownik zostaje zalogowany`,
  },

  {
    type: "code",
    title: "🖥 Formularz logowania",
    content:
`<form method="POST">

    <input
        type="text"
        name="login"
        placeholder="Login"
    >

    <input
        type="password"
        name="password"
        placeholder="Hasło"
    >

    <button type="submit">
        Zaloguj
    </button>

</form>`,
  },

  {
    type: "text",
    title: "📦 Tabela users",
    content:
`Najczęściej dane użytkowników zapisujemy w tabeli:

users

Przykładowe kolumny:
👉 id
👉 login
👉 password`,
  },

  {
    type: "code",
    title: "👀 Sprawdzanie użytkownika",
    content:
`SELECT * FROM users
WHERE login='admin'
AND password='1234'`,
  },

  {
    type: "text",
    title: "⚠ AND w SQL",
    content:
`AND oznacza:
oba warunki muszą być prawdziwe.

📌 Login i hasło muszą się zgadzać jednocześnie.`,
  },

  {
    type: "code",
    title: "⚙ PHP + logowanie",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

$login = $_POST["login"];
$password = $_POST["password"];

$sql = "SELECT * FROM users
WHERE login='$login'
AND password='$password'";

$result = mysqli_query($conn, $sql);

?>`,
  },

  {
    type: "text",
    title: "📊 mysqli_num_rows()",
    content:
`mysqli_num_rows() sprawdza:
ile rekordów znaleziono.

Jeśli:
👉 1 rekord → dane poprawne
👉 0 rekordów → błędne dane`,
  },

  {
    type: "code",
    title: "✅ Sprawdzenie logowania",
    content:
`<?php

if (mysqli_num_rows($result) > 0) {

    echo "Zalogowano";

} else {

    echo "Błędny login lub hasło";
}

?>`,
  },

  {
    type: "text",
    title: "🛡 Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 zła nazwa tabeli  
👉 brak kolumny password  
👉 brak method POST  
👉 literówki w SQL  
👉 brak połączenia z bazą`,
  },

  {
    type: "text",
    title: "⚠ Hasła na prawdziwych stronach",
    content:
`Na prawdziwych stronach:
hasła są szyfrowane.

📌 Na INF.03 często używa się prostych przykładów bez szyfrowania.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz tabelę:
users

2️⃣ Dodaj użytkownika:
admin / 1234

3️⃣ Utwórz formularz logowania

4️⃣ Sprawdź:
czy login i hasło istnieją w bazie danych

📌 Użyj:
SELECT
WHERE
AND`,
  },

  {
    type: "quiz",
    question: "Do czego służy mysqli_num_rows()?",
    answers: [
      "Do usuwania danych",
      "Do liczenia rekordów",
      "Do tworzenia tabel",
      "Do stylowania strony",
    ],
    correct: 1,
    explanation:
`mysqli_num_rows() sprawdza liczbę znalezionych rekordów.`,
  },

  {
    type: "quiz",
    question: "Co oznacza AND w SQL?",
    answers: [
      "Wystarczy jeden warunek",
      "Usuwa rekord",
      "Oba warunki muszą być prawdziwe",
      "Dodaje dane",
    ],
    correct: 2,
    explanation:
`AND oznacza, że wszystkie warunki muszą być spełnione.`,
  },
]

export const lesson12Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP może obsługiwać logowanie użytkowników.

Zapamiętaj:

✔ Formularz wysyła dane POST  
✔ SELECT sprawdza użytkownika  
✔ WHERE filtruje dane  
✔ AND łączy warunki  
✔ mysqli_num_rows() sprawdza wynik  

Najważniejsze elementy:
🔹 login  
🔹 password  
🔹 SELECT  
🔹 WHERE  
🔹 AND  

👉 To fundament systemów logowania w PHP.
`,
}