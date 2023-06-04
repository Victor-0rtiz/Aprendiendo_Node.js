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

const function3 = async () => {
    const respuesta = await function1();
    const respuesta2 = await function2();
    console.log(respuesta, " desde await");
    console.log(respuesta2, " desde await");
}






function1()
    .then(resp => {
        console.log(resp)
        return function2;
    })
    .then(resp2 => {
        console.log(resp2);
    })
    .catch(err => console.log(err));


function3()
    .catch(err => console.log(err))