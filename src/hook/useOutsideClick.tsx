/**
* Custom hook: Closes the element when clicked outside of it
* @param {React.RefObject[]} refs - An array of ref objects representing the internal elements
* @param {boolean} active - Is the hook active?
* @param {Function} onOutsideClick - The function called when clicked outside of the elements
*/

import { useEffect, RefObject } from "react";

export default function useOutsideClick<T extends HTMLElement>(
    refs: RefObject<T | null>[],
    active: boolean,
    onOutsideClick: () => void
) {
    useEffect(() => {
        if (!active) return;

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;

            const isInside = refs.some(
                (ref) => ref.current && ref.current.contains(target)
            );

            if (!isInside) {
                onOutsideClick();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refs, active, onOutsideClick]);
}
