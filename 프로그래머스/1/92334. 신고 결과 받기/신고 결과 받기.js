function solution(id_list, report, k) {// 유저id, 신고한 유저id, 정지 기준 횟수
    const newReport = [...new Set(report)]; //중복 제거
    const result = new Array(id_list.length).fill(0); //유저가 받는 메일 개수 배열
    const count = new Array(id_list.length).fill(0);; //신고 횟수
    const stopId = []; //정지된 id
    
    for(let i of newReport){
        let userid = i.split(" ")[0];
        let decUserid = i.split(" ")[1]; //신고한 ID
        let idx = id_list.indexOf(decUserid); //신고받은 id 인덱스
        
        count[idx] += 1;
        
        if(count[idx] >= k){ //정지
            stopId.push(id_list[idx]);
        }
    }
    
    newReport.map((arr, index) => {
        let userid = arr.split(" ")[0];
        let decUserid = arr.split(" ")[1];
        
        if(stopId.indexOf(decUserid) >= 0 ){
            let index = id_list.indexOf(userid);
            result[index] += 1;
        }
    })
    
    return result;
}