function solution(numer1, denom1, numer2, denom2) {
    //var answer = [];
    
    let numer = numer1 * denom2 + numer2 * denom1; 
    let denom = denom1 * denom2;  
    let gcd = cal_gcd(numer, denom);
   
    return [numer / gcd, denom/gcd]
}

// 최대 공약수 구하기
function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b)
}