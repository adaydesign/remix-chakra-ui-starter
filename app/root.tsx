// root.tsx
import React, { useContext, useEffect } from "react"
import { withEmotionCache } from "@emotion/react"
import { ChakraProvider } from "@chakra-ui/react"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { V2_MetaFunction, LinksFunction } from "@remix-run/node" // Depends on the runtime you choose

import { ServerStyleContext, ClientStyleContext } from "./context"
import { theme } from "./styles/theme"
import { PublicLayout, CatchErrorLayout } from "~/layout"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Very cool app | Remix" },
    {
      property: "og:title",
      content: "Very cool app",
    },
    {
      name: "description",
      content: "This app is the best",
    },
  ]
}

export let links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Prompt:wght@100;300;400;500;600;700;800&display=swap",
    },
  ]
}

interface DocumentProps {
  children: React.ReactNode
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext)
    const clientStyleData = useContext(ClientStyleContext)

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head
      // re-inject tags
      const tags = emotionCache.sheet.tags
      emotionCache.sheet.flush()
      tags.forEach((tag) => {
        ;(emotionCache.sheet as any)._insertTag(tag)
      })
      // reset cache to reapply global styles
      clientStyleData?.reset()
    }, [])

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
)

export default function App() {
  return (
    <Document>
      <PublicLayout>
        <Outlet />
      </PublicLayout>
    </Document>
  )
}

export function ErrorBoundary() {
  return (
    <Document>
      <CatchErrorLayout />
    </Document>
  )
}
