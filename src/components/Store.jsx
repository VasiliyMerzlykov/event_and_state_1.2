import React from 'react'
import IconSwitch from './IconSwitch';
import ViewList from '@material-ui/icons/ViewList';
import ViewModule from '@material-ui/icons/ViewModule';
import CardsView from './CardsView';
import ListView from './ListView';


const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

let elem = [<ViewList fontSize="large" />, <ViewModule fontSize="large" />];

function Store() {

    const [state, setstate] = React.useState(elem[0]);

    let icon = state;

    function onSwitch() {
        setstate(icon === elem[0] ? elem[1] : elem[0])
    };

    return (
        <div >
            <IconSwitch onSwitch={onSwitch} icon={icon} />
            {icon === elem[0] ? <ListView card={products} /> : <CardsView card={products} />}
        </div>
    );
};

export default Store;
