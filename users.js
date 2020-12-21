const getUnlinked = require( './linked.js');

const allUsers = [
    {
        id: 100,
        name: "Qasim Salam"
    },
        {
        id: 101,
        name: "Neelam Anwar"
    },
        {
        id: 102,
        name: "Saad Javaid"
    },
        {
        id: 103,
        name: "Talha Masood"
    },
        {
        id: 104,
        name: "Ali Bilal"
    },
        {
        id: 105,
        name: "Zain"
    },
    {
        id: 106,
        name: "Talal Ali"
    },
        {
        id: 107,
        name: "Bilal Zain"
    },
        {
        id: 108,
        name: "Mueez Ali"
    },
];

const linked = [
    {
        id: 106,
        name: "Talal Ali"
    },
    {
        id: 108,
        name: "Mueez Ali"
    },
]


const unlinked = getUnlinked(allUsers, linked);
console.log("Unlinked users are: %s", unlinked.map(item => item.name))