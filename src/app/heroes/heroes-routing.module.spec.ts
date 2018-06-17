import { HeroRoutingModule } from './heroes-routing.module';

describe('HeroesRoutingModule', () => {
  let heroesRoutingModule: HeroRoutingModule;

  beforeEach(() => {
    heroesRoutingModule = new HeroRoutingModule();
  });

  it('should create an instance', () => {
    expect(heroesRoutingModule).toBeTruthy();
  });
});
