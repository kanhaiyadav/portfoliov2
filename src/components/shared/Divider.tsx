import { IoCodeSlashOutline } from "react-icons/io5";
const Divider = () => {
    return <div className="flex items-center justify-center w-full gap-2">
        <hr className="w-1/6 dark:border-gray-600 border-gray-300" />
        <IoCodeSlashOutline className="text-3xl dark:text-gray-600 text-gray-300" />
        <hr className="w-1/6 dark:border-gray-600 border-gray-300" />
    </div>;
};

export default Divider;
