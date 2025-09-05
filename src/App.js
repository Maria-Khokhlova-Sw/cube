import React, { useEffect, useRef } from "react";
import "./cube.css";

export default function App() {
    const sectionRef = useRef(null);
    const cubeRef = useRef(null);

    useEffect(() => {

        const el = sectionRef.current;
        const cube = cubeRef.current;
        if (!el || !cube) return;

        const onScroll = () => {
            const total = Math.max(1, el.offsetHeight - window.innerHeight);
            const p = Math.min(1, Math.max(0, (window.scrollY - el.offsetTop) / total));
            cube.style.setProperty("--ry", `${360 * p}deg`);
            cube.style.setProperty("--rx", `${-30 + 60 * p}deg`);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    const faces = ["front", "back", "right", "left", "top", "bottom"];
    const edges = ["x1","x2","x3","x4","y1","y2","y3","y4","z1","z2","z3","z4"];

    return (
        <div className="page">
            <section className="scroll" ref={sectionRef}>
                <div className="scene">
                    <div className="cube" ref={cubeRef} aria-label="Wireframe cube (6 faces, 12 edges)">
                        {faces.map(f => <div key={f} className={`face ${f}`} />)}
                        {edges.map(e => <div key={e} className={`edge ${e[0]} ${e}`} />)}
                    </div>
                </div>
            </section>
            <p className="hint">Крути страницу — куб вращается. Наведи мышкой — лёгкий наклон.</p>
        </div>
    );
}
