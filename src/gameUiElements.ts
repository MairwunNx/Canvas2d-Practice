import {HtmlTreeUtils} from "./htmlTreeUtils";

export class GameUiElements {
    static startContainer: HTMLElement = null;
    static gameContainer: HTMLElement = null;
    static gameCanvas: HTMLCanvasElement = null;
    static gameCanvasContext: CanvasRenderingContext2D = null;
    static startButton: HTMLButtonElement = null;
    static stopButton: HTMLButtonElement = null;

    static initialize() {
        if (this.startContainer != null) return;
        this.startContainer = HtmlTreeUtils.getObjectWithName("start-container");

        if (this.gameContainer != null) return;
        this.gameContainer = HtmlTreeUtils.getObjectWithName("game-container");

        if (this.gameCanvas != null) return;
        this.gameCanvas = HtmlTreeUtils.getObjectWithName(
            "game-canvas"
        ) as HTMLCanvasElement;

        if (this.gameCanvasContext != null) return;
        this.gameCanvasContext = this.gameCanvas.getContext("2d");

        if (this.startButton != null) return;
        this.startButton = HtmlTreeUtils.getObjectWithName(
            "start-button"
        ) as HTMLButtonElement;

        if (this.stopButton != null) return;
        this.stopButton = HtmlTreeUtils.getObjectWithName(
            "stop-button"
        ) as HTMLButtonElement;
    }
}