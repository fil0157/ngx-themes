// Angular
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

// Lib
import * as marked from 'marked';



@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  public content;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) {
    activatedRoute.params.subscribe(params => {
      this.docs(params.doc);
    });
  }

  ngOnInit(): void {
  }

  setContent(doc) {
    this.http.get(doc, { responseType: 'text' }).subscribe((data) => {
      this.content = marked(data);
    });
  }

  docs(doc: any) {
    switch (doc) {

      case undefined:
        this.setContent('assets/docs/intro_ru.md');
        break;

      case 'start':
        this.setContent('assets/docs/start_ru.md');
        break;

      case 'config':
        this.setContent('assets/docs/config_ru.md');
        break;

      case 'api':
        this.setContent('assets/docs/api_ru.md');
        break;

      case 'faq':
        this.setContent('assets/docs/faq_ru.md');
        break;

      default:
        this.router.navigate(['/docs']);
        break;
    }
  }

}
