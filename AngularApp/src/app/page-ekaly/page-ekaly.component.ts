import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande.model';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page-ekaly',
  templateUrl: './page-ekaly.component.html',
  styleUrls: ['./page-ekaly.component.css']
})
export class PageEkalyComponent implements OnInit {

  commandes: Commande[] = [];
  //users: User[] = [];
    constructor(private route: ActivatedRoute, private commandeService: CommandeService) { }

    ngOnInit(): void {
      this.getCommande();
     // this.getUsers();
    }

    getCommande(): void {
      this.commandeService.getCommande().subscribe(commandes=>{
        console.log(commandes);
        this.commandes=commandes
      });
    }

}
