export const transition = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
};

export const fadeIn = {
    initial: { x: "-100vw" },
    animate: {
        x: 0,
        transition: { duration: 1, ...transition },
    },
    exit: {
        x: "-100vw",
        transition: { duration: 1, ...transition },
        opacity: 0,
    },
};
