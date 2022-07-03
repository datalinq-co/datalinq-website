import React from 'react'
import Typical from 'react-typical'

export default function Homepage({ children, ...restprops }) {
    return <div className='relative bg-white h-screen' {...restprops}>
        {children}
    </div>
}

Homepage.Container = ({ children, ...restprops }) => <div className='max-w-7xl mx-auto h-full' {...restprops}>
    {children}
</div>

Homepage.Frame = ({ children, ...restprops }) => <div className='relative z-10 pb-8 bg-white pt-20 h-full sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 flex items-center' {...restprops}>{children}</div>

Homepage.CenterFrame = ({ children, ...restprops }) => <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20' {...restprops}>{children}</main>

Homepage.CenterFrameContainer = ({ children, ...restprops }) => <div className='sm:text-center lg:text-left' {...restprops}>{children}</div>

Homepage.Text = ({ children, ...restprops }) => <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl' {...restprops}>{children}</h1>


Homepage.TitleAnimation = ({ dataType, dataPeriod = 2000, ...restprops }) => {
    
    return <span className='block xl:inline' {...restprops}>
        <Typical loop={Infinity} steps={dataType}/>
    </span>
}

Homepage.Subtitle = ({ children, ...restprops }) => <span className='block text-indigo-600 xl:inline' {...restprops}>{children}</span>

Homepage.Subtext = ({children, ...restprops}) => <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 z-20' {...restprops}>{children}</p>

Homepage.ButtonFrame = ({children, ...restprops}) => <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start' {...restprops}>{children}</div>
// Homepage.ButtonFrame = ({children, ...restprops}) => <div className='' {...restprops}>{children}</div>

Homepage.Button = ({classButton, divClass, children, ...restprops}) => <div className={divClass}>
    <a className={classButton} {...restprops}>{children}</a>
</div>

Homepage.ImageWrapper = ({children, ...restprops}) => <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2' {...restprops}>{children}</div>