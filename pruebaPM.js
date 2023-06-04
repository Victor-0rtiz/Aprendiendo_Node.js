const function1 = () => {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            resolve("Prueba correcta")
        }, 2000);

    })
}
const function2 = () => {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            resolve("Prueba correcta numero 2")
        }, 2000);

    })
}




function1()
    .then(resp => {
        console.log(resp)
        return function2(resp)
    })
    .then(resp2 => {
        console.log(resp2);
    })
    .catch(err => console.log(err))