
import {createClient} from '@/plugins/contentful';
const contentfulClient = createClient();

export const state = () => ({
    courses:[]
});

export const getters = {
    getCourses:(state) => {
        return state.courses;
    },
    getLatest:(state) => {
        //for panel course 
        return state.courses.slice(0, 3);
    },
};

export const mutations = {
    setCourses:(state, courses)=> {
        state.courses = courses;
    },
    setCurrentCourse:(state, course) =>{
        state.course = course;
    },
};