import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import Image from "next/image"



export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
            </div>
             <Image 
              src="/images/infskillslab.png"
              alt="logo"
              width={150}
              height={40}
              />
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
       <div className="relative hidden bg-muted lg:block min-h-screen">
<div className="relative bg-black lg:block min-h-screen">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/images/leftVideo.mp4" />
  </video>

  {/* overlay */}
  <div className="absolute inset-0 bg-black/40"></div>
</div>
    </div>
    </div>
  )
}
