import { useTypewriter } from 'react-simple-typewriter'
import { cn } from '@/lib/utils'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

// Separate component for the typewriter to avoid initialization issues
const TypewriterComponent = ({ title }: { title: string }) => {
    const [text] = useTypewriter({
        words: [title],
        loop: 1,
        deleteSpeed: 0,
        typeSpeed: 60,
    })
    return <>{text}</>
}

const Title = ({ title, className }: {
    title: string,
    className?: string
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [shouldType, setShouldType] = useState(false)

    useEffect(() => {
        if (isInView && !shouldType) {
            // Small delay to ensure smooth transition
            const timer = setTimeout(() => {
                setShouldType(true)
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [isInView, shouldType])

    return (
        <h1
            ref={ref}
            className={cn(
                `text-red-500 whitespace-nowrap text-xl xs:text-2xl md:text-4xl font-pixel`,
                className
            )}
        >
            <span className='text-white'>&lt;</span>
            {shouldType && title ? <TypewriterComponent title={title} /> : ''}
            <span className='text-white'>&gt;</span>
        </h1>
    )
}

export default Title