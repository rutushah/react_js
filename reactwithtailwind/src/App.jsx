import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {SideBar} from './components/SideBar'
import {MainContent} from './components/MainContent'

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}

function App() {
    const[sidebarOpen, setSidebarOpen] = useState(true)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    

    useEffect(() => {
        if(isDesktop == false){
            setSidebarOpen(false)
        }else{
            setSidebarOpen(true)
        }
    }, [isDesktop])

    return (
        <div className="flex">
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <MainContent sidebarOpen={sidebarOpen}/>
        </div>
    ) 
}



export default App
