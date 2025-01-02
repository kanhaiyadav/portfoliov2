
const Input = (props: {
    type: string,
    placeholder: string
}) => {
  return (
      <input {...props} className={`p-3 px-4 text-xl rounded-lg bg-secondary focus:bg-background border dark:border-border border-gray-400  outline-none focus:outline-primary`}/>
  )
}

export default Input