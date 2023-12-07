function manufacture(gifts, materials) {
    return gifts.filter(gift => {
        for (let letter of gift) {
            if (!materials.includes(letter)) {
                return false;
            }
        }
        return true;
    });
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials))