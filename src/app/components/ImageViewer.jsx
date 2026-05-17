"use client";

import { useState, useRef } from "react";

export default function ImageViewer() {
  const [selectedImage, setSelectedImage] = useState("/reading.jpg");
  const [zoom, setZoom] = useState(1);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 5));
  };

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 1));
  };

  const handleMouseDown = (e) => {
    setDragging(true);

    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/95 z-[9999] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Controls */}
      <div className="absolute top-5 right-5 flex gap-3 z-20">
        <button
          onClick={zoomOut}
          className="w-10 h-10 bg-white rounded-full text-2xl"
        >
          −
        </button>

        <button
          onClick={zoomIn}
          className="w-10 h-10 bg-white rounded-full text-2xl"
        >
          +
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={selectedImage}
          alt="preview"
          draggable={false}
          onMouseDown={handleMouseDown}
          className={`select-none ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            transform: `
              translate(${position.x}px, ${position.y}px)
              scale(${zoom})
            `,
            transition: dragging ? "none" : "transform 0.2s ease",
            maxWidth: "90%",
            maxHeight: "90%",
          }}
        />
      </div>
    </div>
  );
}