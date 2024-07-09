import { NavItem } from '@/types/nav'
import Link from 'next/link'

type Props = {
    navItem: NavItem
}

function NavItem({ navItem }: Props) {

    return (
        <Link onClick={() => {
            document.querySelector(`#nav-${navItem.id}`)?.classList.add("active")
            document.querySelectorAll(`a:not(#nav-${navItem.id})`)?.forEach(nav => {
                nav.classList.remove("active")
            })
        }} href={navItem.href} id={`nav-${navItem.id}`} className={`nav-item hover:text-white px-4 py-2  font-mono`}>
            {navItem.label}
        </Link>
    )
}

export default NavItem