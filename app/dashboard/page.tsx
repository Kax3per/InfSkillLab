"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// 🔥 RANK SYSTEM
function getRank(xp: number) {
  if (xp < 50) return { name: "Bambik", color: "#6b7280" }
  if (xp < 100) return { name: "Słabiak", color: "#3b82f6" }
  if (xp < 150) return { name: "Pros", color: "#10b981" }
  if (xp < 200) return { name: "Sigma", color: "#f59e0b" }
  return { name: "Pro", color: "#ef4444" }
}

export default function DashboardPage() {
  const totalLessons = 8

  const [lastDone, setLastDone] = useState(0)
  const [nextLesson, setNextLesson] = useState(1)
  const [progress, setProgress] = useState(0)
  const [xp, setXp] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      const { data: userData } = await supabase.auth.getUser()
      const user = userData.user
      if (!user) return

      // 🔥 PROGRESS
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

      // 🔥 XP
      const { data: profile } = await supabase
        .from("profiles")
        .select("xp")
        .eq("id", user.id)
        .single()

      if (profile) setXp(profile.xp || 0)
    }

    loadData()
  }, [])

  // 🔥 KOŁO
  const rank = getRank(xp)
  const progressCircle = xp % 50
  const percentage = (progressCircle / 50) * 100

  return (
    <div className="grid gap-6 md:grid-cols-2">

      {/* 🔥 KARTA LEKCJI */}
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

      {/* 🔥 XP + RANK */}
      <Card className="p-6 rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">
            Twój poziom
          </CardTitle>
        </CardHeader>

        <CardContent className="flex justify-center">

          <div className="relative w-48 h-48">

            {/* tło */}
           <div className="relative w-48 h-48 flex items-center justify-center">

  <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    className="-rotate-90"
  >
    {/* tło */}
    <circle
      cx="90"
      cy="90"
      r="80"
      stroke="#e5e7eb"
      strokeWidth="10"
      fill="none"
    />

    {/* progress */}
    <circle
      cx="90"
      cy="90"
      r="80"
      stroke={rank.color}
      strokeWidth="10"
      fill="none"
      strokeDasharray={2 * Math.PI * 80}
      strokeDashoffset={
        2 * Math.PI * 80 * (1 - percentage / 100)
      }
      strokeLinecap="round"
      className="transition-all duration-500"
    />
  </svg>

  {/* środek */}
  <div className="absolute flex flex-col items-center justify-center">

    <p className="text-3xl font-bold">
      {xp}
    </p>

    <p
      className="text-sm font-semibold"
      style={{ color: rank.color }}
    >
      {rank.name}
    </p>

  </div>

</div>
          </div>

        </CardContent>
      </Card>

    </div>
  )
}