"use client"
import { NAVS } from '@/constants/menu'
import React from 'react'
import NavItem from './NavItem'

type Props = {}

function NavBar({ }: Props) {
    return (
        <div className="fixed hidden lg:flex z-10 top-0 items-center w-full justify-center text-gray-700">
            {
                NAVS.map((nav, index) =>
                    <NavItem key={index} navItem={nav} />
                )
            }
        </div>
    )
}

export default NavBar