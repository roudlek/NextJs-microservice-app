// These styles apply to every route in the application
// using global.css file only is enough, it is crucial to make this file in last order so the styles apply
import 'styles/global.css'
 
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}