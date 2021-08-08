import Countdown from 'react-countdown'
import { motion } from "framer-motion"
import kembangSatu from  '../../asset/kembang-tebu-1.svg'
import kembangDua from  '../../asset/kembang-tebu-2.svg'

import akad from '../../asset/akad.svg'
import party from '../../asset/party.svg'
import time from '../../asset/time.svg'
import tanggal from '../../asset/tanggal.svg'
import CountDownTime from '../CountDown'


function Acara(params) {
    let sdf = new Date(2021, 10, 24, 7)
    let date = Date.parse(sdf)
    let dateNow = Date.now()
    let saha = date - dateNow
    return(
        <div className="h-full w-full">
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
                <img className="inline-block" src={akad} alt="akad"/> 
                <h2 className="font-DancingScript text-coklat-muda text-2xl">Akad Nikah</h2>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .9, delay: .2 }} 
                className="w-full mt-2 flex px-8">
                    <div className="w-1/2 flex justify-content items-center flex-col">
                        <img src={time} alt="akad"/>
                        <h3 className="font-Quicksand text-coklat-muda font-semibold text-black text-sm text-opacity-75">Jam</h3>
                        <p className="font-Quicksand text-coklat-muda text-sm">07.00 WIB - Selesai</p>
                    </div>
                    <div className="w-1/2 flex justify-content items-center flex-col">
                        <img src={tanggal} alt="tanggal"/>
                        <h3 className="font-Quicksand text-coklat-muda font-semibold text-black text-sm text-opacity-75">Tanggal</h3>
                        <p className="font-Quicksand text-coklat-muda text-sm">24 Oktober 2021</p>
                    </div>
                </motion.div>

                <div className="my-3 h-0.5 bg-gold bg-opacity-70 w-40 rounded"></div>

                <img className="inline-block" src={party} alt="akad"/> 
                <h2 className="font-DancingScript text-coklat-muda text-2xl">Resepsi Pernikahan</h2>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .9, delay: .2 }} 
                className="w-full mt-2 flex px-8">
                    <div className="w-1/2 flex justify-content items-center flex-col">
                        <img src={time} alt="akad"/>
                        <h3 className="font-Quicksand text-coklat-muda text-sm font-semibold text-black text-opacity-75">Jam</h3>
                        <p className="font-Quicksand text-coklat-muda text-sm">16.00 WIB - Selesai</p>
                    </div>
                    <div className="w-1/2 flex justify-content items-center flex-col">
                        <img src={tanggal} alt="tanggal"/>
                        <h3 className="font-Quicksand text-coklat-muda text-sm font-semibold text-black text-opacity-75">Tanggal</h3>
                        <p className="font-Quicksand text-coklat-muda text-sm">25 Oktober 2021</p>
                    </div>
                </motion.div>

                <div className="my-3 h-0.5 bg-gold bg-opacity-70 w-40 rounded"></div>
                
                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: .9, delay: .2 }} 
                className="w-full h-24 z-20">
                    <Countdown date={Date.now() + saha} renderer={CountDownTime}/>
                </motion.div>
            </div>
            <div className="absolute h-16 bottom-0 inset-x-0 bg-black bg-opacity-70"></div>
        </div>
    )
}

export default Acara