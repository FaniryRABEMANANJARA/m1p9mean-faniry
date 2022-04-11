import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {
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
