import { motion } from "framer-motion"

import kembangSatu from  '../../asset/kembang-tebu-1.svg'
import kembangDua from  '../../asset/kembang-tebu-2.svg'
import bismillah from '../../asset/bissmillah.svg'

import mbak from '../../asset/mbak.jpg'
import mas from '../../asset/mas.jpg'

function Mempelai(params) {
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
                    <div className="w-full h-auto flex flex-col items-center justify-center">
                       <motion.img 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .7, delay: .3 }}                       
                       className="inline-block w-40" src={bismillah} alt="d"/> 
                       <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: .2 }}   
                       className="font-Playball mt-3 text-lg text-kuning-tua">Assalamu'alaikum Warahmatullahi Wabarakatuh
                       </motion.h2>
                       <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: .2 }}   
                       className="font-Quicksand mt-1 text-xs font-semibold text-center text-gold px-3">Dengan memohon rahmat dan ridho Allah SWT,
                        Mohon do'a restu Bapak/Ibu/Saudara/i dalam rangka melangsungkan pernikahan putra-putri kami: 
                        </motion.p>
                    </div>
                    <div className="w-full h-64 relative mt-5">
                        <motion.div 
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: .1 }}                           
                        className="absolute top-0 left-0 flex flex-col items-center justify-center px-1">
                            <img className="inline-block w-28" src={mbak} alt="mbak"/>
                            <h3 className="font-Playball text-kuning-tua text-xl">Vanessa larissa</h3>
                            <p className="text-xs font-Quicksand text-black font-bold text-opacity-50">Putri Kedua</p>
                            <p className="text-xs font-Quicksand text-black font-semibold text-opacity-50">Bapak Sutarno & Ibu Sutarni</p>
                        </motion.div>
                        <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: .1 }}   
                        className="block font-Playball text-kuning-tua text-center mt-20 text-4xl">&</motion.span>
                        <motion.div 
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: .1 }}                         
                        className="absolute bottom-0 right-0 flex flex-col items-center justify-center px-1">
                            <img className="inline-block w-28" src={mas} alt="mas"/>
                            <h3 className="font-Playball text-kuning-tua text-xl">Herman Dzumafo</h3>
                            <p className="text-xs font-Quicksand text-black font-bold text-opacity-50">Putra Pertama</p>
                            <p className="text-xs font-Quicksand text-black font-semibold text-opacity-50">Bapak Sumanto & Ibu Sumanti</p>
                        </motion.div>
                    </div>
                </div>
                
                <div className="absolute h-16 bottom-0 inset-x-0 bg-black bg-opacity-70"></div>
        </div>
    )
}

export default Mempelai