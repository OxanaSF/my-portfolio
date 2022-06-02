export const pageTransitionAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: { opacity: 1, y: 0, transition: { duration: 2 } },
  exit: { opacity: 0, y: 300 },
};

export const lastNameAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 3, delay: 1.6 } },
};

export const firstNameAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 3, delay: 2.6 } },
};


export const typedAnimation = { 
  hidden: {opacity: 0},
  show: { opacity: 1, transition: { duration: 3, delay: 3.6 }} 
}

export const heroImageAnimation = {
    hidden: {scale: 1.5, opacity: 1 },
    show: {scale: 1, opacity: 1, transition: {duration: 1, delay: 4}}
}
