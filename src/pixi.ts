export * from '@pixi/constants';
export * from '@pixi/math';
import '@pixi/math-extras';
export * from '@pixi/runner';
export * from '@pixi/settings';
export * from '@pixi/ticker';
import * as utils from '@pixi/utils';
export { utils };
export * from '@pixi/display';
export * from '@pixi/core';
export * from '@pixi/extract';
export * from '@pixi/particle-container';
export * from '@pixi/sprite';
export * from '@pixi/app';
export * from '@pixi/graphics';
import '@pixi/graphics-extras';
export * from '@pixi/text';
export * from '@pixi/interaction';

// Renderer plugins
import { Renderer } from '@pixi/core';
import { BatchRenderer } from '@pixi/core';
Renderer.registerPlugin('batch', BatchRenderer);
import { Extract } from '@pixi/extract';
Renderer.registerPlugin('extract', Extract);
import { InteractionManager } from '@pixi/interaction';
Renderer.registerPlugin('interaction', InteractionManager);
import { ParticleRenderer } from '@pixi/particle-container';
Renderer.registerPlugin('particle', ParticleRenderer);

// Application plugins
import { Application } from '@pixi/app';
import { TickerPlugin } from '@pixi/ticker';
Application.registerPlugin(TickerPlugin);