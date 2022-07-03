import React, { useEffect, useRef, useState, createContext } from 'react'
import TestimonialsContainer from '../containers/Testimonials'
import testimonials from '../../site_cms/testimonials.json'

export const DataContext = createContext()

export default function TestimonialAnimation() {
    const [slide, setSlide] = useState(0)
    const nextSlide = () => {
        if (slide !== testimonials.list.length - 1) {
            setSlide(prev => prev + 1)
        }
        else {
            setSlide(0)
        }
    }
    const prevSlide = () => {
        if (slide !== 0) {
            setSlide(prev => prev - 1)
        }
        else {
            setSlide(testimonials.list.length - 1)
        }
    }

    const autoPlayRef = useRef();

    useEffect(() => {
        autoPlayRef.current = nextSlide
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }
        const interval = setInterval(play, 10000)
        return () => clearInterval(interval)
    })

    function calcPosition(index) {
        // Move to the right side to prepare for slidein
        if (slide === index - 1 || (index === 0 && slide === testimonials.length - 1)) return 'translate-x-full opacity-0'
        // Move to the left side for slide out effect
        else if (slide !== index) return '-translate-x-full opacity-0'
    }

    return (
        <div className='overflow-hidden max-w-full relative' style={{ height: '512px' }}>
            <div className='flex max-w-full'>
                {testimonials.list.map((ele, index) => (
                    <DataContext.Provider value={ele}>
                        <div className={`${(() => calcPosition(index))()} absolute top-0 left-0 w-full ease-in-out transform transition duration-1000`}>
                            <TestimonialsContainer/>
                        </div>
                    </DataContext.Provider>
                ))}
            </div>
            <div className='flex justify-between absolute top-1/2 -translate-y-1/2 w-full'>
                <button className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-full text-white bg-slate-500 hover:bg-slate-700 ml-5 opacity-50 hover:opacity-75' aria-label='Previous slide' onClick={prevSlide}>{"<"}</button>
                <button className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-full text-white bg-slate-500 hover:bg-slate-700 mr-5 opacity-50 hover:opacity-75' onClick={nextSlide}>{">"}</button>
            </div>
        </div>
    )
}

