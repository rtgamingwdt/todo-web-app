import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({
    sidebarActive: true,
    toggleSidebar: (_visible: boolean) => { }
});

export default function Controller({ children }: { children: JSX.Element }) {

    const sidebarPaths = ['/', "/important", "/planned", "/tags"]
    const [sidebarActive, setSidebarActive] = useState(true);

    const pathname = usePathname();

    const toggleSidebar = (visible: boolean) => {
        setSidebarActive(visible);
    }
    useEffect(() => {
        toggleSidebar(sidebarPaths.includes('/' + pathname.split('/')[1]));
    }, [pathname]);

    return (
        <Context.Provider value={{ sidebarActive, toggleSidebar }}>{children}</Context.Provider>
    )
}

export const useController = () => useContext(Context);