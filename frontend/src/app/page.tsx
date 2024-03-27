"use client";
import Card from "@/components/Card";
import { useController } from "@/controller";
import { useEffect, useState } from "react";

export default function Home() {

  const { toggleSidebar, sidebarActive, todos } = useController();

  return (
    <main>
      <h1 className="title hover:text-blue-400" onClick={() => toggleSidebar(!sidebarActive)}>Home</h1>
      <div className="w-full pl-4 pr-8 my-4 space-y-4">
        {todos.map((card) => (
          <Card id={card.id} title={card.title} description={card.description} tag={card.tag} _active={true} due={card.due} />
        ))}
      </div>
    </main>
  );
}
