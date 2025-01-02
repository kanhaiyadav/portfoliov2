const Lable = ({ children, htmlFor }: {
    children: React.ReactNode;
    htmlFor: string;
}) => {
  return (
    <label htmlFor={htmlFor} className="text-lg font-medium text-foreground ">
      {children}
    </label>
  )
}

export default Lable