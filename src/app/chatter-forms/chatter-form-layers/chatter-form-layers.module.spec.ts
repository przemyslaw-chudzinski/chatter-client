import { ChatterFormLayersModule } from './chatter-form-layers.module';

describe('FormLayersModule', () => {
  let formLayersModule: ChatterFormLayersModule;

  beforeEach(() => {
    formLayersModule = new ChatterFormLayersModule();
  });

  it('should create an instance', () => {
    expect(formLayersModule).toBeTruthy();
  });
});
