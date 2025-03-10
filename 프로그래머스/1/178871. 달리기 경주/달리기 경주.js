function solution(players, callings) {
    
    //초기 선수 이름과 인덱스 같이 저장
    let playerIndexMap = new Map(); 
    players.forEach((player, index) => playerIndexMap.set(player, index));
    

    for(let i=0; i < callings.length; i++){
        
        let player = callings[i];  //추월한 선수
        let index = playerIndexMap.get(player); //기존 순서에서 추월한 선수와 인덱스 찾기
        
        if(index > 0){ // 첫 번째 선수는 제외
            
            let prevPlayer = players[index-1];
            
            //위치 변경
            [players[index], players[index - 1]] = [players[index-1], players[index]]
            
            //playerIndexMap 업데이트
            playerIndexMap.set(player, index - 1);
            playerIndexMap.set(prevPlayer, index);
        }
    }
    
    return players;
}