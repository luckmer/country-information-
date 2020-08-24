const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
export const AnimDiv = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, ...transition } },
    exit: { opacity: 0 },
};
