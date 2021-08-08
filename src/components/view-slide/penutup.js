import { motion } from "framer-motion"
import kembangSatu from  '../../asset/kembang-tebu-1.svg'
import kembangDua from  '../../asset/kembang-tebu-2.svg'

function Penutup(params) {
    return(
        <div className="w-full px-3" style={{height: 'calc(100% - 4rem)'}}>
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
                <div className="flex flex-col justify-center items-center w-full h-full">
                <h3 className="text-center font-Quicksand text-coklat-muda text-sm text-black font-semibold">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do’a restu kepada kedua mempelai.</h3>
                <p className="text-center font-Quicksand text-sm  text-kuning-tua  mt-3">"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu merasa tenang dan tentram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir." </p>
                <span className="block text-center font-Quicksand text-sm text-kuning-tua">(QS. Ar-Rum: 21) </span>
                <p className="text-center font-DancingScript text-coklat-muda text-lg my-5 text-black font-semibold">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
                <p className="text-center text-kuning-tua font-semibold text-xs font-Quicksand mx-auto w-40">Turut berbahagia, Segenap keluarga besar</p>
                <span className="block font-DancingScript text-2xl mt-3 text-coklat-muda text-center font-bold">Vanessa & Herman</span>
            </div>
            <div className="absolute h-16 bottom-0 inset-x-0 bg-black bg-opacity-70"></div>
        </div>
    )
}

export default Penutup