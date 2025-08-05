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

const Title = ({ title, className, big }: {
    title: string,
    className?: string,
    big?: boolean
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
                `text-red-500 whitespace-nowrap font-pixel ${big ? 'text-6xl text-primary' : 'text-xl xs:text-2xl md:text-4xl'} leading-tight`,
                className
            )}
        >
            <span className={` ${big ? 'text-red-500' : 'text-white'}`}>&lt;</span>
            {shouldType && title ? <TypewriterComponent title={title} /> : ''}
            <span className={` ${big ? 'text-red-500' : 'text-white'}`}>&gt;</span>
        </h1>
    )
}

export default Title