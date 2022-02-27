import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import { MatTable } from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  columnsToDisplay = ['destination', 'villeDepart', 'dateDepart', 'dateRetour', 'prix', 'rabais'];
  forfaits: Forfait[] = [];
  newForfait: Forfait;

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.newForfait.destination = '';
    this.getForfaits();
  }
  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }

  onAdd(tableForfaits: MatTable<Forfait>, forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
      this.forfaitService.addForfait(this.newForfait)
        .subscribe(forfait => { this.forfaits.push(forfait['destination,villeDepart,dateDepart,dateRetour,prix,rabais']); forfaitFormAjout.resetForm(); tableForfaits.renderRows(); });
    }
  }


}
