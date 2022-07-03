import React, { useContext } from "react"
import { ThemeContext } from "../containers/Navbar"
import { Link } from "react-scroll"

export default function Navbar({ children, ...restprops }) {
  const [showBtn] = useContext(ThemeContext)
  return (
    <div
      className={`fixed w-screen top-0 z-30 transition duration-500 ease-in-out ${
        showBtn ? "bg-white" : ""
      }`}
      {...restprops}
    >
      {children}
    </div>
  )
}

Navbar.Frame = function Frame({ children, ...restprops }) {
  return (
    <div className="relative p-6 sm:px-6 lg:px-8" {...restprops}>
      {children}
    </div>
  )
}

Navbar.Container = function Container({ children, ...restprops }) {
  return (
    <nav
      className="relative flex items-center justify-between sm:h-10"
      {...restprops}
    >
      {children}
    </nav>
  )
}

Navbar.ItemsLeft = function ItemsLeft({ children, ...restprops }) {
  return (
    <div className="flex w-full md:w-auto" {...restprops}>
      {children}
    </div>
  )
}

Navbar.IconsContainer = function IconsContainer({ children, ...restprops }) {
  return (
    <div
      className="flex items-center flex-grow flex-shrink-0 w-full lg:flex-grow-0 md:w-auto"
      {...restprops}
    >
      <div class="flex items-center justify-between w-full md:w-auto">
        {children}
      </div>
    </div>
  )
}

Navbar.Logo = function Logo({ link, image, children, ...restprops }) {
  return (
    <a href={link} {...restprops}>
      <span className="sr-only">{children}</span>
      {/* <StaticImage src={`../../static${image}`} alt="Instream-Media" className="w-auto h-6 sm:h-8" width={48.906} height={32}/> */}
      <img src={image} alt="Instream-Media" className="w-auto h-6 sm:h-8" />
    </a>
  )
}

Navbar.NavOptions = function Options({ children, ...restprops }) {
  return (
    <div
      className="hidden md:block md:ml-10 md:pr-4 md:space-x-8"
      {...restprops}
    >
      {children}
    </div>
  )
}

Navbar.TextLinks = function TextLinks({
  link,
  children,
  classExtra = "text-gray-500 ",
  ...restprops
}) {
  return (
    <Link
      to={link}
      className={`font-medium ${classExtra} hover:text-gray-900`}
      spy={true}
      duration={500}
      smooth={true}
      {...restprops}
    >
      {children}
    </Link>
  )
}

Navbar.ItemsRight = function ItemsRight({ children, ...restprops }) {
  const [showBtn] = useContext(ThemeContext)
  // return <div className={`rounded-md shadow transition duration-500 ease-in-out ${showBtn?'':'opacity-0'} hidden md:block`} {...restprops}>{children}</div>
  return (
    <div className="rounded-md shadow md:block" {...restprops}>
      {children}
    </div>
  )
}

Navbar.ButtonLink = function ButtonLink({ children, link, ...restprops }) {
  return (
    <a
      href={link}
      className="items-center justify-center hidden w-full px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md md:flex hover:bg-indigo-700"
      {...restprops}
    >
      {children}
    </a>
  )
}

Navbar.ButtonFlex = function ButtonFlex({ children, ...restprops }) {
  return (
    <div className="flex space-x-2" {...restprops}>
      {children}
    </div>
  )
}

Navbar.ButtonLeft = function ButtonLeft({ children, ...restprops }) {
  return <svg {...restprops}>{children}</svg>
}

Navbar.ButtonPathIcon = function ButtonPathIcon({ ...restprops }) {
  return <path {...restprops} />
}

Navbar.ButtonRight = function ButtonRight({ children, ...restprops }) {
  return <p {...restprops}>{children}</p>
}
