"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Show immediately if already in/near viewport on mount
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * 0.92) { setSeen(true); return; }

    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // Fail-safe: never leave content invisible if observer can't fire
    const fallback = setTimeout(() => { setSeen(true); io.disconnect(); }, 1200);

    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);

  const delayCls = delay ? ` reveal-d${delay}` : "";
  const cls = `reveal${seen ? " in" : ""}${delayCls}${className ? " " + className : ""}`;

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={cls}>{children}</Tag>;
}
