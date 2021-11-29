import Image from "next/image"
import Link from "next/link"

export default function Works({works}) {
    return (
        <Link href={works.p_url}>
            <a>
                <div className="mb-5 overflow-hidden border-4 rounded md:mb-0 border-gray">
                    <div className="leading-none origin-center">
                        <Image className="transition-transform duration-500 ease-in-out transform hover:scale-110" src={works.p_image} alt={works.p_title} width={800} height={420} />
                    </div>
                </div>
            </a>
        </Link>
    )
}
