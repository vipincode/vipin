import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <div>
           <div className="md:flex md:justify-between md:items-center">
               <div>
                   <Link href="/">
                       <a>
                           <Image src="/img/footer-logo.png" alt="Footer Logo" height={50} width={171} />
                       </a>
                   </Link>
               </div>
               <div className="mt-12 md:mt-0">
                    <a href="/pdf/Vipin-Singh.pdf" download className="block px-8 py-3 m-4 text-xl font-semibold border-2 rounded border-primary text-primary font-body md:inline-block">Download CV</a>
                   <Link href="#contact">
                       <a className="block px-8 py-3 m-4 text-xl font-semibold border-2 rounded border-primary text-primary font-body md:inline-block">Let&#39;s Talk</a>
                   </Link>
               </div>
           </div>
           <div className="flex flex-col items-center justify-between pt-12 md:flex-row md:pt-60">
               <div className="order-last md:order-first">
                   <p className="m-4 font-light text-primary">&copy;{new Date().getFullYear()} allright reserved by vipin singh</p>
               </div>
               <div>
                <div className="md:flex">
                    <Link href="/"><a className="block m-4 font-light text-primary">Home</a></Link>
                    <Link href="/skill"><a className="block m-4 font-light text-primary">Skills</a></Link>
                    <Link href="/work"><a className="block m-4 font-light text-primary">Work</a></Link>
                    <Link href="/contact"><a className="block m-4 font-light text-primary">Contact</a></Link>
                    <Link href="/blog"><a className="block m-4 font-light text-primary">Blog</a></Link>
                </div>
               </div>
           </div>
        </div>
    )
}
