import { Game, Ctx } from 'boardgame.io';
import { EffectsCtxMixin } from 'bgio-effects';
import { EffectsPlugin } from 'bgio-effects/plugin';

const effectsConfig = {
  effects: {
    A: {
      create: (arg: string) => arg,
      duration: 0.25,
    },
    B: {
      create: (arg: string) => arg,
      duration: 0.25,
    },
  },
} as const;

export type EffectsConfig = typeof effectsConfig;

const game: Game<Record<string, never>, Ctx & EffectsCtxMixin<EffectsConfig>> = {
  plugins: [EffectsPlugin(effectsConfig)],
  moves: {
    One: ({ effects }) => {
      effects.A('one');
      effects.A('two', '<+0.5');
      effects.B('hello', '<+0.5');
      effects.A('three', '<+0.25');
      effects.B('world', '<+0.5');
    },
    Two: ({ effects }) => {
      effects.A('synch-');
      effects.B('ronise', '<');
      effects.A('effects', '<+0.5');
      effects.B('FX!', '<');
    },
  },
};

export default game;
