import { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useAuthContext } from "../context/AuthContext"
import FrameTop from "../components/frame_top"
import FrameBottom from "../components/frame_botom"
import LogoUtama from "../asset/logo onboard.jpg"
import Loading from "../components/loading"

import ErrorEmailTerdaftar from "../components/error"

function Login(argument) {
	const { user, LoginAction } = useAuthContext()
	let history = useHistory()
	const { register, handleSubmit, formState: { errors } } = useForm()
	const [error, setError] = useState('')

	const [loading, setLoading] = useState(false)

	const onSubmit = async(data_login)=>{
		setLoading(true)
		let result = await LoginAction(data_login)
		if (result.msg === "Login Berhasil") {
			setLoading(false)
			history.push("/")
			return
		}
		setError(result.msg)
		setLoading(false)
	}

	useEffect(()=>{
		if (user) {
			history.push("/")
		}
	}, [])

	return(
		<div className="h-full flex justify-center relative">
			{loading && <Loading/>}
			<FrameTop color="#916529"/>
			<div className="h-full flex flex-col justify-center w-56 px-3">
				<div className="w-full bg-coklat-muda h-auto">
					<img src={LogoUtama} alt="ast"/>
				</div>
				<p className="font-DancingScript text-center text-2xl text-coklat-muda">Login Invitation</p>
				{error && <ErrorEmailTerdaftar message={error}/>}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="overflow-x-hidden my-2">
						<input className="px-2 py-1 mt-1 text-coklat-muda placeholder-coklat-muda border-coklat-muda placeholder-opacity-50 rounded w-full font-semibold focus:outline-none border-2" 
						{...register("email", { required: true })}
						type="number"
						placeholder="No HP"
						/>
						{errors.email ? "email required" : ''}
					</div>
					<div className="overflow-x-hidden my-2">
						<input className="px-2 py-1 mt-1 text-coklat-muda placeholder-coklat-muda border-coklat-muda placeholder-opacity-50 rounded w-full font-semibold focus:outline-none border-2" 
						{...register("password", { required: true })}
						type="password"
						placeholder='Password'
						/>
						{errors.password ? "password required" : ''}
					</div>
					<button className="w-full bg-coklat-muda font-Quicksand text-white font-semibold py-1.5 mt-2 rounded" type="submit">
						Login
					</button>
				</form>
				<p className="mt-2 text-sm font-semibold font-Quicksand text-coklat-muda text-opacity-80">
					Jika sudah Belum Register bisa<span className="text-coklat-muda underline relative z-40 mx-2"><Link to="/signup">Register</Link></span>
				</p>
			</div>
			<FrameBottom color="#916529"/>
		</div>
	)
}

export default Login