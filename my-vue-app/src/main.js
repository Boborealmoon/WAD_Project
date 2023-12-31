import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import * as supermarketAPI  from './firebaseService';
import spoonacularObj from './api/spoonacular';
import FitnessCalculatorObj from './api/fitness-calculator';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

//import eventBus
import store from "./store"


//Import Sweet Alert 2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Use solid icons

//Import gsap (Ignore - ZY's test)
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// Add Font Awesome icons to the library
library.add(fas);


// Initialise app
const app = createApp(App);
AOS.init()
// Register Sweet Alert 2
app.use(VueSweetalert2);

// Register Font Awesome component
app.component('font-awesome-icon', FontAwesomeIcon);

// Attach the imported object to global properties
app.config.globalProperties.$smAPI = supermarketAPI;
app.config.globalProperties.$spoonAPI = spoonacularObj;
app.config.globalProperties.$fitCalcAPI = FitnessCalculatorObj;

// Function to register a Vue component
function registerComponent(context, app) {
    for (const path in context) {
      const component = context[path].default;
      const componentName = path
        .replace(/^.+\/([^/]+)\.vue$/, '$1')
        .replace(/\//g, '-');
  
      app.component(componentName, component);
    }
  }
  
// Dynamically import and register all components from the 'components' directory and its subfolders
const componentContext = import.meta.globEager('./components/**/*.vue');
registerComponent(componentContext, app);
app.use(router)
app.use(store)
app.mount('#app')
