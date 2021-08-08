import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

import NavBottom from '../components/nav_bottom'
import Sampul from "../components/view-slide/sampul"
import Mempelai from "../components/view-slide/mempelai"
import Acara from "../components/view-slide/acara"
import Lokasi from "../components/view-slide/lokasi"
import Gallery from "../components/view-slide/gallery"
import Prokes from "../components/view-slide/prokes"
import Ucapan from "../components/view-slide/ucapan"
import Penutup from "../components/view-slide/penutup"

const URL_MUSIC = "https://api-wedding-sugidev.herokuapp.com/static/music/lagu_invitation.mp3"

const Invitation = ()=>{
	const { user } = useAuthContext()
	const [view, setView] = useState('Sampul')
	
	const history = useHistory()

	const [audio] = useState(new Audio(URL_MUSIC));
  
	useEffect(() => {
		if (user === undefined) {
			history.push("/login")
			return
		}
		audio.play()
	  return () => {
		audio.pause()
	  };
	}, []);

 	return(
			<div className="w-full h-full relative">
				{ view === 'Sampul' && <Sampul/> }
				{ view === 'Mempelai' && <Mempelai/> }
				{ view === 'Acara' && <Acara/> }
				{ view === 'Lokasi' && <Lokasi/> }
				{ view === 'Gallery' && <Gallery/> }
				{ view === 'Prokes' && <Prokes/> }
				{ view === 'Ucapan' && <Ucapan/> }
				{ view === 'Penutup' && <Penutup/> }
				<NavBottom action_nav={(e) => setView(e)}/>
			</div>
 		)
 }

 export default Invitation