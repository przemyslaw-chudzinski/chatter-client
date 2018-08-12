import {FormGroup} from '@angular/forms';

export abstract class FormLayerServiceAbstract<T = any> {
  abstract init(initializeData?: T): FormGroup;
}
