import { CrisisRoutingModule } from './crisis-routing.module';

describe('CrisisRoutingModule', () => {
  let crisisRoutingModule: CrisisRoutingModule;

  beforeEach(() => {
    crisisRoutingModule = new CrisisRoutingModule();
  });

  it('should create an instance', () => {
    expect(crisisRoutingModule).toBeTruthy();
  });
});
