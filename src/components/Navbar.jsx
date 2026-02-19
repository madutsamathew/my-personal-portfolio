import { cn }  from "@/lib/utils";
import { useEffect, useState } from "react";
import {X,Menu} from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
        const [isScrolled, setIsScrolled] = useState(false);
        const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300 right-10",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center gap-3" 
            href="#hero">
                <img 
                    src="/profile.png" 
                    alt="Mathew Madutsa" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                />
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Mathew Madutsa</span>{" "} 
                    Portifolio
                </span>
            </a>

            {/*desktop nav*/}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        {item.name}
                    </a>
                )
            )}
            </div>

            {/*mobile nav*/}
            <button onClick={() => setIsMenuOpen((prev)=> !prev)} 
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                 {isMenuOpen ? <X size={24}/>: <Menu size={24}/>} </button>
            <div className={cn("fixed insert-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" :
                "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

        </div>
    </nav>
    );
};