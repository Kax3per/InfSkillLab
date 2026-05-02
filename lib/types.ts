import { ReactNode } from "react"

export type Step =
  | { type: "text"; title: string; content: string }
  | { type: "code"; title: string; content: string }
  | { type: "code-task"; title: string; content: string }
  | {
      type: "quiz"
      question: string
      answers: string[]
      correct: number
      explanation: ReactNode
    }

    export type Lesson = {
  id: number
  title: string
  steps: Step[]
}