import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { CookieBanner } from "@/components/cookie-banner"
import { html } from "framer-motion/client";
const geist = Geist({subsets:['latin'],variable:'--font-sans'});
export const metadata = {
  title: "Inf Skills Lab",
  description: "Twoja aplikacja",
  icons: {
    icon: "/favicon1.png"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      
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

