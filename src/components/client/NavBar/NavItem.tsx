import { NavItemType } from '@/types/nav'
import Link from 'next/link'
import { MouseEvent } from 'react'

type Props = {
    navItem: NavItemType,
    handleClick: (e: MouseEvent, navItem: NavItemType) => void
}

function NavItem({ navItem, handleClick }: Props) {

    return (
        <Link onClick={(e) => {
            handleClick(e, navItem)
        }} href={navItem.href} id={`nav-${navItem.id}`} className={`nav-item px-4 py-2  font-mono`}>
            {navItem.label}
        </Link>
    )
}

export default NavItem