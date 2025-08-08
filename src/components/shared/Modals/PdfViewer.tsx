import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import Title from '../Title'

const PdfViewer = ({ title, description, link }: {
    title?: string
    description?: string
    link: string
}) => {
    return (
        <DialogContent className="max-w-none h-full md:w-[70vw] md:max-w-[90vw]">
            <DialogHeader>
                {
                    !title ?
                        <VisuallyHidden>
                            <DialogTitle>Pdf Document</DialogTitle>
                        </VisuallyHidden>
                        :
                        <DialogTitle>
                            <Title title={title}/>
                        </DialogTitle>
                }
                {
                    !description ?
                        <VisuallyHidden>
                            <DialogDescription>
                                This is a PDF document.
                            </DialogDescription>
                        </VisuallyHidden>
                        :
                        <DialogDescription className='text-sm xs:text-xl md:text-2xl text-white'>
                            {description}
                        </DialogDescription>
                }
            </DialogHeader>
            <iframe
                src={link}
                width="100%"
                height="600px"
            ></iframe>
        </DialogContent>
    )
}

export default PdfViewer