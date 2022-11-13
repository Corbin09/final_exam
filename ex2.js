function numberOneTriangle(){
    let a = document.getElementById("num1").value;
    a = Number(a);
    let s = [];
    s[0] = "*";
    
    for(i = 1; i < a; i++){
        s[i] = s[i-1] + "*";
    }

    for(i = 0; i < a; i++){
       document.write(s[i]);
       document.write("<br>");
    }
}