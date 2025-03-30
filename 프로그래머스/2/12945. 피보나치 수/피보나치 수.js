function solution(n) {
    
    let prevF_Two = 0; //F(n-2), F(0)
    let prevF_One = 1; //F(n-1), F(1)
    let Fn = 0 ; //F(n)
    
    for(let i=2; i<=n; i++){
        Fn = (prevF_Two + prevF_One) % 1234567;
        
        prevF_Two = prevF_One;
        prevF_One = Fn;
    }
    return n === 0 ? 0 : Fn ;
}

/*
function solution(n) {
    return F(n) % 1234567;
}
function F(num){
    if(num === 0) return 0;
    if(num === 1) return 1;
    
    return F(num-1)+F(num-2);
}
=> 시간 초과 (큰 수에서는 엄청 느려짐)
*/