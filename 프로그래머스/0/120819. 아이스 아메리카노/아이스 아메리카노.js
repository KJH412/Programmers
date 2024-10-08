function solution(money) {
    var answer = [];
    let a = Math.floor(money/5500); //잔 수
    let b = money - (5500*a);
    answer[0] = a;
    answer[1] = b;
    return answer;
}