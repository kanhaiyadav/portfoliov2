
const Input = (props: {
    type: string,
    value: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    disabled?: boolean
}) => {
  return (
      <input {...props} className={`glass p-2 px-3 text-md sm:text-lg md:text-xl text-white !rounded-lg focus:outline focust:outline-2 focus:outline-primary placeholder:text-gray-400 `}/>
  )
}

export default Input