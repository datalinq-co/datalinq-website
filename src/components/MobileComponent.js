import React, { useContext } from "react"
import { ThemeContext } from "../containers/Navbar"

export default function MobileMenu({ children, ...restprops }) {
  return (
    <div className="-mr-2 flex items-center md:hidden" {...restprops}>
      {children}
    </div>
  )
}

MobileMenu.Button = function Button({ children, ...restprops }) {
  return (
    <button
      type="button"
      className="00 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-inbg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-1digo-500"
      aria-expanded="false"
      {...restprops}
    >
      <span className="sr-only">Open Main Menu</span>
      {children}
    </button>
  )
}

MobileMenu.OptionIcon = function OptionIcon({ children, ...restprops }) {
  return (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
      {...restprops}
    >
      {children}
    </svg>
  )
}

MobileMenu.OptionIconPath = function OptionIconPath({ ...restprops }) {
  return (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
      {...restprops}
    />
  )
}

MobileMenu.OptionMenuContainer = function OptionMenuContainer({
  children,
  ...restprops
}) {
  return (
    <div
      className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      {...restprops}
    >
      {children}
    </div>
  )
}

MobileMenu.OptionMenu = function OptionMenu({ children, ...restprops }) {
  const [, showMenu] = useContext(ThemeContext)
  return (
    <div
      className={`rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden ${
        showMenu ? "" : "hidden"
      }`}
      {...restprops}
    >
      {children}
    </div>
  )
}

MobileMenu.OptionHeader = function OptionHeader({ children, ...restprops }) {
  return (
    <div className="px-5 pt-4 flex items-center justify-between" {...restprops}>
      {children}
    </div>
  )
}

MobileMenu.OptionLogo = function OptionLogo({ src, alt, ...restprops }) {
  return (
    <div>
      <img src={src} alt={alt} className="h-6 w-auto" {...restprops} />
      {/* <StaticImage src="../images/Logo.png" alt="Instream-Media" className='h-6 w-auto' width={36} height={24}/> */}
    </div>
  )
}

MobileMenu.OptionCloseIcon = function OptionCloseIcon({ ...restprops }) {
  const [, showMenu] = useContext(ThemeContext)
  return (
    <div className="-mr-2">
      <button
        className={`bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ${
          showMenu ? "" : "hidden"
        }`}
        type="button"
        {...restprops}
      >
        <span className="sr-only">Close main menu</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )
}

MobileMenu.OptionContainer = function OptionContainer({
  children,
  ...restprops
}) {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1" {...restprops}>
      {children}
    </div>
  )
}
