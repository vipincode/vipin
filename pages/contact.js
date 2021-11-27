import Layout from "src/components/Layout"
import ContactUs from "src/components/ContactUs"

export default function Contact() {
    return (
        <Layout title="Contact Me">
            <section>
                <div className="container mx-auto px-4 py-14">
                    <ContactUs />
                </div>
            </section>
        </Layout>
    )
}
