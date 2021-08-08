const ErrorEmailTerdaftar =({ message })=> {
	return(
		<p className="text-coklat-muda my-2 flex justify-center items-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-exclamation-square" viewBox="0 0 16 16">
			<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
			<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
			</svg>
			<span className="inline-block font-Quicksand text-sm ml-2">{ message }</span>
		</p>
	)
}

export default ErrorEmailTerdaftar