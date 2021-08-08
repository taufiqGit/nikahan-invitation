import { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useAuthContext } from "../context/AuthContext"
import FrameTop from "../components/frame_top"
import FrameBottom from "../components/frame_botom"
import LogoUtama from "../asset/logo onboard.jpg"
import Loading from "../components/loading"

import ErrorEmailTerdaftar from "../components/error"

function SignUp() {
	const { user, SignUpAction, errMsg } = useAuthContext()

	const { register, handleSubmit, formState: { errors } } = useForm()

	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	let history = useHistory()

	const onSubmit = async(data)=>{
		setLoading(true)
		let result = await SignUpAction(data)

		if (result.msg === "email sudah terdaftar") {
			setError("Nomor Telfon Sudah Terdaftar")
			setLoading(false)
			return
		}
		
		if (result.msg === "register gagal") {
			setError("Terjadi Kesalahan")
			setLoading(false)
			return			
		}

		if (result.msg === "register berhasil") {
			setError('')
			setLoading(false)
			history.push("/")
		}
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
				<p className="font-DancingScript text-center text-xl text-coklat-muda">Create Wedding Invitation</p>
				{error && <ErrorEmailTerdaftar message={error}/>}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="overflow-x-hidden my-2 font-Quicksand">
						<input className="px-2 py-1 mt-1 text-sm text-coklat-muda placeholder-coklat-muda border-coklat-muda placeholder-opacity-50 rounded w-full font-semibold focus:outline-none border-2" 
						{...register("fullname", { required: true })}
						type="text"
						placeholder="Nama Lengkap"
						/>
						{errors.fullname ? "name required" : ''}
					</div>
					<div className="overflow-x-hidden my-2">
						<input className="px-2 py-1 mt-1 text-sm text-coklat-muda placeholder-coklat-muda border-coklat-muda placeholder-opacity-50 rounded w-full font-semibold focus:outline-none border-2" 
						{...register("email", { required: true })}
						type="number"
						placeholder="No HP"
						/>
						{errors.email ? "email required" : ''}
					</div>
					<div className="overflow-x-hidden my-2">
						<input className="px-2 py-1 mt-1 text-sm text-coklat-muda placeholder-coklat-muda border-coklat-muda placeholder-opacity-50 rounded w-full font-semibold focus:outline-none border-2" 
						{...register("address", { required: true })}
						type="text"
						placeholder="Kota Asal"
						/>
						{errors.address ? "address required" : ''}
					</div>
					<div className="overflow-x-hidden my-2">
						<input className="px-2 py-1 mt-1 text-sm text-coklat-muda placeholder-coklat-muda border-coklat-muda placeholder-opacity-50 rounded w-full font-semibold focus:outline-none border-2" 
						{...register("password", { required: true })}
						type="password"
						placeholder='Password'
						/>
						{errors.password ? "password required" : ''}
					</div>
					<button className="w-full bg-coklat-muda font-Quicksand text-white font-semibold py-1.5 mt-2 rounded" type="submit">
						Create
					</button>
				</form>
				<p className="mt-2 text-sm font-semibold font-Quicksand text-coklat-muda text-opacity-80">
					Jika sudah Register bisa<span className="text-coklat-muda underline relative z-40 mx-2"><Link to="/login">Login</Link></span>
				</p>
			</div>
			<FrameBottom color="#916529"/>
		</div>
	)
}

export default SignUp