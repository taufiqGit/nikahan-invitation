import { motion } from "framer-motion"

import bg_umum from "../../asset/bg.jpg"
import logos from "../../asset/gty.svg"

function Sampul(params) {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8, delay: .2 }}  
            className="w-full h-full bg-no-repeat relative bg-cover" style={{backgroundImage: `url(${bg_umum})`}}>
            <div className="h-1/2 w-full flex flex-col justify-center items-center absolute bottom-0 inset-x-0">
                <motion.p 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .9, delay: .4 }} 
                className="text-white text-2xl font-semibold font-JosefinSlab">The Wedding Of
                </motion.p>
                <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .9, delay: .4 }} 
                className="text-white font-Playball text-3xl">Vanessa & Herman
                </motion.h1>
                <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1, delay: .2 }} 
                className="text-white font-JosefinSlab font-bold">24 . 10 . 2021
                </motion.p>
                <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .8, delay: .5 }} 
                src={logos} alt="tu"/>
            </div>
        </motion.div>
    )
}

export default Sampul