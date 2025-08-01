import React, { useState, useEffect } from 'react';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageViewerProps {
    images: string[];
    onClose: () => void;
    initialIndex?: number;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
    images,
    onClose,
    initialIndex = 0
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isLoading, setIsLoading] = useState(true);
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        setCurrentIndex(initialIndex);
        setZoom(1);
        setRotation(0);
    }, [initialIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowLeft':
                    goToPrevious();
                    break;
                case 'ArrowRight':
                    goToNext();
                    break;
                case 'Escape':
                    onClose();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    const goToNext = () => {
        if (currentIndex < images.length - 1) {
            setDirection(1);
            setCurrentIndex(prev => prev + 1);
            setIsLoading(true);
            setZoom(1);
            setRotation(0);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(prev => prev - 1);
            setIsLoading(true);
            setZoom(1);
            setRotation(0);
        }
    };

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 0.25, 3));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 0.25, 0.5));
    };

    const handleRotate = () => {
        setRotation(prev => (prev + 90) % 360);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = images[currentIndex];
        link.download = `image-${currentIndex + 1}`;
        link.click();
    };

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-0">
            <VisuallyHidden>
                <DialogHeader>
                    <DialogTitle>Image Viewer</DialogTitle>
                    <DialogDescription>
                        View and navigate through images.
                    </DialogDescription>
                </DialogHeader>
            </VisuallyHidden>

            {/* Main container with fixed positioning for UI elements */}
            <div className="fixed inset-0 z-50">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-[60] p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
                >
                    <X size={24} />
                </button>

                {/* Navigation Buttons */}
                {currentIndex > 0 && (
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-[60] p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-200 hover:scale-110"
                    >
                        <ChevronLeft size={28} />
                    </button>
                )}

                {currentIndex < images.length - 1 && (
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-200 hover:scale-110"
                    >
                        <ChevronRight size={28} />
                    </button>
                )}

                {/* Image Counter */}
                <div className="absolute top-4 left-4 z-[60] bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                    {currentIndex + 1} / {images.length}
                </div>

                {/* Controls Bar - Fixed positioning */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <button
                        onClick={handleZoomOut}
                        disabled={zoom <= 0.5}
                        className="p-2 text-white hover:bg-white/20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ZoomOut size={18} />
                    </button>

                    <span className="text-white text-sm px-2 min-w-[60px] text-center">
                        {Math.round(zoom * 100)}%
                    </span>

                    <button
                        onClick={handleZoomIn}
                        disabled={zoom >= 3}
                        className="p-2 text-white hover:bg-white/20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ZoomIn size={18} />
                    </button>

                    <div className="w-px h-6 bg-white/30 mx-1" />

                    <button
                        onClick={handleRotate}
                        className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                    >
                        <RotateCw size={18} />
                    </button>

                    <button
                        onClick={handleDownload}
                        className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                    >
                        <Download size={18} />
                    </button>
                </div>

                {/* Thumbnail Strip - Fixed positioning */}
                {images.length > 1 && (
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-[60] flex gap-2 bg-black/50 backdrop-blur-sm rounded-xl p-2 max-w-[80vw] overflow-x-auto">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (index !== currentIndex) {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                        setIsLoading(true);
                                        setZoom(1);
                                        setRotation(0);
                                    }
                                }}
                                className={`relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-200 flex-shrink-0 ${index === currentIndex
                                    ? 'ring-2 ring-primary scale-110'
                                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                )}

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={{
                            enter: (direction: number) => ({
                                x: direction > 0 ? '100%' : '-100%',
                                opacity: 0,
                                scale: zoom,
                                rotate: rotation
                            }),
                            center: {
                                x: 0,
                                opacity: 1,
                                scale: zoom,
                                rotate: rotation
                            },
                            exit: (direction: number) => ({
                                x: direction > 0 ? '-100%' : '100%',
                                opacity: 0,
                                scale: zoom,
                                rotate: rotation
                            })
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { type: "spring", stiffness: 400, damping: 25 },
                            rotate: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                        className="absolute"
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`Image ${currentIndex + 1}`}
                            className="max-w-full max-h-full object-contain select-none"
                            draggable={false}
                            onLoad={handleImageLoad}
                            style={{
                                filter: isLoading ? 'blur(4px)' : 'none',
                                transition: 'filter 0.3s ease-out'
                            }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </DialogContent>
    );
};

export default ImageViewer;