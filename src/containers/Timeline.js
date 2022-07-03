import React from 'react'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import timeline from '../../site_cms/timeline.json'

export default function TimelineContainer() {
    return (
        <>
            <Timeline id='timeline'>
                <Timeline.Title>
                    {timeline.title}
                </Timeline.Title>
                <Timeline.Subtitle>{timeline.subtitle}</Timeline.Subtitle>
                <Timeline.Container>
                    <Timeline.Frame>
                        <Timeline.Box>
                            <Timeline.Line className='bg-gray-200 h-4 rounded-full w-4/6 absolute top-5 left-28 hidden lg:block' />
                            <Timeline.BoxHeader>
                                <Timeline.BoxHeaderIcon icon={timeline.t1icon} />
                                <Timeline.BoxTitle>{timeline.t1title}</Timeline.BoxTitle>
                            </Timeline.BoxHeader>
                            <Timeline.BoxSubtitle>{timeline.t1subtitle}</Timeline.BoxSubtitle>
                        </Timeline.Box>
                        <Timeline.Box>
                            <Timeline.Line className='bg-gray-200 h-4 rounded-full w-4/6 absolute top-5 left-28 hidden lg:block' />
                            <Timeline.BoxHeader>
                                <Timeline.BoxHeaderIcon icon={timeline.t2icon} />
                                <Timeline.BoxTitle>{timeline.t2title}</Timeline.BoxTitle>
                            </Timeline.BoxHeader>
                            <Timeline.BoxSubtitle>{timeline.t2subtitle}</Timeline.BoxSubtitle>
                        </Timeline.Box>
                        <Timeline.Box divClass=''>
                            <Timeline.BoxHeader>
                                <Timeline.BoxHeaderIcon icon={timeline.t3ticon} />
                                <Timeline.BoxTitle>{timeline.t3title}</Timeline.BoxTitle>
                            </Timeline.BoxHeader>
                            <Timeline.BoxSubtitle>{timeline.t3subtitle}</Timeline.BoxSubtitle>
                        </Timeline.Box>
                    </Timeline.Frame>
                    <Timeline.Frame classExtra='mt-10 lg:mt-28 lg:grid-flow-row-dense'>
                        <Timeline.Box divClass='relative col-start-3'>
                            <Timeline.Line className='bg-gray-200 h-20 rounded-full w-4 absolute -top-24 left-4 hidden lg:block' />
                            <Timeline.BoxHeader>
                                <Timeline.BoxHeaderIcon icon={timeline.t4icon} />
                                <Timeline.BoxTitle>{timeline.t4title}</Timeline.BoxTitle>
                            </Timeline.BoxHeader>
                            <Timeline.BoxSubtitle>{timeline.t4subtitle}</Timeline.BoxSubtitle>
                        </Timeline.Box>
                        <Timeline.Box divClass='relative col-start-2'>
                            <Timeline.Line className='bg-gray-200 h-4 rounded-full w-4/6 absolute top-5 left-28 hidden lg:block' />
                            <Timeline.BoxHeader>
                                <Timeline.BoxHeaderIcon icon={timeline.t5icon} />
                                <Timeline.BoxTitle>{timeline.t5title}</Timeline.BoxTitle>
                            </Timeline.BoxHeader>
                            <Timeline.BoxSubtitle>{timeline.t5subtitle}</Timeline.BoxSubtitle>
                        </Timeline.Box>
                    </Timeline.Frame>
                    <Timeline.Frame classExtra='mt-10 lg:mt-28'>
                        <div />
                        <Timeline.Box>
                            <Timeline.Line className='bg-gray-200 h-20 rounded-full w-4 absolute -top-24 left-4 hidden lg:block' />
                            <Timeline.BoxHeader>
                                <Timeline.BoxHeaderIcon icon={timeline.t6icon} />
                                <Timeline.BoxTitle>{timeline.t6title}</Timeline.BoxTitle>
                            </Timeline.BoxHeader>
                            <Timeline.BoxSubtitle>{timeline.t6subtitle}</Timeline.BoxSubtitle>
                        </Timeline.Box>
                    </Timeline.Frame>
                </Timeline.Container>
            </Timeline>
        </>
    )
}