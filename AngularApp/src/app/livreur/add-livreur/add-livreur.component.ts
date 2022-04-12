import { Component, OnInit,Input } from '@angular/core';

import { Location } from '@angular/common';
import { Livreur } from '../livreur.model';
import { LivreurService } from '../livreur.service';

@Component({
  selector: 'app-add-livreur',
  templateUrl: './add-livreur.component.html',
  styleUrls: ['./add-livreur.component.css']
})
export class AddLivreurComponent implements OnInit {
  @Input() livreur: Livreur = { fullName: '', email: '', password: '', telephone: '', restaurant: '' };

  constructor(private livreurService: LivreurService, private location: Location) { }

  ngOnInit(): void {
  }

	save(): void {
		this.livreurService.addLivreur(this.livreur).subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}

}
