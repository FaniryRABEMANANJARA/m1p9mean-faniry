import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande.model';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

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
