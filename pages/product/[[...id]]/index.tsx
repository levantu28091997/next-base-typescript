import { useRouter } from 'next/router'

export default function ProductDetailPage() {
    const router = useRouter()
    console.log(router)
    
    const { id } = router.query
    return 'Product'
}
