'use client'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Menu() {
    // const pathname = usePathname()
    // const [currentMenuItem, setCurrentMenuItem] = useState("")

    // useEffect(() => {
    //     setCurrentMenuItem(pathname)
    // }, [pathname])

    // const checkCurrentMenuItem = (path) => currentMenuItem === path ? "active" : ""
    // const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "active" : ""
    const [isAccordion, setIsAccordion] = useState(0)

    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            <ul className="custom-nav d-lg-flex d-grid gap-xxl-10 gap-xl-8 gap-lg-5 gap-md-2 gap-2 pt-lg-0 pt-5">
                <li className="menu-item position-relative">
                    <Link href="/" className="fw_500 white-clr">Home</Link>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/about" className="fw_500 white-clr">About</Link>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative  ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(3)}>
                        Protfolio
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
                        <li className="menu-link py-1">
                            <Link href="/study-grid" className="fw_500 white-clr">Case Study</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/study-details" className="fw_500 white-clr">Case Study Details</Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative  ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(4)}>
                        Blog
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
                        <li className="menu-link py-1">
                            <Link href="/blog-grid" className="fw_500 white-clr">Blog Grid</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/blog-list" className="fw_500 white-clr">Blog List</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/blog-details" className="fw_500 white-clr">Blog Details</Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative  ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(5)}>
                        Services
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
                        <li className="menu-link py-1">
                            <Link href="/service" className="fw_500 white-clr">Service</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/service-details" className="fw_500 white-clr">Service Details</Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/contact" className="fw_500">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </>
    )
}

