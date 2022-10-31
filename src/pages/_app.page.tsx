import { type FC, useState } from 'react'
import { type AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  type DehydratedState
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import nextI18NextConfig from '../../next-i18next.config.js'

function MyApp({
  Component,
  pageProps
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false
          }
        }
      })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp as FC, nextI18NextConfig)
