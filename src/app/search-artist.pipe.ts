import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtist'
})
export class SearchArtistPipe implements PipeTransform {

  transform(pipeData:Object[], modifier:string): any {
    return pipeData.filter(eachItem =>{
      return (
        eachItem['name'].toLowerCase().includes(modifier.toLowerCase()) ||
        eachItem['shortname'].toLowerCase().includes(modifier.toLowerCase())
      )
    });
  }

}
