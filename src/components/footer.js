import Link from 'next/link'

export default function Footer(){
    let date = new Date().getFullYear();

    return (
        
    <footer
      className="inset-x-0 bottom-0 p-4 text-center">
    <div className="w-3/4 sm:w-2/3 md:w-1/2 mx-auto m-2 pt-0.5 bg-gradient-to-r from-blue-500 to-sky-500 h-1"></div>
      with ♥ - Patar Martua Doli Siahaan
    </footer>
    )
}