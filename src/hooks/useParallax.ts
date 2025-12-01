// Parallax hooks disabled - no scroll effects

export const useParallax = () => {
  return 0; // Always return 0 - no parallax effect
};

export const useParallaxMultiple = (elements: { speed: number }[]) => {
  return elements.map(() => 0); // Always return 0 for all elements
};
};