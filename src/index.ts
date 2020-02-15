import {GameUiElements} from "./gameUiElements";
import {KeyboardHandler} from "./keyboardHandler";
import {UiEventHandler} from "./uiEventHandler";

window.onload = () => {
    GameUiElements.initialize();
    UiEventHandler.initialize();
    KeyboardHandler.initialize();
};

window.onresize = () => UiEventHandler.arrangeCanvasSize();
