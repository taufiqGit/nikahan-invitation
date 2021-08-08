import React, { useState, useEffect, Suspense } from "react"
import { useHistory } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import Load from "../components/load"
import NavBottom from '../components/nav_bottom'

const Mempelai = React.lazy(() => import('../components/view-slide/mempelai'))
const Sampul = React.lazy(() => import("../components/view-slide/sampul"))
const Acara = React.lazy(() => import("../components/view-slide/acara"))
const Lokasi = React.lazy(() => import("../components/view-slide/lokasi"))
const Gallery = React.lazy(() => import("../components/view-slide/gallery"))
const Prokes = React.lazy(() => import("../components/view-slide/prokes"))
const Ucapan = React.lazy(() => import("../components/view-slide/ucapan"))
const Penutup = React.lazy(() => import("../components/view-slide/penutup"))

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
				{ view === 'Sampul' && (
					<Suspense fallback={<Load/>}>
						<Sampul/>
					</Suspense>
				) }
				{ view === 'Mempelai' && (
					<Suspense fallback={<Load/>}>
						<Mempelai/>
					</Suspense>
				) }
				{ view === 'Acara' && (
					<Suspense fallback={<Load/>}>
						<Acara/>
					</Suspense>
				) }
				{ view === 'Lokasi' && (
					<Suspense fallback={<Load/>}>
						<Lokasi/>
					</Suspense>
				) }
				{ view === 'Gallery' && (
					<Suspense fallback={<Load/>}>
						<Gallery/>
					</Suspense>
				) }
				{ view === 'Prokes' && (
					<Suspense fallback={<Load/>}>
						<Prokes/>
					</Suspense>
				) }
				{ view === 'Ucapan' && (
					<Suspense fallback={<Load/>}>
						<Ucapan/>
					</Suspense>
				) }
				{ view === 'Penutup' && (
					<Suspense fallback={<Load/>}>
						<Penutup/>
					</Suspense>
				) }
				<NavBottom action_nav={(e) => setView(e)}/>
			</div>
 		)
 }

 export default Invitation