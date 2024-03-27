"use client";
import Card from "@/components/Card";
import { useController } from "@/controller";

export default function Home() {

  const { toggleSidebar, sidebarActive } = useController();

  return (
    <main>
      <h1 className="title hover:text-blue-400" onClick={() => toggleSidebar(!sidebarActive)}>Home</h1>
      <div className="w-full pl-4 pr-8 my-4">
        <Card title="Example Todo" description="Example Todo Description" tag="Design" />
      </div>
    </main>
  );
}
