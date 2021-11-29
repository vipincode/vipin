import Link from 'next/link'
import Image from 'next/image'

export default function WorkCard({workList}) {
    return (
        <div className="mb-4 overflow-hidden border-4 rounded border-gray md:mb-0">
            <Link href={workList.p_url}>
                <a className="overflow-hidden origin-center">
                    <Image src={workList.p_image} alt={workList.p_itle} height={420} width={700} className="transition-transform duration-500 ease-in-out transform hover:scale-110" />
                </a>
            </Link>
            <div className="p-4">
                <div>
                    <span className="block text-xs text-secondary font-body">{workList.p_language}</span>
                </div>
                <Link href={workList.p_url}>
                    <a className="block mb-2 text-xl font-medium text-black font-body">{workList.p_name}</a>
                </Link>
                <p className="text-sm font-light leading-7 leading-2 font-body">{workList.p_description}</p>
                <div className="mt-5">
                    <Link href={workList.p_url}>
                        <a className="px-4 py-2 text-base font-medium rounded bg-primary text-secondary">Visit Website</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
