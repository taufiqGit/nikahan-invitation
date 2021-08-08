import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import kembangSatu from  '../../asset/kembang-tebu-1.svg'
import kembangDua from  '../../asset/kembang-tebu-2.svg'

import { useAuthContext } from "../../context/AuthContext"

function Ucapan(params) {
    const [ucapans, setUcapans] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const { getUcapan, createUcapan, user } = useAuthContext()

    const onSubmit = async(data)=>{
        try {
            const ucapan = data.ucapan
            const fullname = user.fullname
            const id_user = user.id_users
            const data_ucapan = { ucapan, fullname, id_user }
            
            const buat_ucapan = await createUcapan(data_ucapan)
            get_list_ucapan()
            //console.log(buat_ucapan)           
        } catch (error) {
            console.log(error)
        }
    }

    const get_list_ucapan = async()=>{
        const ucapans = await getUcapan()
        const data_ucapan = ucapans.data
        setUcapans(data_ucapan.reverse())
    }

    useEffect(()=>{
        get_list_ucapan()
    }, [])

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
                <h2 className="font-DancingScript text-kuning-tua font-semibold text-4xl text-center">Kirimkan Pesan</h2>
                <p className="font-Quicksand text-kuning-tua font-semibold text-center">UNTUK KAMI BERDUA</p>
                <form className="px-3 mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="overflow-x-hidden w-72 my-2 font-Quicksand">
                            <input className="px-2 py-1 mt-1 text-coklat-muda placeholder-coklat-muda border-coklat-muda placeholder-opacity-50 rounded w-full font-semibold focus:outline-none border-2" 
                            {...register("ucapan", { required: true })}
                            type="text"
                            placeholder="Ucapan"
                            />
                            {errors.fullname ? "name required" : ''}
                        </div>
                        <button className="bg-coklat-muda w-48 font-Quicksand text-white mx-auto block font-semibold py-1.5 mt-2 rounded" type="submit">
                            Kirim
                        </button>
                </form>
                <div className="w-full px-5 mt-3 h-72 bg-white overflow-y-scroll">
                    {
                        ucapans.length > 0 ? ucapans.map(data =>{
                            return(
                                <div key={data._id} className="w-full my-2 bg-kuning-muda rounded-md p-1.5">
                                    <span className="block text-xs font-bold font-Quicksand text-coklat-muda">{data.fullname}</span>
                                    <p className="text-white font-semibold font-Quicksand">{data.ucapan}</p>
                                </div>                                
                            )
                        }) : (<p className="text-center font-semibold text-kuning-tua text-Quicksand">Loading...</p>)
                    }

                </div>
            </div>
            <div className="absolute h-16 bottom-0 inset-x-0 bg-black bg-opacity-70"></div>
        </div>
    )
}

export default Ucapan