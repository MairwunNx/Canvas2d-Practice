import {KeyStatesStore} from "./keyStatesStore";

export class KeyboardHandler {
    static initialize() {
        window.onkeydown = this.handleDown;
        window.onkeyup = this.handleUp;
    }

    private static handleDown(event: KeyboardEvent) {
        if (event.code == "KeyW") {
            KeyStatesStore.wDown = true;
        }
        if (event.code == "KeyA") {
            KeyStatesStore.aDown = true;
        }
        if (event.code == "KeyS") {
            KeyStatesStore.sDown = true;
        }
        if (event.code == "KeyD") {
            KeyStatesStore.dDown = true;
        }
    }

    private static handleUp(event: KeyboardEvent) {
        if (event.code == "KeyW") {
            KeyStatesStore.wDown = false;
        }
        if (event.code == "KeyA") {
            KeyStatesStore.aDown = false;
        }
        if (event.code == "KeyS") {
            KeyStatesStore.sDown = false;
        }
        if (event.code == "KeyD") {
            KeyStatesStore.dDown = false;
        }
    }
}
