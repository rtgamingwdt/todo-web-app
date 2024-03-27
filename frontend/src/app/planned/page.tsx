"use client";
import { useController } from "@/controller";

export default function page() {

   const { toggleSidebar, sidebarActive } = useController();

   return (
      <main>
         <h1 className="title hover:text-red-400" onClick={() => toggleSidebar(!sidebarActive)}>Planned</h1>
      </main>
   );
}