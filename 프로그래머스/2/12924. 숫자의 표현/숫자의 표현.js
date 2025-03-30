function solution(n) {
    let count = 0;
  
    for(let i=1; i <= n; i++){
        let sum = 0;
        for(let j = i; sum <= n ; j++){ //합이 n과 같으면 끝
            sum += j ;
            if(sum === n && j >= i){
                count ++;
                break;
            }
        }
    }
    
    return count;
}
 /*
    시작 숫자 1(i=1)부터 시작
    1부터 하나씩 더하면서 합 sum을 누적
    sum이 목표 숫자 15보다 작으면 다음 숫자를 더함
    sum이 15랑 같으면 카운트 +1
    sum이 15보다 커지면 더 이상 그 i에서는 안 되므로 다음 i++로 넘어감
*/