import moment from 'moment';

export default [
    {
        id:'1',
        square:'',
        note:'',
        description:'Water Bill',
        price: 2500,
        createdAt:0
    },
    {
        id:'2',
        square:'',
        note:'',
        description:'Gaz Bisssll',
        price: 25000,
        createdAt:moment(0).subtract(4, 'days').valueOf().toString()// car comparaison avec date de début, génère une date 4 jour inférieur au jour 0
    },
    {
        id:'3',
        square:'',
        note:'',
        description:'Train Bill',
        price: 20,
        createdAt:moment(0).add(4, 'days').valueOf().toString() // car comparaison avec date de fin, génère une date 4 jour supérieur au jour 0
    }
];