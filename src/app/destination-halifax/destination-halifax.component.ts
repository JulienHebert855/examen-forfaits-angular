import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-destination-halifax',
  templateUrl: './destination-halifax.component.html',
  styleUrls: ['./destination-halifax.component.css']
})
export class DestinationHalifaxComponent implements OnInit {
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
