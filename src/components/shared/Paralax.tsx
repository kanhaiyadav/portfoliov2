import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const ParallaxDemo = () => {
    const parallaxRef = useRef()

    const scrollToSection = (section) => {
        if (parallaxRef.current) {
            parallaxRef.current.scrollTo(section)
        }
    }

    return (
        <div className="w-full h-screen">
            {/* Navigation */}
            <div className="fixed top-4 left-4 z-50 space-x-2">
                <button
                    onClick={() => scrollToSection(0)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Section 1
                </button>
                <button
                    onClick={() => scrollToSection(1)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                    Section 2
                </button>
                <button
                    onClick={() => scrollToSection(2)}
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
                >
                    Section 3
                </button>
            </div>

            {/* Parallax Container */}
            <Parallax
                ref={parallaxRef}
                pages={3} // Total number of pages/sections
                style={{ top: 0, left: 0 }}
            >
                {/* Background Layer - Moves slowest */}
                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    style={{
                        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    }}
                />

                {/* Section 1 */}
                <ParallaxLayer
                    offset={0}
                    speed={0.3}
                    className="flex items-center justify-center"
                >
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4">Welcome</h1>
                        <p className="text-xl opacity-80">This is the first section with slow parallax</p>
                    </div>
                </ParallaxLayer>

                {/* Floating Elements */}
                <ParallaxLayer
                    offset={0}
                    speed={0.8}
                    className="flex items-center justify-end pr-20"
                >
                    <div className="w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm"></div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={-0.2}
                    className="flex items-end justify-start pl-20 pb-20"
                >
                    <div className="w-24 h-24 bg-yellow-400/30 rounded-lg backdrop-blur-sm"></div>
                </ParallaxLayer>

                {/* Section 2 Background */}
                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    style={{
                        backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    }}
                />

                {/* Section 2 Content */}
                <ParallaxLayer
                    offset={1}
                    speed={0.4}
                    className="flex items-center justify-center"
                >
                    <div className="text-center text-white max-w-4xl mx-auto px-8">
                        <h2 className="text-5xl font-bold mb-6">Key Concepts</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                <h3 className="text-2xl font-semibold mb-3">Offset</h3>
                                <p>Determines which "page" the layer belongs to (0 = first page, 1 = second page, etc.)</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                                <h3 className="text-2xl font-semibold mb-3">Speed</h3>
                                <p>Controls how fast the layer moves. Positive = faster, negative = reverse, 0 = fixed</p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

                {/* Moving shapes for section 2 */}
                <ParallaxLayer
                    offset={1}
                    speed={0.7}
                    className="flex items-start justify-start pt-20 pl-10"
                >
                    <div className="w-20 h-20 bg-blue-400/40 rounded-full backdrop-blur-sm"></div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={-0.3}
                    className="flex items-end justify-end pr-10 pb-10"
                >
                    <div className="w-28 h-28 bg-green-400/30 rounded-lg backdrop-blur-sm transform rotate-45"></div>
                </ParallaxLayer>

                {/* Section 3 Background */}
                <ParallaxLayer
                    offset={2}
                    speed={0.2}
                    style={{
                        backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    }}
                />

                {/* Section 3 Content */}
                <ParallaxLayer
                    offset={2}
                    speed={0.5}
                    className="flex items-center justify-center"
                >
                    <div className="text-center text-white max-w-3xl mx-auto px-8">
                        <h2 className="text-5xl font-bold mb-6">Speed Examples</h2>
                        <div className="space-y-4 text-lg">
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <strong>speed={0.1}</strong> - Very slow, good for backgrounds
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <strong>speed={0.5}</strong> - Normal speed, good for main content
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <strong>speed={1}</strong> - Same as scroll speed
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <strong>speed={-0.2}</strong> - Moves in reverse direction
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

                {/* Final decorative elements */}
                <ParallaxLayer
                    offset={2}
                    speed={0.9}
                    className="flex items-center justify-center"
                >
                    <div className="w-40 h-40 bg-white/10 rounded-full backdrop-blur-sm absolute top-20 left-20"></div>
                    <div className="w-24 h-24 bg-purple-400/30 rounded-lg backdrop-blur-sm absolute bottom-20 right-20 transform rotate-12"></div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default ParallaxDemo