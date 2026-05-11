import { Step } from "@/lib/types"

export const lesson17: Step[] = [
  {
    type: "text",
    title: "🔒 Zabezpieczanie SQL Injection",
    content:
`SQL Injection to atak na bazę danych.

Atakujący może:
👉 ominąć logowanie
👉 usunąć dane
👉 wykraść informacje

📌 To bardzo ważny temat na INF.03.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa SQL Injection?",
    content:
`Problem pojawia się,
gdy dane użytkownika trafiają bezpośrednio do SQL.

Przykład:
👉 użytkownik wpisuje złośliwy kod SQL
👉 PHP wykonuje go w bazie danych`,
  },

  {
    type: "code",
    title: "❌ Niebezpieczny kod",
    content:
`<?php

$login = $_POST["login"];

$sql = "SELECT * FROM users
WHERE login='$login'";

?>`,
  },

  {
    type: "text",
    title: "⚠ Dlaczego to niebezpieczne?",
    content:
`Użytkownik może wpisać:

' OR 1=1 --

📌 Takie dane mogą oszukać zapytanie SQL.`,
  },

  {
    type: "code",
    title: "🛡 mysqli_real_escape_string()",
    content:
`<?php

$login = mysqli_real_escape_string(
    $conn,
    $_POST["login"]
);

?>`,
  },

  {
    type: "text",
    title: "📦 mysqli_real_escape_string()",
    content:
`Ta funkcja:
👉 zabezpiecza znaki specjalne
👉 utrudnia SQL Injection

📌 Bardzo często pojawia się na egzaminach.`,
  },

  {
    type: "code",
    title: "✅ Bezpieczniejsze zapytanie",
    content:
`<?php

$login = mysqli_real_escape_string(
    $conn,
    $_POST["login"]
);

$sql = "SELECT * FROM users
WHERE login='$login'";

?>`,
  },

  {
    type: "text",
    title: "🔐 Hasła i bezpieczeństwo",
    content:
`Nigdy nie zapisujemy haseł jako zwykły tekst.

Na prawdziwych stronach:
👉 hasła są szyfrowane
👉 dane są filtrowane`,
  },

  {
    type: "code",
    title: "🔒 password_hash()",
    content:
`<?php

$password = password_hash(
    "1234",
    PASSWORD_DEFAULT
);

?>`,
  },

  {
    type: "text",
    title: "🧠 password_hash()",
    content:
`password_hash():
👉 szyfruje hasło
👉 zwiększa bezpieczeństwo

📌 To standard w nowoczesnym PHP.`,
  },

  {
    type: "code",
    title: "✅ password_verify()",
    content:
`<?php

if (
    password_verify(
        "1234",
        $hash
    )
) {

    echo "Poprawne hasło";
}

?>`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 brak filtrowania danych  
👉 zwykłe hasła w bazie  
👉 brak mysqli_real_escape_string()  
👉 brak walidacji`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Pobierz login z formularza

2️⃣ Zabezpiecz dane:
mysqli_real_escape_string()

3️⃣ Utwórz zapytanie:
SELECT

4️⃣ Zaszyfruj hasło:
password_hash()

📌 Spróbuj stworzyć bezpieczne logowanie.`,
  },

  {
    type: "quiz",
    question: "Do czego służy mysqli_real_escape_string()?",
    answers: [
      "Do usuwania rekordów",
      "Do zabezpieczania danych",
      "Do tworzenia sesji",
      "Do uploadu plików",
    ],
    correct: 1,
    explanation:
`mysqli_real_escape_string() pomaga zabezpieczyć dane przed SQL Injection.`,
  },

  {
    type: "quiz",
    question: "Co robi password_hash()?",
    answers: [
      "Usuwa hasło",
      "Tworzy tabelę",
      "Szyfruje hasło",
      "Łączy z MySQL",
    ],
    correct: 2,
    explanation:
`password_hash() szyfruje hasła użytkowników.`,
  },
]

export const lesson17Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP musi być zabezpieczony przed SQL Injection.

Zapamiętaj:

✔ SQL Injection atakuje bazę danych  
✔ mysqli_real_escape_string() filtruje dane  
✔ password_hash() szyfruje hasła  
✔ password_verify() sprawdza hasło  

Najważniejsze elementy:
🔹 SQL Injection  
🔹 mysqli_real_escape_string()  
🔹 password_hash()  
🔹 password_verify()  

👉 Bezpieczeństwo to bardzo ważna część backendu PHP.
`,
}