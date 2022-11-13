function sum(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    a = Number(a);
    b = Number(b);

    let x = 0, check = true;    

    for(i = a; i <= b; i++){
        if(i == 1){
            continue
        }

        check = true;
        for(j = 2; j <= Math.sqrt(i); j++){
            if(i % j == 0){
                check = false;
            }
        }
        if(check == true){
            x += i;
        }
    }

    let sum = x;

    document.getElementById('result').innerHTML = sum;
}