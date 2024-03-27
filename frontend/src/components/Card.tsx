import { FaCheck, FaCheckCircle, FaTag, FaTrash } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Card({ title, description, tag, className }: { title: string, description: string, tag: string, className?: string }) {
    return (
        <div className={"bg-card p-4 rounded-md border border-main" + (' ' + className ?? '')}>
            <span className="gap-8 flex items-center">
                <h1 className="font-bold text-lg flex items-center gap-2"><FaCheckCircle /> {title}</h1>
                <h2 className="font-semibold text-lg flex items-center gap-2"><FaTag /> {tag}</h2>
            </span>
            <p className="text-sm">{description}</p>
            <div className="pt-4 flex gap-4">
                <button className="p-2 rounded-full bg-blue-500" aria-label="Complete Task"><FaCheck /></button>
                <button className="p-2 rounded-full bg-red-500"><FaTrash /></button>
            </div>
        </div>
    )
}