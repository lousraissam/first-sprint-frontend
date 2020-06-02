import index from './components/index.vue';
import contactus from './components/contactus.vue';
import signin from './components/signin.vue';
import signup from './components/signup.vue';
import dashboardCitoyen from './components/dashboardCitoyen.vue';
import dashboardMaire from './components/dashboardMaire.vue';
import dashboardResponsable from './components/dashboardResponsable.vue';
import dashboardAdmin from './components/dashboardAdmin.vue';
//import {token} from "./users/Activate"
export default [
{ path : '/' , component :index },
{ path : '/contactus', component : contactus },
{ path : '/signin', component : signin },
{ path : '/signup', component : signup },
{ path : '/dashboardCitoyen', component : dashboardCitoyen },
{ path : '/dashboardMaire', component : dashboardMaire },
{ path : '/dashboardResponsable', component : dashboardResponsable },
{ path : '/dashboardAdmin', component : dashboardAdmin },
{ path : '/users/ActivateeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibG91c3JhIiwiZW1haWwiOiJpc3NhbWxvdXNyYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6Imlzc2FtMTIzIiwiaWF0IjoxNTkwOTYxOTYyLCJleHAiOjE1OTA5NjIyNjJ9.4ac5MQijwtGs_87vOkwIXEPnnrUq3rORks0MgLEm6N4' , component : signin }


];



