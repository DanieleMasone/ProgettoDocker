import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EsempioDockerSharedLibsModule, EsempioDockerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EsempioDockerSharedLibsModule, EsempioDockerSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EsempioDockerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EsempioDockerSharedModule {
  static forRoot() {
    return {
      ngModule: EsempioDockerSharedModule
    };
  }
}
