"use client";
import { useController } from "@/controller";

export default function page({ params }: { params: { tag: string } }) {

    const { toggleSidebar, sidebarActive } = useController();

    return (
        <main>
            <h1 className="title hover:text-cyan-400" onClick={() => toggleSidebar(!sidebarActive)}>TAG: {params.tag}</h1>
        </main>
    );
}