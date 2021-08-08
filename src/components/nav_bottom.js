import { useState, useRef } from 'react'

import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/components/navigation/navigation.min.css';

import sampul from "../asset/nav/sampul.svg"
import mempelai from "../asset/nav/heart.svg"
import acara from "../asset/nav/calendar.svg"
import alamat from "../asset/nav/map.svg"
import gallery from "../asset/nav/gallery.svg"
import prokes from "../asset/nav/prokes.svg"
import ucapan from "../asset/nav/ucapan.svg"
import penutup from "../asset/nav/close.svg"

SwiperCore.use([Navigation]);

const data_nav = [
	{
		id: 1,
		name: "Sampul",
		active: true,
		img: sampul
	},
	{
		id: 2,
		name: "Mempelai",
		active: false,
		img: mempelai
	},
	{
		id: 3,
		name: "Acara",
		active: false, 
		img: acara
	},
	{
		id: 4,
		name: "Lokasi",
		active: false,
		img: alamat
	},
	{
		id: 5,
		name: "Gallery",
		active: false,
		img: gallery
	},
	{
		id: 6,
		name: "Prokes",
		active: false,
		img: prokes
	},
	{
		id: 7,
		name: "Ucapan",
		active: false,
		img: ucapan
	},
	{
		id: 8,
		name: "Penutup",
		active: false,
		img: penutup
	}
]

function NavBottom({ action_nav }) {
    const [dataBtnNav, setDataBtnNav] = useState(data_nav)

	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)

    const handleSlide = (nameSlide, slideId)=>{
        action_nav(nameSlide)
        let copyListDataNav = dataBtnNav.map(val =>({ ...val, active: false})).map((val)=>{
            if (val.id === slideId) {
                val.active = true
            }
            return {...val}
        })
        setDataBtnNav(copyListDataNav)
    }

    return(
        <div className="bg-transparent bottom-0 z-10 inset-x-0 absolute">
            <Swiper
                spaceBetween={0}
				slidesPerView={5}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {
                    dataBtnNav.map(data =>{
                        return(
                            <SwiperSlide key={data.id} className="bg-transparent">
                                <button onClick={()=> handleSlide(data.name, data.id)} className={`h-16 flex flex-col items-center justify-center w-full ${data.active ? "bg-kuning-muda bg-opacity-80" : "bg-white bg-opacity-50"}`}>
                                    <img className="w-6 inline-block" src={data.img} alt="btn-slide"/>
                                    <span className="inline-block tracking-wider font-Quicksand font-semibold text-white text-xs mt-1">{data.name}</span>
                                </button>
                            </SwiperSlide>								
                        )
                    })
                }
				<button ref={navigationPrevRef} className="top-0 h-full w-4 bg-gold bg-opacity-40 absolute z-20">
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" className="bi bi-caret-left" viewBox="0 0 16 16">
						<path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
					</svg>
				</button>
				<button ref={navigationNextRef} className="top-0 h-full right-0 w-4 bg-gold bg-opacity-40 absolute z-20">
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" className="bi bi-caret-right" viewBox="0 0 16 16">
						<path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
					</svg>
				</button>
            </Swiper>
        </div>        
    )
}

export default NavBottom