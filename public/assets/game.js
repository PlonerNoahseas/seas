// hier wird ein phaser spiel erstellt und mit socket.io verbunden
// wir erstellen eine scene mit create und update , laden racetrack.jpg als titlesprite
// und erstellen ein auto als sprite, das sich mit den Pfeiltasten bewegen lässt
// wir verbinden das spiel mit socket.io, damit wir die position des autos an den server senden können
// und die position des autos von anderen Spielern empfangen können

const socket = io();

class OmegaIo extends Phaser.Scene {
    preload() {
        this.load.image("racetrack", "/assets/racetrack.jpg");
        this.load.image("car", "/assets/car.png");

    }

    create() {
        this.add.titleSprite(0, 0, 1200, 800, "racetrack").setOrigin(0, 0);
        }

        update() {
            // hier können wir die position des autos aktualisieren und an den server senden
        }
}

new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: OmegaIo,
    parent: "game-container",
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        },
    },
});