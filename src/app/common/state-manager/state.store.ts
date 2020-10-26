import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { GitHubUser } from '../interfaces/github-data';

export interface SessionState {
    user: GitHubUser
}

export function createInitialState(): SessionState {
    return {
        user: null
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
    constructor() {
        super(createInitialState());
    }
}

@Injectable()
export class SessionService {
    constructor(private sessionStore: SessionStore) { }

    updateUser(newUser: GitHubUser) {
        this.sessionStore.update({ user: newUser });
    }
}