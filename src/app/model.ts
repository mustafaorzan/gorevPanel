export class GorevModel{
    // id kısmını burada yazdım ilk ancak nerede yazacağımı bilmiyorum
    items;

    constructor(){
        //sayılarla otomatik artır
        this.items = [
            new GorevItem(0, "3 Ekmek al", "Temel yiyecek", false, "2024-11-28","2024-11-29"),
            new GorevItem(1, "Emlak Vergisi Yatır", "Gecikince faiz biniyor", false, "2024-20-11","2024-12-02"),
            new GorevItem(2, "Görev Paneli Arayüzü", "İş için ön mülakat", false, "2024-11-25","2024-11-29"),
            new GorevItem(3, "Diş Fırçala", "Dişler sapsarı.", true, "2024-11-28","2024-11-28")
        ];
    }
    
}

export class GorevItem{
    id;
    task;
    description;
    status;
    dueDate;
    endDate;

    constructor(id: number, task: string, description: string,
        status: boolean, dueDate: string, endDate: string)
        {
            this.id = id;
            this.task = task;
            this.description=description;
            this.status=status;
            this.dueDate=dueDate;
            this.endDate=endDate;
    }
}