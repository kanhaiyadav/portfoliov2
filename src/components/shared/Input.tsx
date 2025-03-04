
const Input = (props: {
    type: string,
    value: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    disabled?: boolean
}) => {
  return (
      <input {...props} className={`p-2 md:p-3 px-3 md:px-4 text-md sm:text-lg md:text-xl dark:text-gray-800 rounded-lg bg-gray-300 dark:bg-gray-400 focus:bg-white dark:focus:bg-gray-300 border outline-none border-b-4 focus:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-600`}/>
  )
}

export default Input