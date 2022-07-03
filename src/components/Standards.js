import React, { createElement } from 'react'
import * as iconOutline from '@heroicons/react/outline'

export default function Standard({ children, ...restprops }) {
    return <div className='relative bg-white py-16 sm:py-24 lg:py-32' {...restprops}>{children}</div>
}

Standard.Container = ({ children, ...restprops }) => <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl' {...restprops}>{children}</div>

Standard.Tile = ({ children, ...restprops }) => <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl' {...restprops}>{children}</p>

Standard.Subtitle = ({ children, ...restprops }) => <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500' {...restprops}>{children}</p>

Standard.Frame = ({ children, ...restprops }) => <div className='mt-12' {...restprops}>{children}</div>

Standard.FrameGrid = ({ children, ...restprops }) => <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3' {...restprops}>{children}</div>

Standard.Box = ({ children, ...restprops }) => <div className='pt-6'>
    <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8" {...restprops}>
        <div class="-mt-6">{children}</div>
    </div>
</div>

Standard.BoxIcon = ({ icon }) => <div>
    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
        {typeof iconOutline[`${icon}`] === 'undefined' || createElement(iconOutline[`${icon}`],{className:"h-6 w-6 text-white"},null)}
    </span></div>

Standard.BoxTitle = ({ children, ...restprops }) => <h3 className='mt-8 text-2xl font-medium text-gray-900 tracking-tight' {...restprops}>{children}</h3>

Standard.BoxSubtitle = ({ children, ...restprops }) => <p className='mt-5 text-base text-gray-500' {...restprops}>{children}</p>

