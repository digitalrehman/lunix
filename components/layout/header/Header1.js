import Link from "next/link"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar, isSearch, handleSearch }) {
    return (
        <>

            <header className={`header-section cmn-fixed py-lg-0 py-6 ${scroll ? "animated fadeInDown header-fixed" : ""}`}>
                <div className="container">
                    <div className="main-navbar">
                        <nav className="navbar-custom">
                            <div className="d-lg-flex flex-xl-nowrap flex-wrap align-items-center justify-content-lg-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link href="/" className="brand-logo">
                                        <img className="w-100" src="/assets/img/logo/logo.png" alt="logo" />
                                    </Link>
                                    <div className="d-flex align-items-center gap-xxl-5 gap-5">
                                        <Link href="/javascript:void(0)" className="search-trigger search-icon d-lg-none d-block">
                                            <i className="fal fa-search" />
                                        </Link>
                                        <button className={`navbar-toggle-btn d-block d-lg-none ${isMobileMenu ? "open" : ""}`} type="button" onClick={handleMobileMenu}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </button>
                                    </div>
                                </div>
                                <div className="navbar-toggle-item" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                                    <Menu />
                                </div>
                                <div className="d-lg-flex d-none d-grid justify-content-center ph-clickwrap align-items-center gap-xxl-7 gap-xl-6 gap-lg-5 gap-3">
                                   
                                    <Link href="/contact" className="d-flex align-items-center gap-sm-3 gap-2 touch-btn cmn-btn">
                                        <span className="rot60">
                                            <i className="fas fa-arrow-up" />
                                        </span>
                                        Get In Touch
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}
