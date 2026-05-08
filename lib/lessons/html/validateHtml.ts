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
  code: string,
  requiredTags: string[] = []
): ValidationResult {

  const errors: string[] = []

  requiredTags.forEach((tag) => {

    // -------------------
    // DOCTYPE
    // -------------------

    if (tag === "!DOCTYPE") {

      if (
        !code.includes("<!DOCTYPE html>")
      ) {
        errors.push(
          "Brakuje <!DOCTYPE html>."
        )
      }

      return
    }

    // -------------------
    // IMG
    // -------------------

    if (tag === "img") {

      if (!code.includes("<img")) {
        errors.push(
          "Brakuje tagu <img>."
        )
      }

      return
    }

    // -------------------
    // INPUT
    // -------------------

    if (tag === "input") {

      if (!code.includes("<input")) {
        errors.push(
          "Brakuje tagu <input>."
        )
      }

      return
    }

    // -------------------
    // NORMAL TAGS
    // -------------------

    const openingTag = `<${tag}`
    const closingTag = `</${tag}>`

    // opening

    if (!code.includes(openingTag)) {
      errors.push(
        `Brakuje tagu <${tag}>.`
      )
    }

    // self closing

    const selfClosingTags = [
      "br",
      "hr",
      "meta",
      "link",
      "source",
    ]

    // closing

    if (
      !selfClosingTags.includes(tag)
      && !code.includes(closingTag)
    ) {
      errors.push(
        `Tag <${tag}> nie został zamknięty.`
      )
    }

    // -------------------
    // EMPTY TAG CHECK
    // -------------------

    const emptyCheckTags = [
      "h1",
      "h2",
      "p",
      "strong",
      "title",
      "button",
      "li",
      "th",
      "td",
      "label",
      "section",
      "header",
      "footer",
      "nav",
      "main",
    ]

    if (
      emptyCheckTags.includes(tag)
      && code.includes(openingTag)
      && code.includes(closingTag)
    ) {

      const start =
        code.indexOf(">",
        code.indexOf(openingTag))

      const end =
        code.indexOf(closingTag)

      if (
        start !== -1 &&
        end !== -1
      ) {

        const content = code
          .slice(start + 1, end)
          .trim()

        if (content === "") {
          errors.push(
            `Tag <${tag}> nie może być pusty.`
          )
        }
      }
    }

    // -------------------
    // TAG COUNT
    // -------------------

    if (
      !selfClosingTags.includes(tag)
      && tag !== "img"
      && tag !== "!DOCTYPE"
      && tag !== "input"
    ) {

      const openingCount =
        (
          code.match(
            new RegExp(`<${tag}`, "g")
          ) || []
        ).length

      const closingCount =
        (
          code.match(
            new RegExp(`</${tag}>`, "g")
          ) || []
        ).length

      if (openingCount !== closingCount) {
        errors.push(
          `Liczba tagów <${tag}> jest niepoprawna.`
        )
      }
    }

  })

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