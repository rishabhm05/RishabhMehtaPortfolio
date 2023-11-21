'useclient'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdWork } from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';
import { Experience } from '@/utils/utils';
const Organization =()=>{
return( 
<div id="Experience" className="my-[150px] ">
<p className="text-center font-bold text-2xl">Experience</p>
<VerticalTimeline>
    {Experience.map((experience)=>{
        return(
<VerticalTimelineElement
   key={experience.Company}
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1b1b1e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #1b1b1e' }}
    date={experience.time}
    iconStyle={{ background: '#1b1b1e', color: '#fff' }} 
    icon={<MdWork />}
  >
    <h1 className='font-bold'>{experience.heading.toUpperCase()}</h1>
    <p>{experience.work}</p>
    <p>{experience.techstack}</p>
    </VerticalTimelineElement>
        )
    })}
  
  </VerticalTimeline>
</div>
)
}
export default Organization