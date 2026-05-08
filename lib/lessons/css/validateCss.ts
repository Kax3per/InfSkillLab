export function validateCss(
  code: string,
  required: string[]
) {

  const errors: string[] = []

  // pusty kod
  if (!code.trim()) {

    return {
      success: false,
      errors: [
        "Kod jest pusty.",
      ],
    }
  }

  // wymagane elementy
  required.forEach((item) => {

    if (!code.includes(item)) {

      errors.push(
        `Brakuje: ${item}`
      )
    }
  })

  // nawiasy
  if (
    !code.includes("{") ||
    !code.includes("}")
  ) {

    errors.push(
      "Brakuje nawiasów klamrowych {}."
    )
  }

  // :
  if (
    code.includes("{") &&
    !code.includes(":")
  ) {

    errors.push(
      "Brakuje ':' w CSS."
    )
  }

  // ;
  if (
    code.includes(":") &&
    !code.includes(";")
  ) {

    errors.push(
      "Brakuje ';' po właściwości."
    )
  }

  // LEKCJA 1
  if (
    required.includes("color")
  ) {

    if (!code.includes("h1")) {

      errors.push(
        "Brakuje selektora h1."
      )
    }
  }

  // LEKCJA 2
  if (
    required.includes("background")
  ) {

    if (
      !code.includes("<style>") &&
      !code.includes("style")
    ) {

      errors.push(
        "Brakuje znacznika style."
      )
    }
  }

  // LEKCJA 3
  if (
    required.includes("font-size")
  ) {

    if (
      !code.includes("px")
    ) {

      errors.push(
        "Brakuje jednostki px."
      )
    }
  }

  // LEKCJA 4
  if (
    required.includes("margin")
  ) {

    if (
      !code.includes("padding")
    ) {

      errors.push(
        "Brakuje padding."
      )
    }
  }

  // LEKCJA 5
  if (
    required.includes("border")
  ) {

    if (
      !code.includes("solid")
    ) {

      errors.push(
        "Brakuje stylu border solid."
      )
    }
  }

  // LEKCJA 6
  if (
    required.includes("display")
  ) {

    if (
      !code.includes("flex")
    ) {

      errors.push(
        "Brakuje flex."
      )
    }
  }

  // LEKCJA 7
  if (
    required.includes("justify-content")
  ) {

    if (
      !code.includes("align-items")
    ) {

      errors.push(
        "Brakuje align-items."
      )
    }
  }

  // LEKCJA 8
  if (
    required.includes("grid-template-columns")
  ) {

    if (
      !code.includes("grid")
    ) {

      errors.push(
        "Brakuje display: grid."
      )
    }
  }

  // LEKCJA 9
  if (
    required.includes(":hover")
  ) {

    if (
      !code.includes("transition")
    ) {

      errors.push(
        "Brakuje transition."
      )
    }
  }

  // LEKCJA 10
  if (
    required.includes("@media")
  ) {

    if (
      !code.includes("max-width")
    ) {

      errors.push(
        "Brakuje max-width."
      )
    }
  }

  const success =
    errors.length === 0

  return {
    success,
    errors,
  }
}

export function validateQuiz(
  selected: number | null,
  correct: number
) {

  if (selected === correct) {

    return {
      success: true,
      message:
        "Świetnie! To poprawna odpowiedź 🎉",
    }
  }

  return {
    success: false,
    message:
      "To nie jest poprawna odpowiedź.",
  }
}