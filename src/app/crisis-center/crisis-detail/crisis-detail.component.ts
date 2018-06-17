import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
@Component({
    selector: 'app-crisis-detail',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

    crisis$: Observable<Crisis>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CrisisService
    ) { }


    ngOnInit() {
        this.crisis$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.service.getCrisis(params.get('id')))
        );

        /*        let id = this.route.snapshot.paramMap.get('id');
        
                this.hero$ = this.service.getHero(id);*/
    }

    gotoCrises(crisis: Crisis) {
        let crisisId = crisis ? crisis.id : null;
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }
}
