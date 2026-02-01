import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const arrow = document.querySelector(".cursor-arrow");

    if (!cursor || !arrow) return;

    const move = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const activate = () => arrow.classList.add("glow");
    const deactivate = () => arrow.classList.remove("glow");

    document.addEventListener("mousemove", move);

    document.querySelectorAll("a, button, .hover-target").forEach(el => {
      el.addEventListener("mouseenter", activate);
      el.addEventListener("mouseleave", deactivate);
    });

    return () => {
      document.removeEventListener("mousemove", move);

      document.querySelectorAll("a, button, .hover-target").forEach(el => {
        el.removeEventListener("mouseenter", activate);
        el.removeEventListener("mouseleave", deactivate);
      });
    };
  }, []);

  return (
  <div className="custom-cursor">
    <span className="cursor-arrow" />
      </div>
);

}
