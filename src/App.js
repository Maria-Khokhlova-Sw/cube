// App.jsx
import React from "react";
import "./cube.css";

export default function App() {
    return (
        <div className="page">
            <div className="scene">
                <div className="cube" aria-label="Wireframe cube (12 edges)">
                    {/* 4 рёбра вдоль оси X (y=±h, z=±h) */}
                    <div className="edge x x1" />
                    <div className="edge x x2" />
                    <div className="edge x x3" />
                    <div className="edge x x4" />

                    {/* 4 рёбра вдоль оси Y (x=±h, z=±h) */}
                    <div className="edge y y1" />
                    <div className="edge y y2" />
                    <div className="edge y y3" />
                    <div className="edge y y4" />

                    {/* 4 рёбра вдоль оси Z (x=±h, y=±h) */}
                    <div className="edge z z1" />
                    <div className="edge z z2" />
                    <div className="edge z z3" />
                    <div className="edge z z4" />
                </div>
            </div>
            <p className="hint">Наведи мышкой — куб слегка повернётся</p>
        </div>
    );
}
