
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../assets/sass/style.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

NProgress.configure({ showSpinner: false })

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()

  useEffect(() => {
    NProgress.done()
  }, [pathname])
  return (
    <html lang="en">
      <head><link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        /></head>
      <body>{children}</body>
    </html>
  );
}