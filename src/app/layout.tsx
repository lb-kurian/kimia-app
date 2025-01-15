import './globals.css'
import { Inter, Gugi } from 'next/font/google'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })
const gugi = Gugi({ weight: '400', subsets: ['latin'], variable: '--font-gugi' })

export const metadata = {
  title: 'BrandBoost AI',
  description: 'A modern content crea application',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body className={`${inter.className} ${gugi.variable}`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}


