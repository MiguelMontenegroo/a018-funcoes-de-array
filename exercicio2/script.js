const array = [1, 2, 3, 4, 5, 6, 7, 8]


//const multiplicaComMap = array.map((item, index, array) => {
    //return item * 3
       // })
    
        //console.log(multiplicaComMap)

        const constTriplos = array.map((item, index, array) => {
        return item * 3
        })
        console.log(constTriplos)

        const metades = array.map((item, index, array) => {
            return item / 2
        })

        console.log(metades)