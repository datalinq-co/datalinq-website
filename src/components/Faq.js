import React, { useState, createContext, useContext } from "react"

const ToggleContext = createContext()

export default function Faq({ children }) {
  return (
    <div className="flex">
      <div className="flex flex-col px-20 py-12 m-auto max-w-815px">
        {children}
      </div>
    </div>
  )
}

Faq.Title = ({ children, ...restprops }) => (
  <h2
    className="mt-0 mb-2 text-3xl leading-tight text-center sm:text-4xl lg:text-5xl "
    {...restprops}
  >
    {children}
  </h2>
)

Faq.Item = function Item({ children, ...restprops }) {
  const [toggleShow, setToggleShow] = useState(false)
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <div className="mb-2.5 max-w-full" {...restprops}>
        {children}
      </div>
    </ToggleContext.Provider>
  )
}

Faq.Header = function Header({ children, ...restprops }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)
  return (
    <div
      className="flex justify-between mb-px cursor-pointer text-2xl font-normal px-3.5 py-5 items-center select-none  bg-faqColor text-white rounded-md"
      onClick={() => setToggleShow(toggleShow => !toggleShow)}
      {...restprops}
    >
      {children}
      {toggleShow ? (
        <img
          src="/img/close-slim.png"
          alt="Close"
          className="w-6 brightness-0 invert"
        />
      ) : (
        <img
          src="/img/add.png"
          alt="Open"
          className="w-6 brightness-0 invert"
        />
      )}
    </div>
  )
}
Faq.Body = function Body({ children, ...restprops }) {
  const { toggleShow } = useContext(ToggleContext)
  return toggleShow ? (
    <div
      className="px-3 pb-5 text-base font-normal leading-normal text-white whitespace-pre-wrap transition-all duration-300 select-none max-h-1200px ease-cust-timming bg-faqColor pt-9 rounded-b-md"
      {...restprops}
    >
      {children}
    </div>
  ) : null
}
