import { motion } from "framer-motion"
import kembangSatu from  '../../asset/kembang-tebu-1.svg'
import kembangDua from  '../../asset/kembang-tebu-2.svg'

function Lokasi(params) {
    return(
        <div  className="w-full" style={{height: 'calc(100% - 4rem)'}}>
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
                <h2 className="text-center font-DancingScript text-2xl text-kuning-tua font-semibold">Lokasi Akad Nikah</h2>
                <div className="mt-1 flex justify-center items-center">
                    <span className="inline-block h-1 w-20 rounded bg-kuning-muda"></span>
                    <span className="inline-block h-2 w-2 mx-2 bg-kuning-muda"></span>
                    <span className="inline-block h-1 w-20 rounded bg-kuning-muda"></span>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2190593219584!2d110.44293841424472!3d-6.983455370326264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cb76c98241f%3A0x6afb73af24d41bf9!2sMasjid%20Agung%20Jawa%20Tengah%20(MAJT)!5e0!3m2!1sid!2sid!4v1628121088037!5m2!1sid!2sid" className="rounded-lg border-2 mt-3 mx-auto" width="310" height="160" loading="lazy"></iframe>
                
                <h2 className="text-center mt-7 font-DancingScript text-2xl text-kuning-tua font-semibold">Lokasi Resepsi Pernikahan</h2>
                <div className="mt-1 flex justify-center items-center">
                    <span className="inline-block h-1 w-20 rounded bg-kuning-muda"></span>
                    <span className="inline-block h-2 w-2 mx-2 bg-kuning-muda"></span>
                    <span className="inline-block h-1 w-20 rounded bg-kuning-muda"></span>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.994108389408!2d110.48185512885843!3d-7.012054352940111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xacad18cd3f3c10a2!2sManunggal%20Jati%20Convention%20Centre!5e0!3m2!1sid!2sid!4v1628129173786!5m2!1sid!2sid" className="rounded-lg border-2 mt-3 mx-auto" width="310" height="180" loading="lazy"></iframe>
            </div>
            <div className="absolute h-16 bottom-0 inset-x-0 bg-black bg-opacity-70"></div>
        </div>
    )
}

export default Lokasi