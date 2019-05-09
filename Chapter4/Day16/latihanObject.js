var supermanObj = {
    id: "1a2b3c",
    name: "Superman",
    age: 200,
    favorites: [
        "coding",
        "reading",
        {
        sports: ["parkour", "hill climbing"]
        }
    ],
    address: {
        street: "Planet Krypton",
        zipCode: 54213
    }
};

console.log(supermanObj.id);
console.log(supermanObj['id']);

supermanObj.hoho = 'apasi'
console.log(supermanObj);

supermanObj.favorites.push('josh');
console.log(supermanObj);