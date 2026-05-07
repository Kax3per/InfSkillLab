// lib/validation.ts

export type ValidationResult = {
  success: boolean
  errors: string[]
}

export type QuizValidationResult = {
  success: boolean
  message: string
}

//
// HTML VALIDATION
//

export function validateHtml(
  code: string
): ValidationResult {
  const errors: string[] = []

  // -------------------
  // H1
  // -------------------

  if (!code.includes("<h1>")) {
    errors.push("Brakuje tagu <h1>.")
  }

  if (!code.includes("</h1>")) {
    errors.push(
      "Tag <h1> nie został zamknięty."
    )
  }

  // -------------------
  // P
  // -------------------

  if (!code.includes("<p>")) {
    errors.push("Brakuje tagu <p>.")
  }

  if (!code.includes("</p>")) {
    errors.push(
      "Tag <p> nie został zamknięty."
    )
  }

  // -------------------
  // EMPTY H1
  // -------------------

  const h1Start =
    code.indexOf("<h1>")

  const h1End =
    code.indexOf("</h1>")

  if (
    h1Start !== -1 &&
    h1End !== -1
  ) {
    const h1Content = code
      .slice(h1Start + 4, h1End)
      .trim()

    if (h1Content === "") {
      errors.push(
        "Nagłówek <h1> nie może być pusty."
      )
    }
  }

  // -------------------
  // EMPTY P
  // -------------------

  const pStart =
    code.indexOf("<p>")

  const pEnd =
    code.indexOf("</p>")

  if (
    pStart !== -1 &&
    pEnd !== -1
  ) {
    const pContent = code
      .slice(pStart + 3, pEnd)
      .trim()

    if (pContent === "") {
      errors.push(
        "Paragraf <p> nie może być pusty."
      )
    }
  }

  // -------------------
  // TAG COUNT
  // -------------------

  const openingH1 =
    (code.match(/<h1>/g) || [])
      .length

  const closingH1 =
    (code.match(/<\/h1>/g) || [])
      .length

  if (openingH1 !== closingH1) {
    errors.push(
      "Liczba tagów <h1> jest niepoprawna."
    )
  }

  const openingP =
    (code.match(/<p>/g) || [])
      .length

  const closingP =
    (code.match(/<\/p>/g) || [])
      .length

  if (openingP !== closingP) {
    errors.push(
      "Liczba tagów <p> jest niepoprawna."
    )
  }

  return {
    success: errors.length === 0,
    errors,
  }
}

//
// QUIZ VALIDATION
//

export function validateQuiz(
  selected: number | null,
  correct: number
): QuizValidationResult {
  if (selected === null) {
    return {
      success: false,
      message:
        "Najpierw wybierz odpowiedź.",
    }
  }

  if (selected === correct) {
    return {
      success: true,
      message:
        "Świetnie! To poprawna odpowiedź.",
    }
  }

  return {
    success: false,
    message:
      "To nie jest poprawna odpowiedź.",
  }
}