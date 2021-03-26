export class Ucenik
{
    constructor(ime,prezime,id,email)
    {
        if(!ime)
            this.ime=""; 
        else
          this.ime=ime;

        if(!prezime)
            this.prezime=""; 
        else
          this.prezime=prezime;
          
          
        if(!email)
          this.email=""; 
       else
        this.email=email;
          
        this.kontejnerMini=null;
        this.ucenikId=id;
    }
    crtajUcenika(roditelj)
    {
        this.kontejnerMini=document.createElement("div");
        this.kontejnerMini.className="miniKontejnerUcenik"+this.ucenikId;
        roditelj.appendChild(this.kontejnerMini);
      
           /* let lab=document.createElement("label");
            lab.innerHTML=this.ime;
            lab.className="ucLabIme";
            this.kontejnerMini.appendChild(lab);

             lab=document.createElement("label");
            lab.innerHTML=this.prezime;
            lab.className="ucLabPrezime";

            this.kontejnerMini.appendChild(lab);*/
            this.kontejnerMini.innerHTML=this.ime+"</br>"+this.prezime;

            this.kontejnerMini.style.backgroundColor="green";

        

    }
    azurirajUcenika(ime,prez)
    {
      this.kontejnerMini.innerHTML=ime+"</br>"+prez;
      this.kontejnerMini.style.backgroundColor="green";

    }

}