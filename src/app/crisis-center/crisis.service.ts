import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
// import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class CrisisService {
 static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  getCrises() { return this.crises$; }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id))
    );
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}