import index from './components/index.vue';
import contactus from './components/contactus.vue';
import signin from './components/signin.vue';
import signup from './components/signup.vue';
import dashboardCitoyen from './components/dashboardCitoyen.vue';
import dashboardMaire from './components/dashboardMaire.vue';
import dashboardResponsable from './components/dashboardResponsable.vue';
import dashboardAdmin from './components/dashboardAdmin.vue';
import router from 'vue-router'

export default [
{ path : '/' , component :index },
{ path : '/contactus', component : contactus },
{ path : '/signin', component : signin },
{ path : '/signup', component : signup },
{ path : '/dashboardCitoyen', component : dashboardCitoyen },
{ path : '/dashboardMaire', component : dashboardMaire },
{ path : '/dashboardResponsable', component : dashboardResponsable },
{ path : '/dashboardAdmin', component : dashboardAdmin },

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/signin',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: dashboardCitoyen})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'Citoyen'})
        }
    }else {
        next()
    }
})


];



