import {FormGroup} from '@angular/forms';

export interface FormLayerServiceContract<T = any> {
  init(initializeData?: T): FormGroup;
}
