import React, { useState, createContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import MobileMenu from '../components/MobileComponent';
import navbar from '../../site_cms/navbar.json'

export const ThemeContext = createContext()

export default function NavbarContainer() {
    const [showBtn, setShowBtn] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const showOnScroll = () => {
        window.scrollY > 40 ? setShowBtn(true) : setShowBtn(false)
    }
    useEffect(() => {
        typeof window !== undefined && window.addEventListener('scroll', showOnScroll)
    }, []);
    return (
        <ThemeContext.Provider value={[showBtn, showMenu]}>
            <Navbar id='navbar'>
                <Navbar.Frame>
                    <Navbar.Container>
                        <Navbar.ItemsLeft>
                            <Navbar.IconsContainer>
                                <Navbar.Logo link='#Homepage' image={navbar.logo}>Instream Media</Navbar.Logo>
                                <MobileMenu>
                                    <MobileMenu.Button onClick={() => setShowMenu(!showMenu)}>
                                        <MobileMenu.OptionIcon>
                                            <MobileMenu.OptionIconPath />
                                        </MobileMenu.OptionIcon>
                                    </MobileMenu.Button>
                                </MobileMenu>
                            </Navbar.IconsContainer>
                        </Navbar.ItemsLeft>
                        <Navbar.NavOptions>
                                {navbar.navopts.map((ele) => {
                                    return <Navbar.TextLinks link={ele.link} style={{cursor: "pointer"}}>{ele.title}</Navbar.TextLinks>
                                })}
                            </Navbar.NavOptions>
                        <Navbar.ItemsRight>
                            <Navbar.ButtonLink link={navbar.btnLink}>
                                <Navbar.ButtonFlex>
                                    <Navbar.ButtonLeft xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <Navbar.ButtonPathIcon strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </Navbar.ButtonLeft>
                                    <Navbar.ButtonRight>{navbar.btnText}</Navbar.ButtonRight>
                                </Navbar.ButtonFlex>
                            </Navbar.ButtonLink>
                        </Navbar.ItemsRight>
                    </Navbar.Container>
                </Navbar.Frame>
                <MobileMenu.OptionMenuContainer>
                    <MobileMenu.OptionMenu>
                        <MobileMenu.OptionHeader>
                            <MobileMenu.OptionLogo src='/Logo.png' alt='Instream-Media' />
                            <MobileMenu.OptionCloseIcon onClick={() => setShowMenu(!showMenu)} />
                        </MobileMenu.OptionHeader>
                        <MobileMenu.OptionContainer>
                            {navbar.navopts.map((ele) => {
                                return <Navbar.TextLinks link={ele.link} classExtra='block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-50'>{ele.title}</Navbar.TextLinks>
                            })}
                        </MobileMenu.OptionContainer>
                        <a href={navbar.btnLink} class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                            {navbar.btnText}
                        </a>
                    </MobileMenu.OptionMenu>
                </MobileMenu.OptionMenuContainer>
            </Navbar>
        </ThemeContext.Provider>
    )
}
