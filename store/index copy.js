// import Vuex from 'vuex'
// import {createClient} from '@/plugins/contentful';
// const contentfulClient = createClient();

// const createStore = () =>  {
//     //creamos el store como una funcion para que sea llamable por Nuxt
//     return new Vuex.Store({

//         state: {
//             courses: [],
//             // course: undefined,
//             pages: [],
//             mainMenu:[]
//         },
//         getters: {
//             getCourses:(state) => {
//                 return state.courses;
//             },
//             getLatest:(state) => {
//                 //for panel course 
//                 return state.courses.slice(0, 3);
//             },
//             getPage:(state) => (slug) => {
//                 return state.pages.find(page => page.fields.slug === slug)
//             },
//             getPages:(state) => {
//                 return state.pages
//             },
//             getMainMenu:(state) =>{
//                return state.mainMenu
//             }
//         },
//         mutations: {
//             setCourses:(state, courses)=> {
//                 state.courses = courses;
//             },
//             setCurrentCourse:(state, course) =>{
//                 state.course = course;
//             },
//             setPages:(state, pages)=> {
//                 // console.log(pages);
//                 state.pages = pages;
//             },
//             setMainMenu:(state, pages) => {
//                 state.mainMenu = pages.filter( (item) => {
//                     if(item.fields.mainNav && !item.fields.hasParent){
//                         if(item.fields.isParent){
//                             let subMenuItems = pages.filter( (submenuItem) => {
//                                 if(submenuItem.fields.hasParent && (submenuItem.fields.parentSlug === item.fields.slug)) {
//                                     return submenuItem;    
//                                 }              
//                             });
//                             item.fields["subMenuItems"]= subMenuItems;
//                         }        
//                         return item;
//                     }     
//                 });
//             }
//         },
//         actions: {
//             nuxtServerInit(vuexContext, context) {
//                 return Promise.all([
//                     // recupera los 3 ultimos cursos
//                     contentfulClient.getEntries({
//                       'content_type': 'cursos',
//                       order: "-fields.starts",
//                       limit: 3
//                     }),
//                     contentfulClient.getEntries({
//                         'content_type': 'pages',
//                         order: 'fields.order',
                      
//                     })
//                   ]).then(([courses, pages]) => {
//                     //send courses.items and pages.items al state
//                     vuexContext.commit('setCourses', courses.items)
//                     vuexContext.commit('setPages', pages.items)
//                     vuexContext.commit('setMainMenu', pages.items)

//                   }).catch(console.error)
                  
//             },
//             setAllCourses({commit}, courses){
//                 commit("setCourses", courses);
//             },
//         }
//     })
// }

// export default createStore