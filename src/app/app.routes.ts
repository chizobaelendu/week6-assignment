import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Programmes } from './components/programmes/programmes';
import { Resources } from './components/resources/resources';
import { Events } from './components/events/events';
import { Media } from './components/media/media';
import { Opportunities } from './components/opportunities/opportunities';
import { Community } from './components/community/community';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "about", component: About },
    { path: "programmes", component: Programmes },
    { path: "resources", component: Resources },
    { path: "events", component: Events },
    { path: "media", component: Media },
    { path: "opportunities", component: Opportunities },
    { path: "community", component: Community },
    { path: "login", component: Login },
    { path: "signup", component: Signup },
];
