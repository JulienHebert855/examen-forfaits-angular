import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-destination-moncton',
  templateUrl: './destination-moncton.component.html',
  styleUrls: ['./destination-moncton.component.css']
})
export class DestinationMonctonComponent implements OnInit {
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
