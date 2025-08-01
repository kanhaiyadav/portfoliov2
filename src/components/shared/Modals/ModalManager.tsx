import {
    Dialog,
} from "@/components/ui/dialog"
import { useModal } from "@/Hooks/useModal"
import ImageViewer from "./ImageViewer";

export function ModalManager() {

    const { type, data, setType, setData } = useModal();
    console.log("ModalManager type:", type, "data:", data);
    return (
        <Dialog open={type !== null} onOpenChange={(open) => {
            if (!open) {
                setType(null);
                setData(null);
            }
        }}>
            {type === "image" && data && (
                <ImageViewer
                    images={data.images}
                    initialIndex={data.index}
                    onClose={() => {
                        setType(null);
                        setData(null);
                    }}
                />
            )}
        </Dialog>
    )
}
