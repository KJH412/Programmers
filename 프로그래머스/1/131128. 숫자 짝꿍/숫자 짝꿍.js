function solution(X, Y) {
    var answer = '';
    
    let arrX = X.split(""); 
    let arrY = Y.split("");
    let common = []; //짝궁 값 넣을 배열
    
    //X = "1231", Y = "2312"
    //arrY = ['2', '3', '1', '2'];

    for(let i=0; i<10; i++){
      //각 배열에서 숫자i와 같은 값 개수
      //i=1일때, arrX=['1','1']이므로 배열 길이 2 반환  
      //i=1일때, arrY=['1']이므로 배열 길이 1 반환  
      let x = arrX.filter(x => Number(x) === i).length; 
      let y = arrY.filter(y => Number(y) === i).length; 
      //i가 등장하는 최소 개수만큼 추가 common = ['1']
      //최소 획수 만큼 repeat , Math.min(2,1) -> 1번 
      //1 -> '1' ->  '11' -> common에 추가
      common += i.toString().repeat(Math.min(x,y));
    }
    
    let filterZero = common.split("").filter(x => Number(x) === 0).length === common.length;
    
    if(common.length === 0) {
        return "-1"
    }else if(filterZero){
         return "0"
    }

    //내림차순, 배열->문자
    answer = common.split("").reverse().join("")
    
    
    return answer;
}