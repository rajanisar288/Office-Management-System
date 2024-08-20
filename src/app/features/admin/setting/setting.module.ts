import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { ConfigComponent } from './config/config.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [SettingComponent, ConfigComponent, ThemeComponent],
  imports: [CommonModule, SettingRoutingModule],
})
export class SettingModule {}
