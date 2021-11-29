import Link from 'next/link'
import Image from 'next/image'

export default function Hamburger() {
    return (
        <div className="fixed top-0 left-0 z-10 h-full px-8 py-8 bg-secondary w-72">
            <div className="mb-4">
                <Image src="/img/footer-logo.png" alt="Mobile log" width={171} height={50} />
            </div>
            <div>
                <Link href="/">
                    <a className="block py-3 text-2xl uppercase font-display">Home</a>
                </Link>
                <Link href="/skill">
                    <a className="block py-3 text-2xl uppercase font-display">Skills</a>
                </Link>
                <Link href="/work">
                    <a className="block py-3 text-2xl uppercase font-display">Work</a>
                </Link>
                <Link href="/contact">
                    <a className="block py-3 text-2xl uppercase font-display">Contact</a>
                </Link>
                <Link href="/blog">
                    <a className="block py-3 text-2xl uppercase font-display">Blog</a>
                </Link>
            </div>
            <div>
                <a href="/pdf/Vipin-Singh.pdf" download className="block px-6 py-3 mt-24 text-xl font-medium text-center rounded-md bg-primary text-secondary">Download CV</a>
            </div>
        </div>
    )
}
