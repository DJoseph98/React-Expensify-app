const moment = require.requireActual('moment'); // un mock permet de surcharger une librairie pour des données de test qui change

export default (timestamp=0) => { // ici si moment() appelé sans argument, au lieu de retourner le timestamp actuelle, il retournera celui à la date 0
    return moment(timestamp);
}