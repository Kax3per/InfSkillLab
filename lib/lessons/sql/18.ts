import { Step } from "@/lib/types"

export const lesson18: Step[] = [
  {
    type: "text",
    title: "💾 Eksport i import bazy danych",
    content:
`W tej lekcji nauczysz się:
👉 eksportować bazę danych  
👉 importować bazę danych  
👉 tworzyć kopie zapasowe  

📌 Backup bazy danych jest bardzo ważny w profesjonalnych projektach.`,
  },

  {
    type: "text",
    title: "🧠 Co to jest eksport bazy danych?",
    content:
`Eksport oznacza:
👉 zapisanie bazy danych do pliku

Najczęściej baza zapisuje się jako:
✔ .sql

Plik eksportu zawiera:
👉 tabele  
👉 rekordy  
👉 strukturę bazy  

📌 Dzięki eksportowi można przenieść bazę na inny komputer.`,
  },

  {
    type: "text",
    title: "📦 Do czego używa się eksportu?",
    content:
`Eksport jest używany do:
✔ tworzenia backupu  
✔ przenoszenia projektu  
✔ wysyłania bazy danych  
✔ odzyskiwania danych  

📌 Backup chroni przed utratą danych.`,
  },

  {
    type: "text",
    title: "⚙ Jak wyeksportować bazę w phpMyAdmin?",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Kliknij bazę danych

3️⃣ Wejdź w:
Export

4️⃣ Wybierz:
Quick

5️⃣ Format:
SQL

6️⃣ Kliknij:
Export

📌 Przeglądarka pobierze plik .sql.`,
  },

  {
    type: "code",
    title: "👀 Fragment pliku eksportu",
    content: `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

INSERT INTO users (name)
VALUES ('Jan');`,
  },

  {
    type: "text",
    title: "📥 Co to jest import bazy danych?",
    content:
`Import oznacza:
👉 wczytanie bazy danych z pliku

Najczęściej importuje się:
✔ pliki .sql

📌 Import pozwala szybko odtworzyć całą bazę danych.`,
  },

  {
    type: "text",
    title: "⚙ Jak zaimportować bazę w phpMyAdmin?",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Utwórz nową bazę danych

3️⃣ Kliknij:
Import

4️⃣ Wybierz plik .sql

5️⃣ Kliknij:
Import

📌 phpMyAdmin odtworzy:
✔ tabele
✔ rekordy
✔ relacje`,
  },

  {
    type: "text",
    title: "🛡 Dlaczego backup jest ważny?",
    content:
`Backup pozwala odzyskać dane po:
👉 awarii komputera  
👉 usunięciu bazy  
👉 błędzie programisty  
👉 ataku hakerskim  

📌 Profesjonalne firmy wykonują backup codziennie.`,
  },

  {
    type: "text",
    title: "📋 Quick vs Custom",
    content:
`Podczas eksportu można wybrać:

✔ Quick
szybki eksport

✔ Custom
zaawansowane opcje eksportu

📌 Na początku najlepiej używać Quick.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas eksportu i importu uczniowie często popełniają błędy:

❌ import do złej bazy  
❌ brak pliku .sql  
❌ usunięcie starej bazy przed backupem  
❌ eksport złej bazy danych  

📌 Zawsze warto robić backup przed zmianami.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz bazę danych:
school

2️⃣ Dodaj tabelę:
users

3️⃣ Wyeksportuj bazę do pliku .sql

4️⃣ Utwórz nową bazę:
school_copy

5️⃣ Zaimportuj plik .sql

📌 Sprawdź czy dane zostały skopiowane.`,
  },

  {
    type: "quiz",
    question: "Do czego służy eksport bazy danych?",
    answers: [
      "Do usuwania rekordów",
      "Do tworzenia kopii bazy",
      "Do zmiany hasła",
      "Do tworzenia użytkowników",
    ],
    correct: 1,
    explanation:
`Eksport pozwala utworzyć kopię bazy danych.`,
  },

  {
    type: "quiz",
    question: "Jaki format najczęściej posiada backup bazy danych?",
    answers: [
      ".html",
      ".css",
      ".sql",
      ".jpg",
    ],
    correct: 2,
    explanation:
`Backup bazy danych najczęściej zapisuje się jako plik .sql.`,
  },
]

export const lesson18Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się eksportu i importu baz danych.

Zapamiętaj:

✔ Eksport tworzy kopię bazy  
✔ Import odtwarza bazę z pliku  
✔ Backup chroni dane  
✔ Najczęściej używa się plików .sql  

Najważniejsze elementy:
🔹 Export  
🔹 Import  
🔹 Backup  
🔹 .sql  

👉 Kopie zapasowe są bardzo ważne w profesjonalnych projektach.
`,
}