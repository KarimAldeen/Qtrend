'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import i18n from '../../src/translate/Translate'
import '../Styles/App/Import.scss'
export default function RootLayout({ children }) {

  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <head>
        <title>Qtrend Company</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="black" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.9.2/css/flag-icons.min.css"
        />


      </head>
      <QueryClientProvider client={queryClient}>
      <body>{children}</body>
      </QueryClientProvider>
    </html>
  )
}
