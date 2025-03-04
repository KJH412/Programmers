function solution(wallpaper) {
    var answer = []; 
    
    let x = []; //행(row) 좌표 저장
    let y = []; //열(col) 좌표 저장
    
    for(let i=0; i < wallpaper.length; i++){
        for(let j=0; j < wallpaper[i].length; j++){ //wallpaper 해당 줄에서 한 글자씩 
            if( wallpaper[i][j] === "#"){ //ex) ".#..." [0,1] -> x=[0],y=[1] 배열에 저장
                x.push(i);
                y.push(j);
            }
        }
    }
   
   //가장 작은 행(열):행(열) 배열의 최소값
   let min_row = Math.min(...x);
   let min_col =Math.min(...y);
   //가장 큰 행(열):행(열) 배열의 최대값
   let max_row =Math.max(...x);
   let max_col =Math.max(...y);
    
   answer = [min_row, min_col, max_row+1, max_col+1]; //우측 하단 좌표는 +1
    
    
    return answer;
}


/*
wallpaper = [
    ".#...",  (0,1)
    "..#..",
    "...#."   (3,4)
]       
*/