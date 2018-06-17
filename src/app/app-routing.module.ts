import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';

import { AuthGuard } from './auth/auth-guard.service';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'crisis-center',
        loadChildren: './crisis-center/crisis.module#CrisisModule',
        data: { preload: false }
    },
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    { path: '', redirectTo: '/superheoes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                preloadingStrategy: SelectivePreloadingStrategy
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
