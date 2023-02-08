import Link from "next/link";
import { useRouter } from "next/router";

export interface IProductCreatePageProps {}

export default function ProductCreatePage(props: IProductCreatePageProps) {
    const router = useRouter()
  return (
    <div>
      <h2 className="text-3xl font-bold underline">Product Create Page</h2>
      <button onClick={()=>router.push('/about')}>Go to AboutUs</button>
      <Link href="/about">Go to AboutUs</Link>
    </div>
  );
}
