import { useEffect, useState, createContext, useContext } from 'react'
import Loading from '../components/loading'

const AuthContext = createContext()

const URL_API = 'https://api-wedding-sugidev.herokuapp.com'

export function AuthContextWrap({ children }) {
	const [user, setUser] = useState()
	const [loadingAll, setLoadingAll] = useState(true)
	let token = localStorage.getItem("token")

	const verifyTokenLocalStorage = async()=>{
		try{
			const getDataApi = await fetch(`${URL_API}/api/verifytoken`, {
				  method: 'GET',
				  headers: {
				    'Content-type': 'application/json; charset=UTF-8',
				    'Authorization': `Bearer ${token}`
				  }
				})
			const response = await getDataApi.json()
			if (response.msg === "token salah") {
				setLoadingAll(false)
				return 
			}
			if(response.msg === "jwt expired"){
				setLoadingAll(false)
				return
			}
			setUser(response.data)
			setLoadingAll(false)
		} catch(err){
			console.log(err)
		}
	}

	const SignUpAction = async(data)=>{
		try{
			const Signup = await fetch(`${URL_API}/api/signup`, {
				method: 'POST',
				headers: { 'Content-type': 'application/json; charset=UTF-8' },
				body: JSON.stringify(data)
			})
			const resJson = await Signup.json()
			if (resJson.msg === "register berhasil") {
				localStorage.setItem('token', resJson.token)
				setUser(resJson.data)
				setLoadingAll(false)
				return { msg: "register berhasil" }
			} else if(resJson.msg === "email sudah terdaftar"){
				return { msg: "email sudah terdaftar" }
			} else{
				setLoadingAll(false)
				return { msg: "register gagal" }
			}
		} catch(err){
			console.log(err)
		}
	}

	const LoginAction = async(data)=>{
		try{
			const Login = await fetch(`${URL_API}/api/login`, {
				method: 'POST',
				headers: {'Content-type': 'application/json; charset=UTF-8'},
				body: JSON.stringify(data)
			})
			const result = await Login.json()
			setLoadingAll(false)
			if (result.msg === "account not found") {
				return { msg: "Tamu Tidak Ditemukan" }
			}
			if (result.msg === "password salah") {
				return { msg: "Password Salah" }
			}
			if (result.msg === "berhasil login") {
				localStorage.setItem('token', result.token)
				setUser(result.data)
				return { msg: "Login Berhasil" }
			} else{
				return { msg: "Login Gagal"}
			}
		} catch(err){
			console.log(err)
		}
	}

	const getUcapan = async()=>{
		try {
			const get = await fetch(`${URL_API}/api/ucapan`, {
				method: 'GET',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				    'Authorization': `Bearer ${token}`
				},			
			})
			const result = await get.json()
			if (result.error === true) {
				return false
			}
			return result			
		} catch (error) {
			return false
		}
	}

	const createUcapan = async(data)=>{
		try {
			const create = await fetch(`${URL_API}/api/ucapan`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify(data)			
			})
			const result = await create.json()
			console.log(result)
			if (result.error === true) {
				return false
			}
			return true			
		} catch (error) {
			return false
		}
	}

	useEffect(()=>{
		if (localStorage.getItem("token")) {
			verifyTokenLocalStorage()
		} else{
  			setLoadingAll(false)
		}
	}, [])
	
	return(
			<AuthContext.Provider value={{user, SignUpAction, LoginAction, getUcapan, createUcapan}}>
				{loadingAll ? <Loading/> : children}
			</AuthContext.Provider>
		)
}

export function useAuthContext(){
	return useContext(AuthContext)
}