import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/components/core/models/auth.state';
import * as fromAuth from './login.reducer';

export const selectorAuth = createFeatureSelector<AuthState>(
  fromAuth.authFeatureKey
);