import { motion } from "framer-motion"
import hands from "../../asset/prokes/hands-wash.svg"
import mask from "../../asset/prokes/mask.svg"
import people from "../../asset/prokes/people-arrows.svg"
import temperature from "../../asset/prokes/temperature.svg"

import kembangSatu from  '../../asset/kembang-tebu-1.svg'
import kembangDua from  '../../asset/kembang-tebu-2.svg'

function Prokes(params) {
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
                <div className="w-full h-full flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold font-Quicksand text-kuning-tua">Protokol Kesehatan Covid-19</h2>
                <span className="block h-1 w-48 my-4 bg-coklat-muda rounded"></span>
                <p className="text-center text-kuning-tua text-sm font-Quicksand">Acara ini akan diselenggarakan dengan mematuhi protokol pencegahan penyebaran COVID-19.</p>
                <div className="w-full my-3 font-Quicksand flex justify-center items-center">
                    <img className="w-16 inline-block" src={mask} alt="klo"/>
                    <p className="ml-4 text-xs text-kuning-tua font-semibold">Tamu undangan menggunakan masker.</p>
                </div>
                <div className="w-full my-3 font-Quicksand flex justify-center items-center">
                    <p className="mr-4 text-xs text-kuning-tua font-semibold">Cuci tangan menggunakan air dengan sabun.</p>
                    <img className="w-16 inline-block" src={hands} alt="klo"/>
                </div>
                <div className="w-full my-3 font-Quicksand flex justify-center items-center">
                    <img className="w-16 inline-block" src={people} alt="klo"/>
                    <p className="ml-4 text-xs text-kuning-tua font-semibold">Jaga jarak antar orang sekitar 2 meter.</p>
                </div>
                <div className="w-full my-3 font-Quicksand flex justify-center items-center">
                    <p className="mr-4 text-xs text-kuning-tua font-semibold">Suhu tubuh normal
(dibawah 37,5°C).</p>
                    <img className="w-16 inline-block" src={temperature} alt="klo"/>
                </div>
            </div>
            <div className="absolute h-16 bottom-0 inset-x-0 bg-black bg-opacity-70"></div>
        </div>
    )
}

export default Prokes