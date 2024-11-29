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
  errorMessage: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

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
    } else{
      this.errorMessage = 'Lütfen boş alan bırakmayınız ve tarihleri giriniz!';
    }
  }

  deleteItem(index: number){
    if (confirm('Bu görevi silmek istediğinizden emin misiniz?')) {
      this.model.items.splice(index, 1); // 2 den fazla öge sildirmiyor. Çözemedim.
    }
  }

  sortBy(column: keyof GorevItem) {
    if (this.sortColumn === column) {
      // Aynı sütuna tekrar tıklanırsa yönü tersine çevir
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc'; // İlk başta artan sıraya göre sıralar
    }

    // Veri sıralaması (String olarak karşılaştırma yapıyoruz)
    this.model.items.sort((a, b) => {
      const valueA = a[column].toString();
      const valueB = b[column].toString();

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  

}
