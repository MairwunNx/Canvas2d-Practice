export class HtmlTreeUtils {
    static getObjectWithName(id: string): HTMLElement {
        return document.getElementById(id);
    }

    /**
     * Switch visibility between two objects.
     */
    static switchVisibility(obj1: HTMLElement, obj2: HTMLElement): void {
        if (obj1.style.display == "none") {
            obj1.style.display = "block";
            obj2.style.display = "none";
        } else {
            obj2.style.display = "block";
            obj1.style.display = "none";
        }
    }
}