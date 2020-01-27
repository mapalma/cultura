export const state = () => ({
    pages: [],
    mainMenu: []
});

export const getters = {
    getPage: (state) => (slug) => {
        return state.pages.find(page => page.fields.slug === slug)
    },
    getPages: (state) => {
        return state.pages
    },
    getMainMenu: (state) => {
        return state.mainMenu
    }
}

export const mutations = {

    setPages: (state, pages) => {
        state.pages = pages;
    },
    setMainMenu: (state, pages) => {
        state.mainMenu = pages.filter((item) => {
            if (item.fields.mainNav && !item.fields.hasParent) {
                if (item.fields.isParent) {
                    let subMenuItems = pages.filter((submenuItem) => {
                        if (submenuItem.fields.hasParent && (submenuItem.fields.parentSlug === item.fields.slug)) {
                            return submenuItem;
                        }
                    });
                    item.fields["subMenuItems"] = subMenuItems;
                }
                return item;
            }
        });
    }
}
