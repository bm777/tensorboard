/* Copyright 2020 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {PluginRegistryModule} from '../plugin_registry_module';
import {TextDashboardComponent} from './views/text_dashboard/text_dashboard_component';
import {TextDashboardModule} from './views/text_dashboard/text_dashboard_module';
import {TextV2DataSourceModule} from './data_source/text_v2_data_source_module';
import {reducers} from './store/text_v2_reducers';
import {TEXT_FEATURE_KEY} from './store';

@NgModule({
  imports: [
    CommonModule,
    TextDashboardModule,
    PluginRegistryModule.forPlugin('text_v2', TextDashboardComponent),
    TextV2DataSourceModule,
    StoreModule.forFeature(TEXT_FEATURE_KEY, reducers),
  ],
  entryComponents: [TextDashboardComponent],
})
export class TextV2Module {}
