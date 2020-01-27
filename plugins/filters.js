import Vue from 'vue'

Vue.filter('formatDate', (val) => {

    let dateArray = val.split('T');
    dateArray[0] = dateArray[0].split("-").reverse("").join('/');
    dateArray[1].replace('T', ' ');

    return dateArray.join(' ');
    
});

