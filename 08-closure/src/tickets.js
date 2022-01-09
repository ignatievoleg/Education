function tickets(price) {

     price = price.map(Number);

    let change = {
        25: 0,
        50: 0,
        100: 0
    }
    
    for (let i = 0; i < price.length; i++){
        if(price[i] === 25){
            change[25]++
        }
        if(price[i] === 50){
            if(change[25] > 0){
                change[50]++
                change[25]--
            }else return 'NO'
        }
        if (price[i] === 100){
            if(change[50] > 0 && change[25] > 0){
                change[100]++
                change[50]--
                change[25]--

            }else if( change[25] >= 3){
                change[25] -= 3

            } else return 'NO'
        }
    } return 'YES'
}