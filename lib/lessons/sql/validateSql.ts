// lib/lessons/sql/validateSql.ts

export type ValidationResult = {
  success: boolean
  errors: string[]
}

export type QuizValidationResult = {
  success: boolean
  message: string
}

//
// SQL VALIDATION
//

export function validateSql(
  code: string,
  requiredKeywords: string[] = []
): ValidationResult {

  const errors: string[] = []

  const normalizedCode =
    code.toLowerCase()

  requiredKeywords.forEach(
    (keyword) => {

      const normalizedKeyword =
        keyword.toLowerCase()

      // -------------------
      // REQUIRED KEYWORD
      // -------------------

      if (
        !normalizedCode.includes(
          normalizedKeyword
        )
      ) {

        errors.push(
          `Brakuje: ${keyword}`
        )
      }

    }
  )

  // -------------------
  // SEMICOLON
  // -------------------

  if (
    code.trim() !== "" &&
    !code.trim().endsWith(";")
  ) {

    errors.push(
      "Zapytanie SQL powinno kończyć się średnikiem ;"
    )
  }

  // -------------------
  // SELECT WITHOUT FROM
  // -------------------

  if (
    normalizedCode.includes(
      "select"
    ) &&
    !normalizedCode.includes(
      "from"
    )
  ) {

    errors.push(
      "SELECT wymaga FROM."
    )
  }

  // -------------------
  // UPDATE WITHOUT WHERE
  // -------------------

  if (
    normalizedCode.includes(
      "update"
    ) &&
    !normalizedCode.includes(
      "where"
    )
  ) {

    errors.push(
      "UPDATE bez WHERE jest niebezpieczny."
    )
  }

  // -------------------
  // DELETE WITHOUT WHERE
  // -------------------

  if (
    normalizedCode.includes(
      "delete"
    ) &&
    !normalizedCode.includes(
      "where"
    )
  ) {

    errors.push(
      "DELETE bez WHERE jest niebezpieczny."
    )
  }

  // -------------------
  // JOIN WITHOUT ON
  // -------------------

  if (
    (
      normalizedCode.includes(
        "join"
      )
    ) &&
    !normalizedCode.includes(
      "on"
    )
  ) {

    errors.push(
      "JOIN wymaga ON."
    )
  }

  // -------------------
  // CREATE TABLE
  // -------------------

  if (
    normalizedCode.includes(
      "create table"
    )
  ) {

    if (
      !normalizedCode.includes("(")
      ||
      !normalizedCode.includes(")")
    ) {

      errors.push(
        "CREATE TABLE wymaga nawiasów ()."
      )
    }
  }

  // -------------------
  // INSERT INTO
  // -------------------

  if (
    normalizedCode.includes(
      "insert into"
    ) &&
    !normalizedCode.includes(
      "values"
    )
  ) {

    errors.push(
      "INSERT INTO wymaga VALUES."
    )
  }

  // -------------------
  // PRIMARY KEY
  // -------------------

  if (
    normalizedCode.includes(
      "primary key"
    ) &&
    !normalizedCode.includes(
      "id"
    )
  ) {

    errors.push(
      "PRIMARY KEY najczęściej powinien dotyczyć id."
    )
  }

  // -------------------
  // EMPTY QUERY
  // -------------------

  if (
    code.trim() === ""
  ) {

    errors.push(
      "Kod SQL nie może być pusty."
    )
  }

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