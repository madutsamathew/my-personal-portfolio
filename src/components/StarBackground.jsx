import { useEffect, useState } from "react"

// id, size, x,y, opacity, animationDuration

export const StarBackground = () => {
    const createStars = () => {
        if (typeof window === "undefined") return [];
        const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = []

    for (let i = 0; i < numberOfStars; i++)
         {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
    }
    return newStars;
    };

    const createMeteors = () => {
        if (typeof window === "undefined") return [];
        const numberOfMeteors = 4;

    const newMeteors = [];

    for (let i = 0; i< numberOfMeteors; i++)
         {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
    }
    return newMeteors;
    };

    const [stars, setStars] = useState(() => createStars());
    const [meteors] = useState(() => createMeteors());

    useEffect(() => {
        const handleResize = () => {
            setStars(createStars());
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div 
                key={star.id} 
                className="star animate-pulse-subtle" 
                style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }}
            />
        ))}

        {meteors.map((meteor) => (
            <div 
                key={meteor.id} 
                className="meteor animate-meteor" 
                style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size * 2 + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDuration: meteor.animationDuration + "s",
                    animationDelay: meteor.delay,
                }}
            />
        ))}
    </div>
};