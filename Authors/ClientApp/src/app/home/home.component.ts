import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { UserDto, ArticleDto, AppComponent } from '../app.component';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    $(".screen-box").hide();
    $(".row:first").hide();

  }

  http: HttpClient;
  public userList: UserDto[] = [];
  adminArticles: ArticleDto[] = [];
  user: UserDto;
  message: AppComponent;
  authorCount = 3;
  articleCount = 4;

  public constructor(http: HttpClient) {

    this.message = AppComponent.prototype;


    //Yazarlar farklı olmak koşuluyla en çok okunana 3 yazarın 3 eserini getirir
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set("authorCount", this.authorCount.toString());
    http.post<any>('api/Home/GetTopAuthorArticle', body, { headers: myheader }).subscribe(result => {
      if (!result.isNull) {
        this.userList = result.data;
        setTimeout(function () {
          $(".slider-nav__item label:first").click();
        }, 50)
        $(".screen-box").fadeIn();
        $(".row:first").fadeIn();
      } else {
        this.message.Show("error", result.message);
      }
    })

    //Sistem adminin eklemiş olduğu son 4 genel yazıyı getirir
    const myheader2 = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body2 = new HttpParams();
    body2 = body2.set("articleCount", this.articleCount.toString());
    http.post<any>('api/Home/GetArticleByAdmin', body2, { headers: myheader2 }).subscribe(result => {
      if (!result.isNull) {
        this.adminArticles = result.data;
        this.adminArticles.forEach(x => {
          x.imagePath = atob(x.imagePath);
          x.content = x.content.length <= 155 ? x.content : x.content.substr(0, 155) + "...";
        })
      } else {
        this.message.Show("error", result.message);
      }
    })
  }

  animation() {

    $("body .slider-wrapper").fadeOut(0);
    $("body .card-content").fadeOut(0);
    $("body .slider-wrapper").fadeIn(1000); 
    $("body .card-content").fadeIn(1300);
  }

}

