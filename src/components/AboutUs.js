import React, { createElement } from 'react'
import * as iconsOutline from '@heroicons/react/outline'


export default function AboutUs({ children, ...restprops }) {
    return <div className='py-16 bg-gray-50 overflow-hidden' {...restprops}>{children}</div>
}

AboutUs.Container = ({ children, ...restprops }) => <div className='max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8' {...restprops}>{children}</div>

AboutUs.TitleContainer = ({ children, ...restprops }) => <div className='text-base max-w-prose mx-auto lg:max-w-none' {...restprops}>{children}</div>

AboutUs.Title = ({ children, ...restprops }) => <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl' {...restprops}>{children}</p>

AboutUs.SubtitleContainer = ({ children, ...restprops }) => <div className='relative z-10 max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72' {...restprops}>{children}</div>

AboutUs.Subtitle = ({ children, ...restprops }) => <p className='text-base text-gray-500 italic' {...restprops}>{children}</p>

AboutUs.Frame = ({ children, ...restprops }) => <div className='lg:grid lg:grid-cols-5 lg:gap-8 lg:items-start' {...restprops}>{children}</div>

AboutUs.LeftTextboxContainer = ({ children, ...restprops }) => <div className='relative z-10 lg:col-span-3' {...restprops}>{children}</div>

AboutUs.LeftTextbox = ({ children, ...restprops }) => <div className='prose prose-indigo text-gray-500 mx-auto lg:max-w-none text-lg' {...restprops}>{children}</div>

AboutUs.HeaderText = ({ children, ...restprops }) => <p className='mb-4' {...restprops}>{children}</p>

AboutUs.List = ({ children, ...restprops }) => <ul className='text-base flex flex-col space-y-4' role='list' {...restprops}>{children}</ul>

AboutUs.Items = ({ icon,children, ...restprops }) => {
    return (
        <li className='flex' {...restprops}>
            {typeof iconsOutline[`${icon}`] === 'undefined' || createElement(iconsOutline[`${icon}`],{className:"h-6 w-6 flex-shrink-0 mr-2 text-indigo-500"},null)}
            <p>{children}</p>
        </li>
    )
}
AboutUs.TextboxFooter = ({ children, ...restprops }) => <div className='mt-10 text-base max-w-prose mx-auto lg:max-w-none hidden lg:flex' {...restprops}>{children}</div>

AboutUs.RightTextboxContainer = ({ children, ...restprops }) => <div className='mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none lg:col-span-2' {...restprops}>{children}</div>

AboutUs.RightTextboxBlock = ({ children, ...restprops }) => <blockquote className='relative bg-white rounded-lg shadow-lg' {...restprops}>{children}</blockquote>

AboutUs.RightTextboxFrame = ({ children, ...restprops }) => <div className='rounded-t-lg px-6 py-4 sm:px-10' {...restprops}>{children}</div>

AboutUs.RightTextbox = ({ children, ...restprops }) => <div className='relative text-lg text-gray-700 font-medium mt-8' {...restprops}>{children}</div>

AboutUs.RightTextboxText = ({ children, ...restprops }) => <p className='relative' {...restprops}>{children}</p>

AboutUs.RightTextboxFooter = ({ children, ...restprops }) => <cite className='relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10' {...restprops}>{children}</cite>

AboutUs.FooterImage = ({ src,...restprops }) => <div
    className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
    <img className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300" alt="Sandro Image"  src={src} {...restprops} />
    {/* <StaticImage src="../images/sandro_avatar.jpg" alt="Sandro Image" className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300" /> */}
</div>

AboutUs.DottedBg = () => <svg
    className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
    width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
    <defs>
        <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
    </defs>
    <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
</svg>


