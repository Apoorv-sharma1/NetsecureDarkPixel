import { useEffect, useState } from "react";

export function RoundCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [pressed, setPressed] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(finePointer.matches);

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "mouse") {
        setPosition({ x: event.clientX, y: event.clientY });
      }
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="round-cursor"
      data-pressed={pressed}
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    />
  );
}
