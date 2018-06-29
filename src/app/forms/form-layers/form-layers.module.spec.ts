import { FormLayersModule } from './form-layers.module';

describe('FormLayersModule', () => {
  let formLayersModule: FormLayersModule;

  beforeEach(() => {
    formLayersModule = new FormLayersModule();
  });

  it('should create an instance', () => {
    expect(formLayersModule).toBeTruthy();
  });
});
