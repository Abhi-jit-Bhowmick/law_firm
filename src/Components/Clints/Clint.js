import React from 'react'
import "./Clint.css"
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ClintCard from '../Clint_Card/ClintCard';
import { clint } from '../../data/Data';


function Clint() {
    return (
        <div className='clints'>
            <div className='cl'>
                <div className='clints-container'>
                    <div className='clint-heading'>
                        <p>What says our
                            happy Clients
                        </p>
                        <div className='buttons'>
                            <button className='left-arrow button'>
                                <BiLeftArrowAlt className='button-icon' />
                            </button>
                            <button className='right-arrow button'>
                                <BiRightArrowAlt className='button-icon' />
                            </button>
                        </div>
                    </div>
                    <div className='clint-data'>
                        <Swiper
                            className='swiper'
                            modules={[Virtual, Navigation, Pagination]}

                            slidesPerView={3}

                            spaceBetween={10}

                            navigation={{ prevEl: `.left-arrow`, nextEl: `.right-arrow` }}
                            virtual
                        >
                            {
                                clint.map((item, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className='swiper-container'
                                    >
                                        <ClintCard
                                            data={item}
                                        />
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Clint