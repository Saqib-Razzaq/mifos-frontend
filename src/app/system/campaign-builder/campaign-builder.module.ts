import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignBuilderRoutingModule } from './campaign-builder-routing.module';
import { CampaignBuilderComponent } from './campaign-builder.component';

@NgModule({
  imports: [
    CommonModule,
    CampaignBuilderRoutingModule,
    CampaignBuilderComponent  // ✅ Import standalone component
  ]
})
export class CampaignBuilderModule {}
