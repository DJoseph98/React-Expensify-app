import firebase from 'firebase';  //permet de créer l'objet firebase et d'avoir accées à toute les fonctions
import moment from 'moment';

var firebaseConfig = {
    apiKey: "AIzaSyCxHSNuC1nCCjLJP1k3G3dmDr0ivXij7d0",
    authDomain: "expensify-8a8e5.firebaseapp.com",
    projectId: "expensify-8a8e5",
    storageBucket: "expensify-8a8e5.appspot.com",
    messagingSenderId: "580674339661",
    appId: "1:580674339661:web:50ce9198eca1c8f6aead04"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const onExpenseRemove = database.ref('expense').on('child_removed', (snapshot) => { // trigger pour chaque expense supprimer
    console.log(snapshot.key, snapshot.val());
}, (error) => {
    console.log(error);
});

const onExpenseChange = database.ref('expense').on('child_changed', (snapshot) => { // trigger pour chaque expense supprimer
    console.log(snapshot.key, snapshot.val());
}, (error) => {
    console.log(error);
});

/* const onExpenseChange = database.ref('expense').on('value', (snapshot) => {
    const parseTab = [];
    snapshot.forEach((snapshotChild) => {
        parseTab.push({
            id: snapshotChild.key,
            ...snapshotChild.val()
        })
    });
    console.log(parseTab);
}, (error) => {
    console.log(error);
}); */

/* setTimeout(function(){ database.ref('expense/-MWYu3sf6P-KTSoZyOrV/price').set(5); }, 3000);

setTimeout(function(){ database.ref('expense/-MWYu3sgILm2HrX8peUi/price').set(25); }, 7000);  */


/* const expenses = [{
    description: 'Gaz Bill',
    note: 'bill gazz',
    price: 2645,
    createdAt: moment().format("MM-DD-YYYY")
},
{
    description: 'Electric Bill',
    note: 'Electric gazz',
    price: 264,
    createdAt: moment().format("MM-DD-YYYY")
},
{
    description: 'parking Bill',
    note: 'parking gazz',
    price: 26,
    createdAt: moment().format("MM-DD-YYYY")
}]; */

/* database.ref('expense').push(expenses[0]);
database.ref('expense').push(expenses[1]);
database.ref('expense').push(expenses[2]); */

/* database.ref().set({
    name: 'Dyder',
    age: 28,
    isSingle: false,
    stressLevel: 6,
    job_company: {
        name: 'CruiseTech',
        category: 'Tourism',
        city: 'Monaco'
    },
    location: {
        city: 'Monaco',
        postal_code: 98000
    }
});

const valueChange = database.ref().on('value', (snapshot) => { // ajoute un event listener a chaque fois qu'une donnée change
    const data = snapshot.val();
    console.log(`${data.name} work on ${data.job_company.name} at ${data.job_company.city}`);
}, (error) => {
    console.log(error);
});

setTimeout(function(){ database.ref('job_company/name').set('Derivco'); }, 3000);

setTimeout(function(){ database.ref().off('child_changed', valueChange); }, 5000); // pour ce changement, je n'appelle pas la fonction d'écoute de changement

setTimeout(function(){ database.ref('job_company/city').set('Tallinn'); }, 7000); */

/* database.ref().set({
    name: 'Dyder',
    age: 28,
    isSingle: false,
    stressLevel: 6,
    job_company: {
        name: 'CruiseTech',
        category: 'Tourism',
        city: 'Monaco'
    },
    location: {
        city: 'Monaco',
        postal_code: 98000
    }
});

database.ref('attributes').set({ // set from firebase return a Promise
    height: 1.76,
    weight: 92
}).then(() => {
    console.log('data updates');
}).catch((error) => {
    console.log(error);
});

database.ref('isSingle').remove()
.then(() => {
    console.log('data updates');
}).catch((error) => {
    console.log(error);
});

database.ref().update({
    stressLevel: 9,
    'job_company/name': 'Derivco',
    'job_company/category': 'Gaming',
    'job_company/city': 'Tallinn',
}); */
