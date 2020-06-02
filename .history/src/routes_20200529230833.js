import index from './components/index.vue';
import contactus from './components/contactus.vue';
import signin from './components/signin.vue';
import signup from './components/signup.vue';
import dashboardCitoyen from './components/dashboardCitoyen.vue';
import dashboardMaire from './components/dashboardMaire.vue';
import dashboardResponsable from './components/dashboardResponsable.vue';
import dashboardAdmin from './components/dashboardAdmin.vue';



export default [
{ path : '/' , component :index },
{ path : '/contactus', component : contactus },
{ path : '/signin', component : signin },
{ path : '/signup', component : signup },
{ path : '/dashboardCitoyen', component : dashboardCitoyen },
{ path : '/dashboardMaire', component : dashboardMaire },
{ path : '/dashboardResponsable', component : dashboardResponsable },
{ path : '/dashboardAdmin', component : dashboardAdmin },



];



