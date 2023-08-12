import '@/styles/globals.css'
import Navbar from '../../components/navBar'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}
