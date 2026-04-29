"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const lessons = [
  { id: 1, title: "Co to HTML" },
  { id: 2, title: "Struktura strony" },
  { id: 3, title: "Nagłówki i tekst" },
  { id: 4, title: "Linki i obrazy" },
  { id: 5, title: "Listy" },
  { id: 6, title: "Tabele" },
  { id: 7, title: "Formularze" },
  { id: 8, title: "Projekt egzaminacyjny" },
]

export default function HtmlPage() {
  const [lastDone, setLastDone] = useState(0)

  useEffect(() => {
    const load = async () => {
      const { data: userData } = await supabase.auth.getUser()
      const user = userData.user
      if (!user) return

      const { data } = await supabase
        .from("progress")
        .select("lesson")
        .eq("user_id", user.id)
        .eq("course", "html")

      const lessonsDone = data?.map((l) => l.lesson) || []
      const last = Math.max(...lessonsDone, 0)

      setLastDone(last)
    }

    load()
  }, [])

  return (
    <div className="grid gap-4">

      {lessons.map((lesson) => {
        const unlocked = lesson.id <= lastDone + 1

        return unlocked ? (
          <Link key={lesson.id} href={`/dashboard/inf03/html/${lesson.id}`}>
            <Card className="p-4 hover:bg-muted cursor-pointer">
              <CardContent>
                {lesson.id <= lastDone && "✅ "}
                Lekcja {lesson.id}: {lesson.title}
              </CardContent>
            </Card>
          </Link>
        ) : (
          <Card key={lesson.id} className="p-4 opacity-50">
            <CardContent>
              🔒 Lekcja {lesson.id}: {lesson.title}
            </CardContent>
          </Card>
        )
      })}

    </div>
  )
}