import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Feature } from 'maplibre-gl';
import { LOCATIONS } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: Feature[] = [];
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
    .watchQuery({query: LOCATIONS})
    .valueChanges
    .subscribe((result: any) => {
      this.locations = result
      this.locations = result?.data?.locations;
    })
  }
}
