import { Construction } from 'src/app/model/construction';
import { ConstructionService } from 'src/app/service/construction.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-3';

  constructionList: Observable<Construction[]> =
    this.constructionService.getAll();

  constructor(private constructionService: ConstructionService) {}

  onDelete(fuck: Construction) {
    this.constructionService
      .delete(fuck.id)
      .subscribe(
        () => (this.constructionList = this.constructionService.getAll())
      );
  }
}
