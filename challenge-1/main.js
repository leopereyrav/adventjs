function findFirstRepeated(gifts) {
    const seen = new Set();

    for (const gift of gifts) {
        if (seen.has(gift)) {
            return gift;
        }
        seen.add(gift);
    }
    return -1;
}

const giftIds = [1, 2, 3, 4]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)