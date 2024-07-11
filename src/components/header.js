import Link from 'next/link'

export default function Header({pageName}){
    const menuBar = () => {
      return <>
       <li><Link href="/" className={`${pageName == "about" ? "active bg-gradient-to-r from-pink-500 to-yellow-500 font-bold" : ""}`}><span className="text-white">About</span></Link></li>
        <li><Link href="/project" className={`${pageName == "project" ? "active bg-gradient-to-r from-pink-500 to-yellow-500 font-bold" : ""}`}><span className="text-white">Project</span></Link></li>
        <li><Link href="/reachme" className={`${pageName == "contact" ? "active bg-gradient-to-r from-pink-500 to-yellow-500 font-bold" : ""}`}><span className="text-white">Contact</span></Link></li>
      </>
    }

    return (
    <header className="">
       
    {/* <Image src={"/web_logo.png"} className="m-auto pb-2" width={64} height={64} alt="logo"/> */}
     
     {/* <h1 className="text-2xl text-center font-bold italic">Patar.dev </h1>  */}
     {/* <h1 class="animate-text bg-gradient-to-r from-blue-500 via-sky-300 to-white bg-clip-text text-transparent text-2xl text-center font-bold italic">Patar.dev</h1> */}
     {/* <div className="w-3/4 sm:w-2/3 md:w-1/2 mx-auto m-2 pt-0.5 bg-gradient-to-r from-blue-500 to-sky-500 h-1"></div>
     <div className="flex justify-center items-center space-x-1 navbar">
       <Link href="/" className={`py-4 px-2 text-white-500 menu ${pageName == "about" ? "active" : ""}`}>About</Link>
       <Link href="/project" className={`py-4 px-2 text-white-500 menu ${pageName == "project" ? "active" : ""}`}>Project</Link>
       <Link href="/reachme" className={`py-4 px-2 text-white-500 menu ${pageName == "reachme" ? "active" : ""}`}>Reach Me!</Link>
     </div> */}
     <div className="navbar w-100 md:w-2/3 m-auto border-b border-b-4 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={10}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow relative">
        {menuBar()}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl italic">patar.dev</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuBar()}
    </ul>
  </div>
</div>
   </header>
    )
}