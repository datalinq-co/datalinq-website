import React from 'react'
import Homepage from '../components/Homepage'
import homepage from '../../site_cms/homepage.json'

export default function HomepageContainer() {
    const arr = []
    homepage.animatedText.forEach((ele)=>{
        arr.push(ele.text)
        arr.push(1000)
    })
    return (
        <Homepage id='Homepage'>
            <Homepage.Container>
                <Homepage.Frame>
                    <Homepage.CenterFrame>
                        <Homepage.CenterFrameContainer>
                            <Homepage.Text>
                                <Homepage.TitleAnimation dataType={arr} />
                            </Homepage.Text>
                            <Homepage.Text>
                                <Homepage.Subtitle>{homepage.subtitle}</Homepage.Subtitle>
                            </Homepage.Text>
                            <Homepage.Subtext>
                                {homepage.subtext}
                            </Homepage.Subtext>
                            <Homepage.ButtonFrame>
                                <Homepage.Button href={homepage.leftbtnLink} divClass='rounded-md shadow' classButton='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>
                                    {homepage.leftbtn}
                                </Homepage.Button>
                                <Homepage.Button href={homepage.rightbtnLink} divClass='mt-3 sm:mt-0 sm:ml-3' classButton='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'>{homepage.rightbtn}</Homepage.Button>
                            </Homepage.ButtonFrame>
                        </Homepage.CenterFrameContainer>
                    </Homepage.CenterFrame>
                </Homepage.Frame>
            </Homepage.Container>
            <Homepage.ImageWrapper>
                {/* <StaticImage src='../images/agency.jpg' alt='Banner Image' className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'/> */}
                <img src={homepage.image} alt='Banner Image' className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full p-10'/>
            </Homepage.ImageWrapper>
        </Homepage>
    )
}
