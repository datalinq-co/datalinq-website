import React, { createElement } from 'react'
import * as iconOutline from '@heroicons/react/outline'

export default function Timeline({ children, ...restprops }) {
    return <div className='py-12 bg-white' {...restprops}>{children}</div>
}

Timeline.Title = ({ children, ...restprops }) => <p className='mt-2 text-3xl text-center font-extrabold text-gray-900 tracking-tight sm:text-4xl' {...restprops}>{children}</p>

Timeline.Subtitle = ({ children, ...restprops }) => <p className='my-5 mb-16 max-w-prose mx-auto text-xl text-gray-500 text-center' {...restprops}>{children}</p>

Timeline.Container = ({ children, ...restprops }) => <div className='max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8' {...restprops}>{children}</div>

Timeline.Frame = ({ classExtra, children, ...restprops }) => <dl className={`space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 ${classExtra}`} {...restprops}>{children}</dl>

Timeline.Line = ({...restprops }) => <div {...restprops}/>

Timeline.Box = ({ divClass = 'relative', children, ...restprops }) => <div className={divClass} {...restprops}>{children}</div>

Timeline.BoxHeader = ({ children, ...restprops }) => <dt className='' {...restprops}>{children}</dt>

Timeline.BoxHeaderIcon = ({ icon }) => <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
    {typeof iconOutline[`${icon}`] === 'undefined' || createElement(iconOutline[`${icon}`],{className: "h-6 w-6"},null)}
</div>

Timeline.BoxTitle = ({ children, ...restprops }) => <p className='mt-5 text-lg leading-6 font-medium text-gray-900' {...restprops}>{children}</p>

Timeline.BoxSubtitle = ({ children, ...restprops }) => <dd className='mt-2 text-base text-gray-500' {...restprops}>{children}</dd>
