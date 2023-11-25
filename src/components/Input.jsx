const Input = ({ label, textarea, ...props }) => {
	return (
		<p>
			<label>{label}</label>
			{textarea ? <textarea {...props} /> : <input type='text' {...props} />}
		</p>
	)
}

export default Input
