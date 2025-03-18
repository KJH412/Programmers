function solution(n, w, num) { 
    var answer = 0;
    
    let res = 1;
    
    const h = Math.ceil(n / w); // 총 층 개수
    const target = Math.ceil(num / w); // num이 위치한 층
    const remainBox = n % w || n; // n의 마지막 행에서 남은 개수
    const remainNumBox = num % w || num; // num이 위치한 열 번호
    
    if (h % 2 === target % 2 && remainBox < remainNumBox) res -= 1;
    if (h % 2 !== target % 2 && remainBox + remainNumBox <= w) res -= 1;
    answer = h - target + res;
    
    return answer;

}
/* w=3 n=13 num=6,  6 = arr[1][0] -> arr[i>=1][0]개수
  arr = [
         0  [1,2,3], 
         1  [6,5,4],
         2  [7,8,9],  
         3  [12,11,10],
         4  [13]
       ]
*/

/*
    //몫 0이면 1(층)으로 올림. n=13, 13/3= 4...1 -> 총 5층
    let h = Math.ceil(n / w); 
    let arr = Array.from({ length: h }, () => []); //2차원 배열 저장
   
    let boxNumber = 1; //쌓이는 박스 번호
        
    for(let i=0; i < h; i++) {
        if (i % 2 === 0) { // 왼 > 오
            for (let j = 0; j < w && boxNumber <= n; j++) {
                arr[i].push(boxNumber++);
                
            }
        } else { // 오 > 왼
            for(let j = w - 1; j >= 0 && boxNumber <= n; j--) {
                arr[i].unshift(boxNumber++); // 오른쪽부터
            }
        }
    }
      
    if (w === 1) {
        return n - num + 1; // `num`부터 `n`까지 모든 박스를 꺼내야 함
    }
    
    //초기값
    let row = -1; 
    let col = -1;
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] === num ){
                row = i;
                col = j;
                break;
            }   
        }
        if(row !== -1) break; //위치 있으면 중지
    }
    if (row === -1) return 0; 
    
    let count = 0;
    for(let i = h-1; i >= row; i--){
        if(arr[i][col] != 0) {
            count ++;
        }
    }
    
    return count;
*/