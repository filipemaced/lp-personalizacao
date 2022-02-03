import TodosDesportos from './pages/Sports/TodosDesportos.svelte'
import Running from './pages/Sports/Running.svelte'
import Basquetebol from './pages/Sports/Basquetebol.svelte'
import Ciclismo from './pages/Sports/Ciclismo.svelte'
import Vela from './pages/Sports/Vela.svelte'
import Futebol from './pages/Sports/Futebol.svelte'
import Golf from './pages/Sports/Golf.svelte'
import Fitness from './pages/Sports/Fitness.svelte'


const routes = [
    {name: '/', component: TodosDesportos},
    { name: 'basquetebol', component: Basquetebol },
    { name: 'ciclismo', component: Ciclismo },
    { name: 'vela', component: Vela },
    { name: 'running', component: Running },
    { name: 'futebol', component: Futebol },
    { name: 'golf', component: Golf },
    { name: 'fitness', component: Fitness },
  ]
  
  export { routes }