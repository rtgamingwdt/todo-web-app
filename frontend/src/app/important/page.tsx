"use client";
import { useController } from "@/controller";

export default function page() {

   const { toggleSidebar, sidebarActive } = useController();

   return (
      <main>
         <h1 className="title hover:text-yellow-400" onClick={() => toggleSidebar(!sidebarActive)}>Important</h1>
      </main>
   );
}
