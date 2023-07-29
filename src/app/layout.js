import '../Styles/App/Import.scss'
export default function RootLayout({ children }) {
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

      </head>
      <body>{children}</body>
    </html>
  )
}
