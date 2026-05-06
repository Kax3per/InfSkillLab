import "./globals.css";
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { CookieBanner } from "@/components/cookie-banner"
import { html } from "framer-motion/client";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata = {
  title: "InfSkillsLab",
  description: "INF learnig app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={cn("font-sans", poppins.className)} suppressHydrationWarning >

    
   

      <body>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
        {children}
        <Toaster />
        <CookieBanner/>
        </TooltipProvider>
         </ThemeProvider>
      </body>
      
    </html>
  );
}

