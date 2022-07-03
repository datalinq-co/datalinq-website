import React from "react";
import Standard from "../components/Standards";
import standards from '../../site_cms/standards.json'

export default function StandardContainer() {
    return <Standard id="standards">
        <Standard.Container>
            <Standard.Tile>{standards.title}</Standard.Tile>
            <Standard.Subtitle>{standards.subtitle}</Standard.Subtitle>
            <Standard.Frame>
                <Standard.FrameGrid>
                    {standards.box.map((ele)=>{
                        return (<Standard.Box>
                            <Standard.BoxIcon icon={ele.icon} />
                            <Standard.BoxTitle>{ele.title}</Standard.BoxTitle>
                            <Standard.BoxSubtitle>{ele.subtitle}</Standard.BoxSubtitle>
                        </Standard.Box>)
                    })}
                </Standard.FrameGrid>
            </Standard.Frame>
        </Standard.Container>
    </Standard>
}