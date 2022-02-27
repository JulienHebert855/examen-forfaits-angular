import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  columnsToDisplay = ['destination', 'villeDepart', 'dateDepart', 'dateRetour', 'prix', 'rabais'];
  forfaits: Forfait[] = [];

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }


}
