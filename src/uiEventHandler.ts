import {GameUiElements} from "./gameUiElements";
import {HtmlTreeUtils} from "./htmlTreeUtils";
import {GameImpl} from "./gameImpl";

export class UiEventHandler {
    static canvasHeightPercent = 0.7;
    private static isInitialized = false;

    static initialize() {
        if (!this.isInitialized) {
            this.isInitialized = true;
            this.subscribe();
        }
    }

    private static subscribe() {
        GameUiElements.startButton.onclick = () => this.startGameLoop();
        GameUiElements.stopButton.onclick = () => this.stopGameLoop();
    }

    private static startGameLoop() {
        this.arrangeCanvasSize();
        this.switchGameState();
        GameImpl.doGameCycle = true;
        GameImpl.initialize();
    }

    private static stopGameLoop() {
        GameImpl.doGameCycle = false;
        this.switchGameState();
    }

    static arrangeCanvasSize() {
        GameUiElements.gameCanvas.width = window.innerWidth;
        GameUiElements.gameCanvas.height = window.innerHeight * this.canvasHeightPercent;
    }

    private static switchGameState() {
        HtmlTreeUtils.switchVisibility(
            HtmlTreeUtils.getObjectWithName("start-container"),
            HtmlTreeUtils.getObjectWithName("game-container")
        );
    }
}