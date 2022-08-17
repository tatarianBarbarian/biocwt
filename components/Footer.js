import Image from 'next/future/image'
import whiteLogo from '@/public/logo-white.svg'
import { FiPhoneCall, FiMapPin } from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer className="bg-slate-400 py-16 shadow">
      <div className="container">
        <div className="flex flex-col items-center justify-between l:flex-row">
          <Image
            src={whiteLogo}
            alt="Logo"
            className="s:mb-11"
          />
          <a
            href="tel:080008008080"
            className="mb-4 inline-flex items-center font-medium"
          >
            <FiPhoneCall className="mr-3 h-[24px] w-[24px] l:h-[39px] l:w-[39px]" />
            +420 000 000 000
          </a>
          <span className="flex items-center">
            <FiMapPin className="mr-3 h-[24px] w-[24px] l:h-[39px] l:w-[39px]" />
            <p className="font-medium">
              Na Plzeňce 1166/0 <br /> 150 00
            </p>
          </span>
        </div>
        <a
          className="mt-14 inline-block s:block s:text-center"
          href="#"
        >
          Privacy policy
        </a>
      </div>
    </footer>
  )
}
