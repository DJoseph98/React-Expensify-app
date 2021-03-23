export default (tabExpenses) => {
        return tabExpenses.reduce((accumulator, element) => (accumulator + element.price), 0); // acumuuator -> cumul , element ->  element, 0 valeur début accumulator
        //return tabExpenses.map((element) => element.price).reduce((sum, value) => sum + value, 0);
}