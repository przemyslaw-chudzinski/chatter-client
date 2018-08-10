import {FormGroup} from '@angular/forms';

export interface ChatterFormLayerServiceContract<T = any> {
  init(initializeData?: T): FormGroup;
}
