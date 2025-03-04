function solution(board, moves) {
    var answer = 0;
    
    var basket = []; //스택(Stack)
    
    moves.forEach((m) => {
        let col = m-1; //위치 번호를 배열 인덱스값으로 변경
        
        for(let row = 0; row < board.length; row++){
            //1.moves 위치에 인형이 있을 경우
            if(board[row][col] !== 0){  
                let doll = board[row][col];
                board[row][col] = 0; //뽑힌 인형 숫자 0으로 변경
                
                //2.같은 모양 인형이 담길 경우
                if(basket.length > 0 && doll === basket[basket.length-1]){ //뽑은 인형 === 바구니에 담겨 있는 마지막 인형
                    basket.pop();
                    answer += 2;
                }else{
                    basket.push(doll);
                }
                break;
            }
        }
    })
    
    return answer;
}

/*
board=
[ 
    [0,0,0,0,0]  -> board[0][1]~[0][4]
    [0,0,1,0,3]
    [0,2,5,0,1]
    [4,2,4,4,2]
    [3,5,1,3,1]
]   
위치:(1,2,3,4,5)   // moves: [1,5,3,5,1,2,1,4] 

moves: [1.,5.,3.,5.,1,2,1,4] 일때,
바구니:
4-4
1-0
2-2
1-3 vv
5-1 v
3-1 v
5-3 vv
1-4
basket = [4,3,1,1,3,2,0,4] , 터진개수 4
*/