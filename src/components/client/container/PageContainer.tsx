"use client"
import { MouseEvent, ReactNode, useEffect, useState } from 'react'
import NavBar from '../NavBar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NAVS } from '@/constants/menu'
import NavItem from '../NavBar/NavItem'

type Props = {
    children: ReactNode,
    className?: string
}

function PageContainer({ children, className = "" }: Props) {
    const [openMobileNav, setOpenMobileNav] = useState(false)

    useEffect(() => {
        const headings = document.querySelectorAll('section h1');


        const ioOptions = {
            threshold: 0.85
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const location = window.location.toString().split('#')[0];
                    const oldHash = window.location.hash;

                    let aEntry: any = entry.target.closest("section")
                    let hash = '#' + aEntry.id;



                    if (aEntry.id == "home") {
                        hash = "";
                        document.querySelector(`#nav-${aEntry.id}`)?.classList.add("active")
                        document.querySelectorAll(`a:not(#nav-${aEntry.id})`)?.forEach(nav => {
                            nav.classList.remove("active")
                        })
                    }

                    if (hash != oldHash) {
                        history.replaceState(null, "", location + hash);
                        document.querySelector(`#nav-${aEntry.id}`)?.classList.add("active")
                        document.querySelectorAll(`a:not(#nav-${aEntry.id})`)?.forEach(nav => {
                            nav.classList.remove("active")
                        })
                    }
                }
            });
        }, ioOptions);

        headings.forEach((ha: any) => {
            observer.observe(ha);
        });
    }, [])

    const clickNavButton = (e: MouseEvent) => {
        setOpenMobileNav(true)
    }

    return (
        <div className={`h-screen ${className}`}>
            <MobileNavButton onClick={clickNavButton} />
            <NavBar />
            <MobileNav
                isOpen={openMobileNav}
                close={() => {
                    setOpenMobileNav(false)
                }}
            />
            {children}
        </div>
    )
}

const MobileNavButton = ({ onClick }: {
    onClick: (e: MouseEvent) => void
}) => {
    return <button onClick={onClick} className="lg:hidden block fixed top-0 left-0 z-20 bg-gray-700 bg-opacity-50 p-2 hover:bg-gray-500">
        <GiHamburgerMenu size={40} />
    </button>
}

const MobileNav = ({
    close,
    isOpen
}: {
    close: () => void,
    isOpen: boolean
}) => {
    if (!isOpen) {
        return null
    }

    return <div onClick={close} className="mobile-nav-wrapper lg:hidden block">
        <div onClick={e => { e.stopPropagation() }} className="mobile-nav-container">
            <div className="relative">
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
                                close()
                            }}
                        />
                    )
                }
            </div>
        </div>
    </div>
}

export default PageContainer