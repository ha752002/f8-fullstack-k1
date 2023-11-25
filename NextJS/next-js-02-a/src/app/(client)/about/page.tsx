import Link from "next/link";

const About = () => {
    return (
        <div>
            <h1>gioi thieu</h1>
            <Link href="/abou/[slug]" as={"about/abc"}>Link</Link>
        </div>
    );
};

export default About;