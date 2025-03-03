function solution(a, b, n) {
    //주어야 할 빈 병 개수 a, 받는 콜라 개수 b, 내가 갖고 있는 빈병 개수 n
    //a개 갖다주면 b병을 줌. 

    var answer = 0; //받을 수 있는 총 콜라 개수
    var emptyBottle = n; //갖고 있는 빈 병 개수
    
    while(emptyBottle >= a){ //빈병을 줄 수 있을 때 까지 반복
        
        let newBottles = Math.floor(emptyBottle / a) * b; //교환으로 받은 콜라 개수
        
        answer += newBottles
        
        emptyBottle =  newBottles + (emptyBottle % a) //교환 후 남은 빈 병 개수 업데이트
        
    }
    
    return answer;
}