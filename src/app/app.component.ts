import { Component } from '@angular/core';
import { GorevModel, GorevItem } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Görev Paneli Arayüzü';
  user = 'Mustafa Orzan';
  model = new GorevModel();
  isDisplay = false;
  id: number = 4;

  getItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item=> !item.status);
  }

  addItem(val_task: string, val_desc: string, val_due: string, val_end: string){
    if( (val_task!='') && (val_desc!='') && (val_due!='') && (val_end!='') ){
      
      this.model.items.push(new GorevItem(this.id,val_task, val_desc,false,val_due,val_end));
      this.id++;
    } // else kısmını da düşün
  }

}
