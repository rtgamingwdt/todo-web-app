import Link from "next/link";
import { FaCalendarCheck, FaHome, FaStar, FaTag } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="w-64 flex flex-col h-full border-r border-r-main p-6 space-y-6 relative">
            <div className="space-y-2">
                <Link href={"/"} className="nav-link group">
                    <FaHome className="group-hover:text-blue-500" />
                    <span className="group-hover:text-blue-400">Home</span>
                </Link>
                <Link href={"/important"} className="nav-link group">
                    <FaStar className="group-hover:text-yellow-500" />
                    <span className="group-hover:text-yellow-400">Important</span>
                </Link>
                <Link href={"/planned"} className="nav-link group">
                    <FaCalendarCheck className="group-hover:text-red-500" />
                    <span className="group-hover:text-red-400">Planned</span>
                </Link>
            </div>
            <div className="space-y-2 flex-1 overflow-y-auto">
                <h2 className="uppercase text-sm font-semibold tracking-wide text-gray-400">Tags</h2>
                {/* Automate this later. */}
                <Link href={"/tags/design"} className="flex items-center space-x-2">
                    <FaTag />
                    <span>Design</span>
                </Link>
                <Link href={"/tags/development"} className="flex items-center space-x-2">
                    <FaTag />
                    <span>Development</span>
                </Link>
                <Link href={"/tags/meeting"} className="flex items-center space-x-2">
                    <FaTag />
                    <span>Meeting</span>
                </Link>
            </div>
            <button className="bg-blue-500 w-full h-12 rounded-md">
                Sign Out
            </button>
        </div>
    )
}