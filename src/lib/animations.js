import { scale } from "framer-motion"

export const viewportOnce = { once: true, amount: 0.2 }

export const fadeUp = {
    hidden: { opacity:0 , y: 32 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65, 
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

export const fadeIn = {
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: { duration: 0.55, ease: "easeOut"}
    }
}

export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.08,
        }
    }
}

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1, scale:1, transition: { duration: 0.5, ease: "easeOut"}
    }
}

export const hoverLift = { 
    rest: { y: 0, scale: 1},
    hover: {
        y: -4,
        scale: 1.01,
        transition : { type: "spring", stiffness: 260, damping: 18 }
    }
}