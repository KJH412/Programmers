function solution(price) {
   
    //price : 구매한 옷 가격
    //10만원 5%,30만원 10%, 50만원 20%
    let salePrice;
        
    //조건을 10만원 이상부터가 아니라 50만원 이상일 때 부터 체크해야 함.
    //조건문 설계할 때, 큰 범위부터 먼저 처리해야 작은 범위와 겹치지 않음!
    //300000 <= price < 500000 비교 연산자 한번에 쓸 수 없음. 나눠서 비교!
    if(price >= 500000){
        salePrice = price - (price * 0.2);
        return Math.floor(salePrice);
    }else if(price >= 300000 ){
        salePrice = price - (price * 0.1);
        return Math.floor(salePrice);
    }else if(price >= 100000){
        salePrice = price - (price * 0.05);
        return Math.floor(salePrice);
    }else{
        return price;
    }
    
}