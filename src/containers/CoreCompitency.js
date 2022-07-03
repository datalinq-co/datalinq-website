import React from 'react'
import CoreComp from '../components/CoreCompitency'
import core_comp from '../../site_cms/core_comp.json'

export default function CoreCompContainer(){
    return <CoreComp id='core_competences'>
        <CoreComp.Title>{core_comp.title}</CoreComp.Title>
        <CoreComp.Subtitle>{core_comp.subtitle}</CoreComp.Subtitle>
      <CoreComp.Container>
          {core_comp.box.map((ele)=> {
              return(
                  <CoreComp.Box>
                      <CoreComp.BoxHeader>
                          <CoreComp.BoxIcon icon={ele.icon} />
                          <CoreComp.BoxTitle>{ele.title}</CoreComp.BoxTitle>
                      </CoreComp.BoxHeader>
                      <CoreComp.BoxDesc>{ele.subtitle}</CoreComp.BoxDesc>
                      <CoreComp.BoxList>
                          {ele.list.map((el)=>{
                              return(
                                  <CoreComp.ListItem icon={ele.bullitin}>{el.text}</CoreComp.ListItem>
                              )
                          })}
                      </CoreComp.BoxList>
                      <CoreComp.BoxButton href={ele.link}>{ele.btn}</CoreComp.BoxButton>
                  </CoreComp.Box>
              )
          })}
      </CoreComp.Container>
    </CoreComp>
}
