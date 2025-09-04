import React from "react";
import "./cube.css";

export default function App() {
    return (
        <div className="page">
            <div className="scene">
                <div className="cube" aria-label="Wireframe cube (12 edges)">

                    <div className="edge x x1" />
                    <div className="edge x x2" />
                    <div className="edge x x3" />
                    <div className="edge x x4" />

                    <div className="edge y y1" />
                    <div className="edge y y2" />
                    <div className="edge y y3" />
                    <div className="edge y y4" />

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
