import React from "react";
import Contact from '../components/Contact';
import timeline from '../../site_cms/timeline.json';

export default function ContactContainer() {
    return (
        <>
            <Contact>
                <Contact.Container>
                    <Contact.Header>
                        <Contact.Title>{timeline.footertitle}</Contact.Title>
                        <Contact.Subtitle>{timeline.footersubtitle}</Contact.Subtitle>
                    </Contact.Header>
                    <Contact.ButtonFrame>
                        <Contact.ButtonWrapper>
                            <Contact.Button href={timeline.footerbtnLink}>{timeline.footerbtnText}</Contact.Button>
                        </Contact.ButtonWrapper>
                    </Contact.ButtonFrame>
                </Contact.Container>
            </Contact>
            <Contact.Footer>
                <Contact.FooterContainer>
                    <div className="m-auto w-4/5 max-w-4xl">
                        <div className="flex justify-center gap-3">
                            <a href="#">
                            <Contact.MailIcon/>
                            </a>
                            <a href="#">
                            <Contact.InstaIcon />
                            </a>
                            <a href="#">
                            <Contact.TweetIcon/>
                            </a>
                            <a href="#">
                            <Contact.Discord/>
                            </a>
                        </div>
                    </div>
                    <Contact.FooterLinkFame>
                        {timeline.footerLinks.map((ele) => {
                            return <Contact.FooterLink href="#">{ele.footerLink}</Contact.FooterLink>
                        })}
                    </Contact.FooterLinkFame>
                    <p className="mt-8 text-center text-base text-gray-400">
                        {timeline.footerCopyright}
                    </p>
                </Contact.FooterContainer>
            </Contact.Footer>
            {/* Hello */}
        </>
    )
}