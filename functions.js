x = findMax(10, 20, 30, 40, 50, 60, 70, 80, 90);

function findMax(){
    let max = -Infinity;
    for(let i = 0; i<arguments.length; i++){
        if(arguments[i]> max){
            max = arguments[i];
        }
    }

    console.log(max)
}


x = sum(10, 20, 30, 40, 50, 60, 70, 80, 90);

function sum(){
    let sum = 0;
    for(let i =0; i<arguments.length; i++){
        if(arguments[i]> sum){
            sum += arguments[i];
        }
    }

    console.log(sum)


}