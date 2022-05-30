// import { Injectable } from '@angular/core';
// import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
// import { exhaustMap, map, switchMap } from 'rxjs/operators';
// import { AuthService } from 'src/app/components/core/services/auth.service';
// import { cargarSesion, loginAction } from './login.action';

// @Injectable()
// export class AuthEffects {

//   constructor(private actions$: Actions, private authService: AuthService) {}  

//   iniciarSesionEffect = this.actions$.pipe(
//     ofType(loginAction),
//     switchMap((action) =>
//       this.authService.login(action.data).pipe(
//         map((usuario) => cargarSesion({ usuario }))
//       )
//     )
//   );
// }