"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted")
    if (!accepted) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <Card className="p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
        
        <p className="text-sm text-muted-foreground">
          Używamy plików cookies, aby zapewnić najlepsze działanie aplikacji.
        </p>

        <Button onClick={acceptCookies}>
          Akceptuję
        </Button>

      </Card>
    </div>
  )
}