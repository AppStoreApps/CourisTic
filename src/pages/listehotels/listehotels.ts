import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Mes importations
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listehotels',
  templateUrl: 'listehotels.html'
})

export class ListehotelsPage {
   ville: string;

//Constructeur
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    
    this.ville = this.navParams.get('ville');
    console.log("Ville reçue => " + this.ville);
  }

//Pour utiliser l'API
  private mapsAPI() {

  }

}
