import Layout from "src/components/Layout"
import Link from "next/link"

export default function blog() {
    return (
        <Layout title="My Blog Page">
            <section className="py-20 mt-20">
                <div className="container px-4 mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold lg:text-6xl font-body">My Blog</h1>
                        <h2 className="mt-2 mb-5 text-2xl font-light lg:text-4xl font-display text-primary">Coming Soon</h2>
                        <Link href="/">
                            <a className="inline-block px-4 py-2 text-xl font-bold rounded bg-primary mt-15 font-body text-secondary">Back to Home</a>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
