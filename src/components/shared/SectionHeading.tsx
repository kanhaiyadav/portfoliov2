import { cn } from '@/lib/utils'

const SectionHeading = ({ children, position, className }: {
    children: string,
    position?: 'left' | 'right' | 'center',
    className?: string
}) => {
  return (
      <pre style={{
          fontFamily: "'Lucida Console', monospace",
          whiteSpace: "pre",
          display: "block",
          margin: "20px 0",
            textAlign: position === 'right' ? 'right' : position === 'center' ? 'center' : 'left',
      }} className={cn(`text-primary text-[4px] leading-[6px] sm:text-[8px] sm:leading-[11px] md:text-[10px] md:leading-[14px]`, className)}>
          {children}
      </pre>
  )
}

export default SectionHeading