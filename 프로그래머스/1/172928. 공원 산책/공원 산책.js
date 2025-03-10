function solution(park, routes) {
    var answer = [];
    
    //park=["SOO","OOO","OOO"]	
    
    //공원 가로 세로 길이
    let h = park.length;
    let w = park[0].length;
    let x,y; 
      
    //이동 방향
    const directions = {
        "E": [0, 1], "W": [0, -1], "S": [1, 0], "N": [-1, 0]
    };
    
    //2차원 배열
    let grid = park.map(row => row.split(""));
    
    //시작 위치 x,y
    for(let i=0; i < grid.length; i++){
        
        for(let j=0; j < grid[i].length; j++){
            if(grid[i][j] === 'S'){
                x = i;
                y = j;
                break;
            }
        }   
    }
    
    routes.forEach((r) => {
        //["E 2"]
        let [dir, num] = r.split(" "); //"E", "2"
        num = Number(num);
        let [dirX, dirY] = directions[dir]; //"E": [0, 1]
        
        let numX = x
        let numY = y; 
        
        //좌표 이동
        for(let i=0; i < num; i++){
            numX += dirX; //0 + 0
            numY += dirY; //0 + 1
            
            //벗어난 범위,장애물 있으면 이동 중단
            if(numX < 0 || numX >= h ||
               numY < 0 || numY >= w ||
               grid[numX][numY] === 'X'
              ){
                return;
            }
        }
        
        //이동 후 좌표 업뎃
        x = numX;
        y = numY;
    });
    
    answer = [x,y];
    
    return answer;
}

/*
park = [
  "OSO",
  "OOO",
  "OXO",
  "OOO"
]
routes = ["E 2", "S 3", "W 1"]

첫 번째 줄 (0행): (0,0) ~ (0,2)
두 번째 줄 (1행): (1,0) ~ (1,2)
세 번째 줄 (2행): (2,0) ~ (2,2)
*/