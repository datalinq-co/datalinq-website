import React from 'react'
import AboutUs from '../components/AboutUs'
import Homepage from '../components/Homepage'
import about_us from '../../site_cms/about_us.json'

export default function AboutUsContainer() {
    return <AboutUs id='about_us'>
        <AboutUs.Container>
            <AboutUs.TitleContainer>
                <AboutUs.Title>
                    {about_us.title}
                </AboutUs.Title>
            </AboutUs.TitleContainer>
            <AboutUs.SubtitleContainer>
                <AboutUs.Subtitle>
                    {about_us.subtitle}
                </AboutUs.Subtitle>
            </AboutUs.SubtitleContainer>
            <AboutUs.Frame>
                <AboutUs.LeftTextboxContainer>
                    <AboutUs.LeftTextbox>
                        <AboutUs.HeaderText>{about_us.subtext}</AboutUs.HeaderText>
                        <AboutUs.List>
                            {about_us.list.map((ele)=>{
                                return <AboutUs.Items icon={about_us.bullitin}>{ele.text}</AboutUs.Items>
                            })}
                        </AboutUs.List>
                    </AboutUs.LeftTextbox>
                    <AboutUs.TextboxFooter>
                        <Homepage.Button href={about_us.btnlink} divClass='rounded-md shadow' classButton='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>{about_us.btntext}</Homepage.Button>
                    </AboutUs.TextboxFooter>
                </AboutUs.LeftTextboxContainer>
                <AboutUs.RightTextboxContainer>
                    <AboutUs.DottedBg/>
                    <AboutUs.RightTextboxBlock>
                        <AboutUs.RightTextboxFrame>
                            <AboutUs.RightTextbox>
                                <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                                    fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path
                                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <AboutUs.RightTextboxText>
                                    {about_us.boxtext}
                                </AboutUs.RightTextboxText>
                            </AboutUs.RightTextbox>
                        </AboutUs.RightTextboxFrame>
                        <AboutUs.RightTextboxFooter>
                            <AboutUs.FooterImage src={about_us.image} />
                            <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                                <p className="text-white font-semibold sm:inline">{about_us.footerText}</p> <br/>
                                    <p className="sm:inline">{about_us.footerSubtext}</p>
                            </span>
                        </AboutUs.RightTextboxFooter>
                    </AboutUs.RightTextboxBlock>
                </AboutUs.RightTextboxContainer>
            </AboutUs.Frame>
        </AboutUs.Container>
    </AboutUs>
}