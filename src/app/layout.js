import '../Styles/App/Import.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="preconnect" href="https://rsms.me/"/>
         <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
         <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>

      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
