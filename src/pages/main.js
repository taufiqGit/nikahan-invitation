import { useEffect } from 'react'
import { useHistory, Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import { motion } from "framer-motion"
import FrameTop from "../components/frame_top"
import FrameBottom from "../components/frame_botom"
import bgMempelai from "../asset/bg-mempelai.jpg"

import logoOnboard from "../asset/jui.svg"

function MainPage(argument) {
	const { user } = useAuthContext()
	const history = useHistory()

	useEffect(()=>{
		if (user === undefined) {
			history.push('/signup')
		}
	}, [])

	return(
		<div className="w-full h-full relative bg-mempelai" style={{backgroundImage:  `url(${bgMempelai})`}}>
			<FrameTop z_index="z-0"/>
				<div className="w-full h-full flex flex-col justify-center">
					<motion.img 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: .4 }}
					className="mx-auto block" src={logoOnboard} alt="yu"/>
					<div className="text-center mt-5">
						<motion.div 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5, delay: .3 }}					
						>
							<p className="text-white text-lg font-Montserrat">Yth.</p>
							<h3 className="font-Montserrat text-lg text-kuning-tua font-semibold mt-2">{user ? user.fullname : ''}</h3>
						</motion.div>
						<p className="flex items-center justify-center my-2 mx-auto block">
							<motion.span
							animate={{ x: 0, opacity: 1 }}
							initial={{ x: -40, opacity: 0 }}
							transition={{ duration: 1.2, delay: .2 }}
							className="w-16 h-1 inline-block bg-white rounded"></motion.span>
							<motion.div className="flex items-center justify-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1.3, delay: .5 }}								
							>
							<span className="w-2 h-2 inline-block rounded-full bg-white mx-2"></span>
							<span className="inline-block text-white text-lg tracking-wider font-Quicksand mb-1 mx-1">{user ? user.address : ''}</span>
							<span className="w-2 h-2 inline-block rounded-full bg-white mx-2"></span>
							</motion.div>
							<motion.span 
							animate={{ x: 0, opacity: 1 }}
							initial={{ x: 40, opacity: 0 }}
							transition={{ duration: 1.2, delay: .2 }}
							className="w-16 h-1 inline-block bg-white rounded"></motion.span>
						</p>
						<Link to="/invitation">
							<motion.button 
							initial={{ opacity: 0, y: 35 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.5, delay: .3 }}
							style={{boxShadow: '0 0 10px 3px #fff'}}
							className="px-4 py-1 font-DancingScript text-xl mt-4 bg-white rounded-xl shadow-2xl">
								Buka Undangan
							</motion.button>
						</Link>						
					</div>

				</div>
			<FrameBottom z_index="z-0"/>
		</div>
	)
}

export default MainPage