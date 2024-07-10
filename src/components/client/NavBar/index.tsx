"use client"
import { NAVS } from '@/constants/menu'
import React, { useEffect, useRef } from 'react'
import NavItem from './NavItem'

type Props = {}

function NavBar({ }: Props) {

    const navbarRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const handleScroll = (e: any) => {
            const navBarEl = navbarRef?.current;
            if (navBarEl) {
                console.log("window.scrollY", window.scrollY)
                if (window.scrollY >= 150) {
                    if (!navBarEl.classList.contains("clear")) {
                        navBarEl.classList.add("clear")
                    }
                } else {
                    navBarEl.classList.remove("clear")
                }
            }

        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div ref={navbarRef} className="desktop-navbar">
            {
                NAVS.map((nav, index) =>
                    <NavItem
                        key={index}
                        navItem={nav}
                        handleClick={(e, navItem) => {
                            document.querySelector(`#nav-${navItem.id}`)?.classList.add("active")
                            document.querySelectorAll(`a:not(#nav-${navItem.id})`)?.forEach(nav => {
                                nav.classList.remove("active")
                            })
                        }}
                    />
                )
            }
        </div>
    )
}

export default NavBar