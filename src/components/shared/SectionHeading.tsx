import { cn } from '@/lib/utils'

const SectionHeading = ({ children, className }: {
    children: string,
    className?: string
}) => {
  return (
      <pre style={{
          fontFamily: "'Lucida Console', monospace",
          whiteSpace: "pre",
          display: "block",
          margin: "20px 0",
      }} className={cn(`text-primary text-center text-[4px] leading-[5px] sm:text-[8px] sm:leading-[11px] md:text-[10px] md:leading-[14px]`, className)}>
          {children}
      </pre>
  )
}

export default SectionHeading