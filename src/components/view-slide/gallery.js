import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from "framer-motion"
import kembangSatu from  '../../asset/kembang-tebu-1.svg'
import kembangDua from  '../../asset/kembang-tebu-2.svg'

const img_name = ['pexels-1.jpg', 'pexels-2.jpg', 'pexels-3.jpg', 'pexels-4.jpg', 'pexels-5.jpg', 'pexels-6.jpg', 'pexels-7.jpg', 'pexels-8.jpg']
const URI_img = 'https://api-wedding-sugidev.herokuapp.com/static/prewed'

function Gallery(params) {
    const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)

    const [currentImg, setCurrentImg] = useState(img_name[0])
    
    return(
        <div className="w-full" style={{height: 'calc(100% - 4rem)'}}>
            <motion.img 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .8, delay: .2 }} 
                className="inline-block absolute -z-10 top-0 right-0" src={kembangSatu} alt="satus"/>
            <motion.img 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .8, delay: .2 }} 
                className="inline-block absolute -z-10 bottom-0 left-0" src={kembangDua} alt="aa"/>
             <div className="w-full h-full flex flex-col justify-center items-center">
              <h2 className="font-DancingScript text-kuning-tua text-4xl font-bold">Gallery Photo</h2>
              <img className="block w-64 mt-6 rounded-md border-8 shadow-xl border-kuning-muda" src={`${URI_img}/${currentImg}`} alt="ibra"/>
              <div className="w-full mt-5 bg-kuning-muda bg-opacity-70">
                <Swiper
                    spaceBetween={8}
                    slidesPerView={3}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            img_name.map((img, idx)=>{
                                return(
                                    <SwiperSlide key={idx}>
                                        <button onClick={()=> setCurrentImg(img)} className="w-full h-24 my-2">
                                            <img className="inline-block rounded border-4 w-full" src={`${URI_img}/${img}`} alt="sa"/>
                                        </button>
                                    </SwiperSlide>                                    
                                )
                            })
                        }
                    <button ref={navigationPrevRef} className="top-0 h-full w-6 bg-gold bg-opacity-40 absolute z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className="bi bi-caret-left" viewBox="0 0 16 16">
                            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                        </svg>
                    </button>
                    <button ref={navigationNextRef} className="top-0 h-full right-0 w-6 bg-gold bg-opacity-40 absolute z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className="bi bi-caret-right" viewBox="0 0 16 16">
                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
                    </button>
                </Swiper>                  
              </div>
            </div>
            <div className="absolute h-16 bottom-0 inset-x-0 bg-black bg-opacity-70"></div>
        </div>
    )
}

export default Gallery