import Link from "next/link";
import { useState } from "react";
import { FaCheck, FaCheckCircle, FaTag, FaTrash } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Card({ title, description, tag, due, className, _active }: { title: string, description: string, tag: string, due?: Date, className?: string, _active: boolean }) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const [active, setActive] = useState(_active);

    return (
        <div style={{ opacity: active ? "100%" : "25%" }} className={"bg-card p-4 rounded-md border border-main relative" + (' ' + className ?? '')}>
            {!active && <div className="absolute w-full top-1/4 left-0 h-0.5 bg-white"></div>}
            <span className="gap-8 flex items-center">
                <h1 className="font-bold text-lg flex items-center gap-2"><FaCheckCircle /> {title}</h1>
                <Link href={`/tags/${tag.toLowerCase()}`} className="font-semibold text-lg flex items-center gap-2"><FaTag /> {tag}</Link>
            </span>
            {due && <time className="font-serif">Due {months[due.getMonth()]} {due.getDate() - 1}, {due.getFullYear()}</time>}
            <p className="text-sm">{description}</p>
            <div className="pt-4 flex gap-4">
                <button onClick={() => setActive((prev) => !prev)} className={`p-2 rounded-full bg-${active ? "blue" : "red"}-500`} aria-label="Complete Task">{active ? <FaCheck /> : <FaX />}</button>
                <button className="p-2 rounded-full bg-red-500"><FaTrash /></button>
            </div>
        </div>
    )
}