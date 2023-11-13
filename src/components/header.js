import Link from 'next/link'
import Image from 'next/image'

export default function Header({pageName}){
    return (
    <header className="m-4">
       
    <Image src={"/web_logo.png"} className="m-auto pb-2" width={64} height={64} alt="logo"/>
     
     <h1 className="text-2xl text-center font-bold italic">Patar.dev </h1> 
     {/* <h1 class="animate-text bg-gradient-to-r from-blue-500 via-sky-300 to-white bg-clip-text text-transparent text-2xl text-center font-bold italic">Patar.dev</h1> */}
     <div className="w-3/4 sm:w-2/3 md:w-1/2 mx-auto m-2 pt-0.5 bg-gradient-to-r from-blue-500 to-sky-500 h-1"></div>
     <div className="flex justify-center items-center space-x-1 navbar">
       <Link href="/" className={`py-4 px-2 text-white-500 menu ${pageName == "about" ? "active" : ""}`}>About</Link>
       <Link href="/project" className={`py-4 px-2 text-white-500 menu ${pageName == "project" ? "active" : ""}`}>Project</Link>
       <Link href="/reachme" className={`py-4 px-2 text-white-500 menu ${pageName == "reachme" ? "active" : ""}`}>Reach Me!</Link>
     </div>
   </header>
    )
}