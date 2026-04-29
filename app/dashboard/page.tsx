"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const totalLessons = 8

  const [lastDone, setLastDone] = useState(0)
  const [nextLesson, setNextLesson] = useState(1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const loadProgress = async () => {
      const { data: userData } = await supabase.auth.getUser()
      const user = userData.user
      if (!user) return

      const { data } = await supabase
        .from("progress")
        .select("lesson")
        .eq("user_id", user.id)
        .eq("course", "html")

      const lessons = data?.map((l) => l.lesson) || []

      const last = Math.max(...lessons, 0)
      setLastDone(last)

      const next = last < totalLessons ? last + 1 : totalLessons
      setNextLesson(next)

      setProgress(Math.round((lessons.length / totalLessons) * 100))
    }

    loadProgress()
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

      <Card>
        <CardHeader>
          <CardTitle>
            {lastDone > 0
              ? `✅ Ukończyłeś lekcję ${lastDone}`
              : "🚀 Zacznij naukę "}
            <span className="pl-2 text-xl">HTML</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">

          <Link href={`/dashboard/inf03/html/${nextLesson}`}>
            <Button className="w-full">
              {lastDone > 0
                ? `Przejdź do lekcji ${nextLesson}`
                : "Rozpocznij lekcję 1"}
            </Button>
          </Link>

          <p className="text-sm text-muted-foreground">
            Postęp: {progress}%
          </p>

          <div className="w-full bg-muted h-2 rounded">
            <div
              className="bg-primary h-2 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>

        </CardContent>
      </Card>

    </div>
  )
}