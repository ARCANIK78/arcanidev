import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Layout from '../components/Layouts/main'

function WebSite({ Component, pageProps, router}: AppProps) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route}/>
      </Layout>
    </ChakraProvider>
  )
}
export default WebSite