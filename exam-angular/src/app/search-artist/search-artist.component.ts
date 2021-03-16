import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IArtist } from '../interface/iartist';
import { ArtistApiServiceService } from '../shared/artist-api-service.service';
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.scss'],
})
export class SearchArtistComponent implements OnInit {
  artist = new FormControl('');
  saveArtist!: string;
  allData: any[] = [];
  sample!: any;
  displayArtist: string = '200';

  // we can inject the storage in here i'm guessing???
  constructor(
    private artistResult: ArtistApiServiceService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    // get the artist
    this.saveArtist = this.localStorage.get('artist') || '';
    console.log('save artist', this.saveArtist);
    // reset the form to the current artist (???)
    this.artist.setValue(this.saveArtist);
    console.log('set value artist', this.artist);
    // get the values from the artist
    this.allData = this.localStorage.get('data') || [];
    console.log('current data', this.allData);
    // display values you had
    this.displayArtist = this.localStorage.get('displayData') || '200';
    console.log('display artist value', this.displayArtist);
  }

  submit() {
    this.saveArtist = this.artist.value;
    console.log('save artist in submit', this.saveArtist);
    this.artistResult.getArtistData(this.saveArtist).subscribe((data) => {
      // why do i have to save the data in a variable before i can use it?
      this.sample = data;
      this.allData = this.sample.results.map((item: any) => {
        return {
          artistId: item.artistId,
          artistName: item.artistName,
          artworkUrl100: item.artworkUrl100,
          collectionName: item.collectionName,
        };
      });
      this.localStorage.set('artist', this.artist.value);
      this.localStorage.set('displayArtist', this.allData.length.toString());
      this.localStorage.set('data', this.allData);
    });
  }

  // method here will help us persist the data
  setDisplayAmount() {
    // this.displayArtist = val;
    this.localStorage.set('displayArtist', this.displayArtist.toString());
    this.saveArtist = this.artist.value;
    this.artist.setValue(this.localStorage.set('artist', this.saveArtist));
  }
}
