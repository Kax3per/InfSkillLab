// lib/validationPhp.ts

export type ValidationResult = {
  success: boolean
  errors: string[]
}

export type QuizValidationResult = {
  success: boolean
  message: string
}

//
// PHP VALIDATION
//

export function validatePhp(
  code: string,
  requiredElements: string[] = []
): ValidationResult {

  const errors: string[] = []

  requiredElements.forEach((element) => {

    const lowerCode =
      code.toLowerCase()

    const lowerElement =
      element.toLowerCase()

    // -------------------
    // PHP TAG
    // -------------------

    if (lowerElement === "php") {

      if (
        !lowerCode.includes("<?php")
      ) {
        errors.push(
          "Brakuje otwarcia <?php."
        )
      }

      return
    }

    // -------------------
    // ECHO
    // -------------------

    if (lowerElement === "echo") {

      if (
        !lowerCode.includes("echo")
      ) {
        errors.push(
          "Brakuje instrukcji echo."
        )
      }

      return
    }

    // -------------------
    // VARIABLES
    // -------------------

    if (
      lowerElement.startsWith("$")
    ) {

      if (
        !code.includes(element)
      ) {
        errors.push(
          `Brakuje zmiennej ${element}.`
        )
      }

      return
    }

    // -------------------
    // GET / POST
    // -------------------

    if (
      lowerElement === "$_get"
    ) {

      if (
        !lowerCode.includes("$_get")
      ) {
        errors.push(
          "Brakuje metody $_GET."
        )
      }

      return
    }

    if (
      lowerElement === "$_post"
    ) {

      if (
        !lowerCode.includes("$_post")
      ) {
        errors.push(
          "Brakuje metody $_POST."
        )
      }

      return
    }

    // -------------------
    // MYSQLI
    // -------------------

    if (
      lowerElement === "mysqli"
    ) {

      if (
        !lowerCode.includes("mysqli")
      ) {
        errors.push(
          "Brakuje połączenia mysqli."
        )
      }

      return
    }

    // -------------------
    // SQL QUERY
    // -------------------

    if (
      lowerElement === "select"
    ) {

      if (
        !lowerCode.includes("select")
      ) {
        errors.push(
          "Brakuje zapytania SELECT."
        )
      }

      return
    }

    if (
      lowerElement === "insert"
    ) {

      if (
        !lowerCode.includes("insert")
      ) {
        errors.push(
          "Brakuje zapytania INSERT."
        )
      }

      return
    }

    // -------------------
    // IF
    // -------------------

    if (
      lowerElement === "if"
    ) {

      if (
        !lowerCode.includes("if")
      ) {
        errors.push(
          "Brakuje instrukcji if."
        )
      }

      return
    }

    // -------------------
    // LOOP
    // -------------------

    if (
      lowerElement === "foreach"
    ) {

      if (
        !lowerCode.includes("foreach")
      ) {
        errors.push(
          "Brakuje pętli foreach."
        )
      }

      return
    }

    // -------------------
    // SESSION
    // -------------------

    if (
      lowerElement === "session_start"
    ) {

      if (
        !lowerCode.includes("session_start")
      ) {
        errors.push(
          "Brakuje session_start()."
        )
      }

      return
    }

    // -------------------
    // DEFAULT CHECK
    // -------------------

    if (
      !lowerCode.includes(
        lowerElement
      )
    ) {
      errors.push(
        `Brakuje elementu: ${element}.`
      )
    }

  })

  return {
    success:
      errors.length === 0,
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