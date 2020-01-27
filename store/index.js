
import { createClient } from '@/plugins/contentful';
const contentfulClient = createClient();

export const state = () => ({
});

export const actions = {

    nuxtServerInit(vuexContext, context) {
        return Promise.all([
            // recupera los 3 ultimos cursos
            contentfulClient.getEntries({
                'content_type': 'cursos',
                order: "-fields.starts",
                limit: 10
            }),
            contentfulClient.getEntries({
                'content_type': 'pages',
                order: 'fields.order',

            })
        ]).then(([courses, pages]) => {
            //send courses.items and pages.items al state
            vuexContext.commit('courses/setCourses', courses.items)
            vuexContext.commit('pages/setPages', pages.items)
            vuexContext.commit('pages/setMainMenu', pages.items)

        }).catch(console.error)
    }
}