import { Application, Sprite, Texture } from './pixi';

const app = new Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

const sprite = new Sprite(Texture.WHITE);
sprite.anchor.set(0.5);
sprite.scale.set(10);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

app.stage.addChild(sprite);

app.ticker.add(() => {
    sprite.rotation += 0.05;
});
