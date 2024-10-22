function solution(n, k) {
    var answer = 0;
    
    //64인분 : 64 * 12000 + 6 * 2000 - 6 * 2000 = 768,000원
    //n/10 : 몫(정수)*2000 만큼 제외 , 예를 들어 64인분/10 => 6.4 (소수점 아래 버림)
    answer = (n*12000) + (k*2000) - Math.floor(n/10)*2000
    
    return answer;
}