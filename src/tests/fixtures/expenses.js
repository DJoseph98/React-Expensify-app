import moment from 'moment';

export default [
    {
        id:'1',
        square:'',
        description:'Water Bill',
        price: 2500,
        createdAt:moment(0)
    },
    {
        id:'2',
        square:'',
        description:'Gaz Bisssll',
        price: 25000,
        createdAt:moment(0).subtract(4, 'days').valueOf() // car comparaison avec date de début, génère une date 4 jour inférieur au jour 0
    },
    {
        id:'3',
        square:'',
        description:'Train Bill',
        price: 20,
        createdAt:moment(0).add(4, 'days').valueOf() // car comparaison avec date de fin, génère une date 4 jour supérieur au jour 0
    }
];