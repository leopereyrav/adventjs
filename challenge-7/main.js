function drawGift(size, symbol) {
    if (size == 1) {
        return '#\n'
    }

    let gift = '';
    
    gift += ' '.repeat(size-1)+'#'.repeat(size)+'\n';
    
    for (let i = 0; i < size-2; i++) {
        gift += ' '.repeat(size-2-i)
        +'#'+symbol.repeat(size-2)
        +'#'+symbol.repeat(i)+'#'
        +'\n';
    }
    
    gift += '#'.repeat(size)+symbol.repeat(size-2)+'#'+'\n';

    for (let i = 0; i < size-2; i++) {
        gift += '#'+symbol.repeat(size-2)
        +'#'+symbol.repeat(size-3-i)
        +'#'
        +'\n';
    }

    gift += '#'.repeat(size)+'\n';

    return gift;
}

console.log(drawGift(4, '+'));