import Link from 'next/link'
export interface IAboutPageProps {
}

export default function AboutPage (props: IAboutPageProps) {
    return (
        <>
            <div>About us</div>
            <Link href="/product/create">Go to AboutUs</Link>
    
        </>
    )
}

AboutPage.layout = 'auth'
