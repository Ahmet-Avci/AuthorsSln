import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MyArticleComponent } from './MyArticle/MyArticle.component';
import { ArticleComponent } from './Article/ArticleComponent';
import { InformationComponent } from './information/information.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReadArticleComponent } from './read-article/read-article.component';
import { AdminComponent } from './Admin/admin-component';
import { HeaderNavComponent } from './header-nav/header-nav-component';
import { CategoryComponent } from './Category/category-component';
import { ProfileComponent } from './Profile/profile.component';
import { CategoryArticleComponent } from './Category-article/category-article.component';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MyArticleComponent,
    ArticleComponent,
    InformationComponent,
    LoginComponent,
    RegisterComponent,
    ReadArticleComponent,
    AdminComponent,
    CategoryComponent,
    ProfileComponent,
    CategoryArticleComponent,
    HeaderNavComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'my-article', component: MyArticleComponent },
      { path: 'article', component: ArticleComponent },
      { path: 'information', component: InformationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'read-article', component: ReadArticleComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'category-article', component: CategoryArticleComponent },
      { path: 'header-nav', component: HeaderNavComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
