import {GameUiElements} from "./gameUiElements";
import {KeyStatesStore} from "./keyStatesStore";
import {WindowRect} from "./windowRect";
import {Entity} from "./entity";
import {GameSettings} from "./gameSettings";

export class GameImpl {
    private static isInitialized = false;
    static doGameCycle = true;
    static entity = Entity;

    static initialize() {
        if (this.isInitialized) return;
        this.isInitialized = true;

        setInterval(() => {
            if (!this.doGameCycle) return;

            let wRect = this.windowRect();
            GameUiElements.gameCanvasContext.clearRect(
                0, 0, wRect.w, wRect.h
            );
            this.printDebugInfo();
            GameUiElements.gameCanvasContext.fillStyle = this.entity.color;
            GameUiElements.gameCanvasContext.fillRect(
                this.entity.xPos, this.entity.yPos,
                this.entity.width, this.entity.height
            );

            this.animateColor();
            this.updatePositions();
            this.validatePositions();
        }, 1000 / GameSettings.loopsPerSecond).toFixed();
    }

    private static printDebugInfo() {
        if (!GameSettings.enableDebugInfo) return;

        GameUiElements.gameCanvasContext.fillStyle = "#4182ef";
        GameUiElements.gameCanvasContext.font = "14px Segoe UI";
        GameUiElements.gameCanvasContext.fillText(
            `Position (${this.entity.xPos}, ${this.entity.yPos})`,
            20, 20
        );
        GameUiElements.gameCanvasContext.fillText(
            `Entity sizes (${this.entity.width}, ${this.entity.height})`,
            20, 40
        );
        GameUiElements.gameCanvasContext.fillText(
            `Loops per second ${GameSettings.loopsPerSecond}`,
            20, 60
        );
    }

    private static updatePositions() {
        if (KeyStatesStore.wDown) {
            this.entity.yPos += this.entity.speed;
        }
        if (KeyStatesStore.aDown) {
            this.entity.xPos -= this.entity.speed;
        }
        if (KeyStatesStore.sDown) {
            this.entity.yPos -= this.entity.speed;
        }
        if (KeyStatesStore.dDown) {
            this.entity.xPos += this.entity.speed;
        }
    }

    private static validatePositions() {
        if (this.entity.xPos < 0.0) {
            this.entity.xPos = window.innerWidth - 2;
        }
        if (this.entity.xPos - 1 > window.innerWidth) {
            this.entity.xPos = 0.0;
        }

        if (this.entity.yPos + 1 < 0) {
            this.entity.yPos = GameUiElements.gameCanvas.height - this.entity.height;
        }
        if (this.entity.yPos - 1 > GameUiElements.gameCanvas.height) {
            this.entity.yPos = 0;
        }
    }

    private static animateColor() {
        if (KeyStatesStore.wDown) {
            this.entity.color = "#5c673c";
            return;
        }
        if (KeyStatesStore.aDown) {
            this.entity.color = "#674f38";
            return;
        }
        if (KeyStatesStore.sDown) {
            this.entity.color = "#673133";
            return;
        }
        if (KeyStatesStore.dDown) {
            this.entity.color = "#673a5f";
            return;
        }

        this.entity.color = "#20674f";
    }

    private static windowRect(): WindowRect {
        return new WindowRect(
            window.innerWidth, window.innerHeight
        )
    }
}
