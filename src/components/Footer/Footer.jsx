import { useEffect } from 'react';
import './footer.css';

import img from '../../assets/8.jpg';
import { FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);

    return ( 
        <section className="footer">
            <div className="imgDiv">
                <img src={img} alt="img" />
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCK</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className="btn flex" type='submit'>
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon"/> TravelAf.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident obcaecati nostrum veritatis cum molestias deleniti porro reiciendis fugiat libero pariatur nisi expedita ea earum cupiditate tempore esse, repudiandae animi.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                        <AiOutlineTwitter className="icon"/> 
                        <AiFillYoutube className="icon"/> 
                        <AiFillInstagram className="icon"/> 
                        <FaTripadvisor className="icon"/> 

                        </div>

                    </div>

                    <div className="footerLinks grid">
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Payment
                            </li>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Hotels
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 TripAdvisor
                            </li>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Kabul
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Herat
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Bamian
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Mazar
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                 Kandahar
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED  -  2023</small>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;