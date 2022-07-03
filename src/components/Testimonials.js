import React from "react";

export default function Testimonials({ children, ...restprops }) {
    return <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24 " {...restprops}>{children}</section>
}

Testimonials.Container = ({ children, ...restprops }) => <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" {...restprops}>{children}</div>

Testimonials.Frame = ({ children, ...restprops }) => <div className="relative" {...restprops}>{children}</div>

Testimonials.Image = ({ ...restprops }) => <img className="mx-auto h-16" {...restprops} />

Testimonials.Block = ({ children, ...restprops }) => <blockquote className="mt-10" {...restprops}>{children}</blockquote>

Testimonials.Subtitle = ({ children, ...restprops }) => <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900" {...restprops}><p>{children}</p></div>

Testimonials.Footer = ({ children, ...restprops }) => <footer className="mt-8">
    <div className="md:flex md:items-center md:justify-center" {...restprops}>{children}
    </div>
</footer>

Testimonials.FooterIcon = ({ ...restprops }) => <div className="md:flex-shrink-0">
    <img className="mx-auto h-10 w-10 rounded-full" {...restprops} />
</div>

Testimonials.FooterTextWrapper = ({ children, ...restprops }) => <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center" {...restprops}>{children}</div>

Testimonials.ButtonsContainer = ({ children, ...restprops }) => <div className="flex justify-between" {...restprops}>{children}</div>

Testimonials.Button = ({ children, ...restprops }) => <a className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium mx-2" href="#" {...restprops}>{children}</a>
