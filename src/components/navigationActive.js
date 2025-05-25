// Helper to track active section on scroll
export function getActiveSection(sectionIds, offset = 90) {
  let active = null;
  const scrollY = window.scrollY + offset;
  for (let i = 0; i < sectionIds.length; i++) {
    const el = document.getElementById(sectionIds[i]);
    if (el) {
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        active = sectionIds[i];
        break;
      }
    }
  }
  return active;
}
