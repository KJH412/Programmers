function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';

    //분과 초 각각 숫자로 변환
    let [videoMM, videoSS] = video_len.split(":").map(Number);
    let [posMM, posSS] = pos.split(":").map(Number); 
    let [opStartMM, opStartSS] = op_start.split(":").map(Number);
    let [opEndMM, opEndSS] = op_end.split(":").map(Number);
    //초로 변환
    let videoTime = videoMM * 60 + videoSS;
    let currentTime = posMM * 60 + posSS;
    let opStartTime = opStartMM * 60 + opStartSS;
    let opEndTime = opEndMM * 60 + opEndSS;
    
    for(let c of commands){
        //영상 위치 체크
        if(currentTime >  videoTime){
            currentTime = videoTime;
        } else if(currentTime < 0){
            currentTime = 0;
        }
        //오프닝 범위일 때
        if(opStartTime <= currentTime && currentTime<= opEndTime){
            currentTime = opEndTime;
        }
        //prev
        if(c === "prev"){
            currentTime -= 10;
        }else if(c === "next"){
             currentTime += 10;
        }
        //영상 위치 체크
        if(currentTime >  videoTime){
            currentTime = videoTime;
        } else if(currentTime < 0){
            currentTime = 0;
        }
        //오프닝 범위일 때
        if(opStartTime <= currentTime && currentTime<= opEndTime){
            currentTime = opEndTime;
        }
    }
    let mm = Math.floor(currentTime/60).toString().padStart(2,'0');  
    let ss = (currentTime % 60).toString().padStart(2,'0');
    
    answer = mm + ":" + ss;
    
    return answer;
}
