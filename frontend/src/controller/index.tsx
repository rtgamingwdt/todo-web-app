import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({
    sidebarActive: true,
    toggleSidebar: (_visible: boolean) => { },
    removeTodo: (_id: number) => { },
    todos: [] as any[]
});

export default function Controller({ children }: { children: JSX.Element }) {

    const sidebarPaths = ['/', "/important", "/planned", "/tags"]
    const [sidebarActive, setSidebarActive] = useState(true);

    const pathname = usePathname();

    const [test, setTest] = useState<Date>();

    const [todos, setTodos] = useState([
        {
            title: "Example Todo",
            description: "Example Todo Description",
            tag: "Design",
            id: Math.floor(Math.random() * 1000),
            due: test
        },
        {
            title: "Example Todo 2",
            description: "Example Todo 2 Description",
            tag: "Design",
            id: Math.floor(Math.random() * 1000),
            due: test
        },
        {
            title: "Example Todo 3",
            description: "Example Todo 3 Description",
            tag: "Design",
            id: Math.floor(Math.random() * 1000),
            due: test
        },
        {
            title: "Example Todo 4",
            description: "Example Todo 4 Description",
            tag: "Design",
            id: Math.floor(Math.random() * 1000),
            due: test
        },
    ])

    useEffect(() => {
        setTest(new Date());
    }, []);

    const toggleSidebar = (visible: boolean) => {
        setSidebarActive(visible);
    }

    const removeTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id != id));
    }

    useEffect(() => {
        toggleSidebar(sidebarPaths.includes('/' + pathname.split('/')[1]));
    }, [pathname]);

    return (
        <Context.Provider value={{ sidebarActive, toggleSidebar, removeTodo, todos }}>{children}</Context.Provider>
    )
}

export const useController = () => useContext(Context);