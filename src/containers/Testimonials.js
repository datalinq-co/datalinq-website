import React, { useContext } from "react";
import Testimonials from "../components/Testimonials";
import { DataContext } from "../animation/Testimonials";

export default function TestimonialsContainer() {
    const data = useContext(DataContext)
    console.log(data)
    return <Testimonials id='testimonials'>
        <Testimonials.Container className='flex justify-evenly'>
            <Testimonials.Frame className="border-4 p-8 rounded-3xl">
                <div className="mx-auto flex justify-between">
                    <img src={data.imageHead1} alt="Hueto" className="mx-auto h-16" />
                </div>
                <Testimonials.Block>
                    <Testimonials.Subtitle>{data.title}</Testimonials.Subtitle>
                    <Testimonials.Footer>
                        <div className="md:flex-shrink-0">
                            <img src={data.imageFoot} alt="Hueto" className="mx-auto h-10 w-10 rounded-full" />
                        </div>
                        <Testimonials.FooterTextWrapper>
                            <div className="text-base font-medium text-gray-900">{data.footerText1}</div>
                            <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 0h3L9 20H6l5-20z" />
                            </svg>
                            <div className="text-base font-medium text-gray-500">{data.footerText2}</div>
                        </Testimonials.FooterTextWrapper>
                    </Testimonials.Footer>
                    <Testimonials.ButtonsContainer>
                        <Testimonials.Button>Read a Case Study</Testimonials.Button>
                    </Testimonials.ButtonsContainer>
                </Testimonials.Block>
            </Testimonials.Frame>
            <Testimonials.Frame className="border-4 p-8 rounded-3xl">
                <div className="mx-auto flex justify-between">
                    <img src={data.imageHead} alt="Hueto" className="mx-auto h-16" />
                </div>
                <Testimonials.Block>
                    <Testimonials.Subtitle>{data.title}</Testimonials.Subtitle>
                    <Testimonials.Footer>
                        <div className="md:flex-shrink-0">
                            <img src={data.imageFoot} alt="Hueto" className="mx-auto h-10 w-10 rounded-full" />
                        </div>
                        <Testimonials.FooterTextWrapper>
                            <div className="text-base font-medium text-gray-900">{data.footerText1}</div>
                            <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 0h3L9 20H6l5-20z" />
                            </svg>
                            <div className="text-base font-medium text-gray-500">{data.footerText2}</div>
                        </Testimonials.FooterTextWrapper>
                    </Testimonials.Footer>
                    <Testimonials.ButtonsContainer>
                        <Testimonials.Button>Read a Case Study</Testimonials.Button>
                    </Testimonials.ButtonsContainer>
                </Testimonials.Block>
            </Testimonials.Frame>
            <Testimonials.Frame className="border-4 p-8 rounded-3xl">
                <div className="mx-auto flex justify-between">
                    <img src={data.imageHead} alt="Hueto" className="mx-auto h-16" />
                </div>
                <Testimonials.Block>
                    <Testimonials.Subtitle>{data.title}</Testimonials.Subtitle>
                    <Testimonials.Footer>
                        <div className="md:flex-shrink-0">
                            <img src={data.imageFoot} alt="Hueto" className="mx-auto h-10 w-10 rounded-full" />
                        </div>
                        <Testimonials.FooterTextWrapper>
                            <div className="text-base font-medium text-gray-900">{data.footerText1}</div>
                            <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 0h3L9 20H6l5-20z" />
                            </svg>
                            <div className="text-base font-medium text-gray-500">{data.footerText2}</div>
                        </Testimonials.FooterTextWrapper>
                    </Testimonials.Footer>
                    <Testimonials.ButtonsContainer>
                        <Testimonials.Button>Read a Case Study</Testimonials.Button>
                    </Testimonials.ButtonsContainer>
                </Testimonials.Block>
            </Testimonials.Frame>
        </Testimonials.Container>
    </Testimonials>
}