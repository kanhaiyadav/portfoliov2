
const Input = (props: {
    type: string,
    placeholder: string
}) => {
  return (
      <input {...props} className={`p-3 px-4 text-xl dark:text-gray-800 rounded-lg bg-gray-300 dark:bg-gray-400 focus:bg-white dark:focus:bg-gray-300 border outline-none border-b-4 focus:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-600`}/>
  )
}

export default Input