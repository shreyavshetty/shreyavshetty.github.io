import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ImageComponent } from './main/image.sh/image.sh.component';
import { MainText } from './main/main-text/main-text.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Routes, RouterModule } from '@angular/router';
import { YayyComponent } from './yayy/yayy.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

const appRoutes : Routes = [
    { path : '', redirectTo: '/shreyavshetty', pathMatch: 'full'},
    { path : 'shreyavshetty', component: MainComponent},
    { path : 'shreyavshetty/experience', component: ExperienceComponent},
    { path : 'shreyavshetty/education', component: EducationComponent}
    // { path : 'shreyavshetty/yayy', component: YayyComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ImageComponent,
    MainText,
    ExperienceComponent,
    EducationComponent,
    NavigationComponent,
    YayyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
