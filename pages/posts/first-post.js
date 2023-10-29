import Navbar from "components/Navbar/Navbar";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";


export default function FirstPost(){
    return (
      
        <>
        <Head>
            <title>first post</title>
            <link rel="icon" href="public/favicon.ico" />
        </Head>
        {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
                <style jsx>{`
        h2 {
          color: red;
          font-size: 40px;
        }
      `}</style>
        <Navbar/>
        <h1 style={{color:'blue', fontSize:60,backgroundColor:'yellow',width:'50%',textAlign:'center', fontFamily:'monospace'}}>
            First Post
        </h1>

        <h2> My Journey with Next.js: Building My First Web App</h2>



        <p>I'm excited to share my experience with building my very first web app using Next.js. 🚀

        Next.js, a popular React framework, has made the development process a breeze. With features like server-side rendering, routing, and optimized performance, I was able to create a fast and responsive web app that meets modern standards.

        The development journey was both challenging and rewarding. I learned how to structure my app, manage routes, and make use of components to create a seamless user experience.

        One of the standout features of Next.js is its automatic code splitting and lazy loading, ensuring that the app loads quickly, even on slower connections.

        Stay tuned for more updates on my progress as I continue to explore the world of Next.js. If you're considering building your own web app, Next.js is a fantastic choice to get started. 🌐

        #NextJS #WebDevelopment #React #MyFirstApp #TechJourney
        </p> 
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
        </>
    )
}