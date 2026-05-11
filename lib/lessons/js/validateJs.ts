//
// JS VALIDATION TYPES
//

export type ValidationResult = {
  success: boolean
  errors: string[]
}

export type QuizValidationResult = {
  success: boolean
  message: string
}

//
// JS VALIDATION
//

export function validateJs(
  code: string,
  requiredElements: string[] = []
): ValidationResult {

  const errors: string[] = []

  requiredElements.forEach((element) => {

    // -------------------
    // VARIABLES
    // -------------------

    if (element === "let") {

      if (!code.includes("let ")) {
        errors.push(
          "Brakuje zmiennej let."
        )
      }

      return
    }

    if (element === "const") {

      if (!code.includes("const ")) {
        errors.push(
          "Brakuje zmiennej const."
        )
      }

      return
    }

    // -------------------
    // CONSOLE
    // -------------------

    if (element === "console.log") {

      if (!code.includes("console.log")) {
        errors.push(
          "Brakuje console.log()."
        )
      }

      if (code.includes("console.log()")) {
        errors.push(
          "console.log() nie może być pusty."
        )
      }

      return
    }

    // -------------------
    // IF
    // -------------------

    if (element === "if") {

      if (!code.includes("if")) {
        errors.push(
          "Brakuje instrukcji if."
        )
      }

      return
    }

    // -------------------
    // ELSE
    // -------------------

    if (element === "else") {

      if (!code.includes("else")) {
        errors.push(
          "Brakuje instrukcji else."
        )
      }

      return
    }

    // -------------------
    // SWITCH
    // -------------------

    if (element === "switch") {

      if (!code.includes("switch")) {
        errors.push(
          "Brakuje instrukcji switch."
        )
      }

      return
    }

    // -------------------
    // FOR
    // -------------------

    if (element === "for") {

      if (!code.includes("for")) {
        errors.push(
          "Brakuje pętli for."
        )
      }

      return
    }

    // -------------------
    // WHILE
    // -------------------

    if (element === "while") {

      if (!code.includes("while")) {
        errors.push(
          "Brakuje pętli while."
        )
      }

      return
    }

    // -------------------
    // FUNCTION
    // -------------------

    if (element === "function") {

      if (!code.includes("function")) {
        errors.push(
          "Brakuje funkcji."
        )
      }

      return
    }

    // -------------------
    // RETURN
    // -------------------

    if (element === "return") {

      if (!code.includes("return")) {
        errors.push(
          "Brakuje return."
        )
      }

      return
    }

    // -------------------
    // ARRAY
    // -------------------

    if (element === "array") {

      if (
        !code.includes("[") ||
        !code.includes("]")
      ) {
        errors.push(
          "Brakuje tablicy."
        )
      }

      return
    }

    // -------------------
    // OBJECT
    // -------------------

    if (element === "object") {

      if (
        !code.includes("{") ||
        !code.includes("}")
      ) {
        errors.push(
          "Brakuje obiektu."
        )
      }

      return
    }

    // -------------------
    // EVENT LISTENER
    // -------------------

    if (element === "addEventListener") {

      if (
        !code.includes(
          "addEventListener"
        )
      ) {
        errors.push(
          "Brakuje addEventListener()."
        )
      }

      return
    }

    // -------------------
    // QUERY SELECTOR
    // -------------------

    if (element === "querySelector") {

      if (
        !code.includes(
          "querySelector"
        )
      ) {
        errors.push(
          "Brakuje querySelector()."
        )
      }

      return
    }

    // -------------------
    // GET ELEMENT
    // -------------------

    if (element === "getElementById") {

      if (
        !code.includes(
          "getElementById"
        )
      ) {
        errors.push(
          "Brakuje getElementById()."
        )
      }

      return
    }

    // -------------------
    // FETCH
    // -------------------

    if (element === "fetch") {

      if (!code.includes("fetch")) {
        errors.push(
          "Brakuje fetch()."
        )
      }

      return
    }

    // -------------------
    // ASYNC
    // -------------------

    if (element === "async") {

      if (!code.includes("async")) {
        errors.push(
          "Brakuje async."
        )
      }

      return
    }

    // -------------------
    // AWAIT
    // -------------------

    if (element === "await") {

      if (!code.includes("await")) {
        errors.push(
          "Brakuje await."
        )
      }

      return
    }

    // -------------------
    // TRY CATCH
    // -------------------

    if (element === "try") {

      if (!code.includes("try")) {
        errors.push(
          "Brakuje bloku try."
        )
      }

      return
    }

    if (element === "catch") {

      if (!code.includes("catch")) {
        errors.push(
          "Brakuje bloku catch."
        )
      }

      return
    }

    // -------------------
    // CLASS
    // -------------------

    if (element === "class") {

      if (!code.includes("class")) {
        errors.push(
          "Brakuje klasy."
        )
      }

      return
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