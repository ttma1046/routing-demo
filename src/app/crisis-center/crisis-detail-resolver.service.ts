import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { CrisisService } from './crisis.service';
import { Crisis } from './crisis';

@Injectable({
    providedIn: 'root'
})
export class CrisisDetailResolver implements Resolve<Crisis> {

  constructor(private crisisService: CrisisService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
    let id = route.paramMap.get('id');
 
    return this.crisisService.getCrisis(id).pipe(
      take(1),
      map(crisis => {
        if (crisis) {
          return crisis;
        } else { // id not found
          this.router.navigate(['/crisis-center']);
          return null;
        }
      })
    );
  }
}