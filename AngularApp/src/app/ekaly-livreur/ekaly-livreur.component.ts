import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livreur } from '../livreur/livreur.model';
import { LivreurService } from '../livreur/livreur.service';

@Component({
  selector: 'app-ekaly-livreur',
  templateUrl: './ekaly-livreur.component.html',
  styleUrls: ['./ekaly-livreur.component.css']
})
export class EkalyLivreurComponent implements OnInit {

  livreurs: Livreur[]=[];

	constructor(private route: ActivatedRoute, private livreurService: LivreurService) { }

	ngOnInit() {
		this.getLivreurs();
	}

	getLivreurs(): void {
    this.livreurService.getLivreurs().subscribe(livreurs=>{
      console.log(livreurs);
      this.livreurs=livreurs
    });
	}

}
