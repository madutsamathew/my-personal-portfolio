import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-6 px-4 bg-card relative border-t border-border mt-12">
            <div className="container mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} MathewMadutsa.co. All rights reserved
                </p>

                <a 
                    href="#hero" 
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex-shrink-0"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20}/>
                </a>
            </div>
        </footer>
    );
};