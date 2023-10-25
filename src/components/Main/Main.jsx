import { useEffect } from 'react';
import './main.css';
import {HiOutlineClipboardCheck} from 'react-icons/hi';
import {HiOutlineLocationMarker} from 'react-icons/hi';

import img from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';
import img11 from '../../assets/11.jpg';
import img12 from '../../assets/12.jpg';
import img13 from '../../assets/13.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {
        id:1,
        imgSrc:img,
        destTitle:'Bamian',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    
    {
        id:2,
        imgSrc:img2,
        destTitle:'Badakh_shan',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$800',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    
    {
    
        id:3,
        imgSrc:img3,
        destTitle:'Bamian',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$600',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    
    {
    
        id:4,
        imgSrc:img4,
        destTitle:'Herat',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$900',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    
    {
    
        id:5,
        imgSrc:img5,
        destTitle:'Bamian',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$800',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    
    {
    
        id:6,
        imgSrc:img6,
        destTitle:'Herat',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$600',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    
    {
    
        id:7,
        imgSrc:img7,
        destTitle:'Mazar',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    
    {
    
        id:8,
        imgSrc:img8,
        destTitle:'Bamian',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    
    {
    
        id:9,
        imgSrc:img9,
        destTitle:'Bamian',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    
    
    
    {
    
        id:11,
        imgSrc:img11,
        destTitle:'Bamian',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    {
    
        id:12,
        imgSrc:img12,
        destTitle:'Bamian',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    {
    
        id:13,
        imgSrc:img13,
        destTitle:'Balkh',
        location:'Afghanistan',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt inventore pariatur veritatis dolore, porro fugit, illo minima in, consequuntur nam sapiente placeat ullam dolor qui hic molestiae id voluptate quidem.'
    },
    
    
    ];    

const Main = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

    return ( 
     <section className="main container section">
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Most visited destinations
            </h3>
        </div>

        <div className="secContent grid">

            {
                Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{

                    return(
                        <div key={id} data-aos="fade-up" className="singleDestination">
                           <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                           </div>

                           <div className="cardInfo">
                            <h4 className="destTitle">
                                {destTitle}
                            </h4>
                            <span className="continent flex">
                                <HiOutlineLocationMarker className='icon'/>

                                <span className="name">
                                    {location}
                                </span>
                            </span>

                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+93</small></span>
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className="btn flex">
                                DETAILS <HiOutlineClipboardCheck className='icon'/>
                            </button>
                           </div>
                        </div>
                    )

                })
            }
        </div>
     </section>
     );
}
 
export default Main;