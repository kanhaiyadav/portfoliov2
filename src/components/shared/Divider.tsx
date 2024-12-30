import { IoCodeSlashOutline } from "react-icons/io5";
const Divider = () => {
    return <div className="flex items-center justify-center w-full gap-2">
        <hr className="w-1/6 border-gray-600" />
        <IoCodeSlashOutline className="text-3xl text-gray-600" />
        <hr className="w-1/6 border-gray-600" />
    </div>;
};

export default Divider;
