import { useEffect, RefObject } from "react";

/**
 * Custom hook: Closes the element when clicked outside of it
 * @param ref - Ref object representing the internal element
 * @param active - Is the hook active?
 * @param onOutsideClick - Function called when clicked outside
 */

export default function useOutsideClick<T extends HTMLElement>(
    ref: RefObject<T | null>,
    active: boolean,
    onOutsideClick: () => void
) {
    useEffect(() => {
        if (!active) return;

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;

            if (ref.current && !ref.current.contains(target)) {
                onOutsideClick();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, active, onOutsideClick]);
};