export class Article {

    public id:number;
    public get Id() : number {
        return this.id;
    } 
    public set Id(id : number) {
        this.id = id;
    }
    
    
    titre:string;
    date:Date;
    contenu:string;

    constructor(id:number, titre:string, date:Date, contenu:string)
    {
        this.id = id;
        this.titre = titre;
        this.date = date;
        this.contenu = contenu;
    }

}
