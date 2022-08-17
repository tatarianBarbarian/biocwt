import Image from 'next/future/image'
import whiteLogo from '@/public/logo-white.svg'
import styles from 'styles/Header.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import ClientOnlyPortal from './ClientOnlyPortal'
import React from 'react'
import { FiX } from 'react-icons/fi'

const MenuIcon = () => {
  return (
    <svg
      width="23"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="#F5F5F5"
        strokeWidth="3"
        strokeLinecap="round"
        d="M1.5 7.5h20m-8 6h8m-20-12h8"
      />
    </svg>
  )
}

const MobileNav = ({ isOpen, onClose }) => {
  const cls = clsx(
    { hidden: !isOpen },
    'fixed',
    'left-0',
    'top-0',
    'bottom-0',
    'right-0',
    'z-[2]',
    'bg-slate-400/75'
  )
  const itemCls = clsx(['mb-6', 'text-m'])

  React.useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <ClientOnlyPortal selector="#mobile_nav">
      <div className={cls}>
        <div className="relative py-8">
          <nav className="flex flex-col items-center">
            <Link href="/gallery">
              <a
                className={itemCls}
                onClick={onClose}
              >
                Gallery
              </a>
            </Link>
            <Link href="/prices">
              <a
                className={itemCls}
                onClick={onClose}
              >
                Prices for services
              </a>
            </Link>
            <Link href="/about">
              <a
                className={itemCls}
                onClick={onClose}
              >
                About us
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={itemCls}
                onClick={onClose}
              >
                Contact
              </a>
            </Link>
          </nav>
          <button
            className="absolute right-3 top-3"
            onClick={() => onClose()}
          >
            <FiX className="h-[39px] w-[39px]" />
          </button>
        </div>
      </div>
    </ClientOnlyPortal>
  )
}

export const Header = ({ variant = 'standard' }) => {
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false)
  const cls = clsx(
    {
      'relative z-[1]': variant === 'opaque',
      'bg-slate-500 rounded-b-[30px] l:rounded-b-[79px] shadow-[0px_-8px_52px_rgba(245,245,245,0.17)]':
        variant === 'standard',
    },
    'py-10',
    'font-nav',
    'l:py-12'
  )

  return (
    <header className={cls}>
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <a>
            <Image
              src={whiteLogo}
              alt="Bio CWT company logo"
              className="w-[85px] l:w-[197px]"
            />
          </a>
        </Link>
        <div className="hidden l:block">
          <Link href="/gallery">
            <a className={styles['nav-link']}>Gallery</a>
          </Link>
          <Link href="/prices">
            <a className={styles['nav-link']}>Prices for services</a>
          </Link>
          <Link href="/about">
            <a className={styles['nav-link']}>About us</a>
          </Link>
          <Link href="/contact">
            <a className={styles['nav-link']}>Contact</a>
          </Link>
        </div>
        <button
          className="l:hidden"
          aria-label="Open menu"
          onClick={() => setMobileNavOpen(true)}
        >
          <MenuIcon />
        </button>
      </nav>
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </header>
  )
}
