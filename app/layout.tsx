import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '카페 사장님을 위한 비즈니스 솔루션',
  description: '카페 운영을 더 쉽고 효율적으로',
  generator: 'Next.js',
}

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
    dataLayer: any[]
  }
}

const GA_MEASUREMENT_ID = 'G-YLD07SQXLJ'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}