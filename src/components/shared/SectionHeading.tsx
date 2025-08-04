import React from 'react'

const SectionHeading = ({ children, position }: {
    children: string,
    position?: 'left' | 'right' | 'center'
}) => {
  return (
      <pre style={{
          fontFamily: "'Lucida Console', monospace",
          fontSize: "10px",
          lineHeight: "14px",
          whiteSpace: "pre",
          display: "block",
          margin: "20px 0",
            textAlign: position === 'right' ? 'right' : position === 'center' ? 'center' : 'left',
      }} className="text-primary">
          {children}
      </pre>
  )
}

export default SectionHeading