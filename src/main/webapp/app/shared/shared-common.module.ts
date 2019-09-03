import { NgModule } from '@angular/core';

import { EsempioDockerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [EsempioDockerSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [EsempioDockerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EsempioDockerSharedCommonModule {}
