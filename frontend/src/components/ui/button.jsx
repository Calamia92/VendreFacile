import React from "react";

export function Button({ children, variant = "solid", className = "", ...props }) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2";
    const variants = {
        solid: "bg-orange-500 text-white hover:bg-orange-600",
        outline: "border border-gray-300 hover:bg-gray-100",
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}