import React, { createElement } from 'react'
import * as iconOutline from '@heroicons/react/outline'

export default function CoreComp({ children, ...restprops }) {
    return <section className='max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8'{...restprops}>{children}</section>
}

CoreComp.Container = ({ children, ...restprops }) => <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8" {...restprops}>{children}</div>

CoreComp.Title = ({ children, ...restprops }) => <h3 className="text-3xl font-extrabold text-center text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-3xl" {...restprops}>{children}</h3>

CoreComp.Subtitle = ({ children, ...restprops }) => <p className="mt-6 mx-16 lg:mx-32 text-lg text-gray-500 text-center" {...restprops}>{children}</p>

CoreComp.Box = ({ children, ...restprops }) => <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between" {...restprops}>{children}</div>

CoreComp.BoxHeader = ({ children, ...restprops }) => <div className="flex" {...restprops}>{children}</div>

CoreComp.BoxIcon = ({ icon, ...restprops }) => typeof iconOutline[`${icon}`] === 'undefined' || createElement(iconOutline[`${icon}`],{className: "h-6 w-6 mx-2"}, null)
CoreComp.BoxTitle = ({ children, ...restprops }) => <h3 className="text-xl font-semibold text-gray-900" {...restprops}>{children}</h3>

CoreComp.BoxDesc = ({ children, ...restprops }) => <p className="mt-6 text-gray-500" {...restprops}>{children}</p>

CoreComp.BoxList = ({ children, ...restprops }) => <div className='flex flex-col justify-end' {...restprops}>
    <ul role='list' className='mt-6 space-y-6'>{children}</ul>
</div>

CoreComp.ListItem = ({ children, icon }) => <li class="flex">
    {typeof iconOutline[`${icon}`] === 'undefined' || createElement(iconOutline[`${icon}`],{className:"flex-shrink-0 w-6 h-6 text-indigo-500"},null)}
    <span class="ml-3 text-gray-500">{children}</span>
</li>

CoreComp.BoxButton = ({children, ...restprops}) => <a
class="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium" {...restprops}>{children}</a>