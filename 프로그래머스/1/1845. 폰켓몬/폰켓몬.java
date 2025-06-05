import java.util.*;

class Solution {
    public int solution(int[] nums) { //[3,3,3,2,2,4]
      
        //Set: 중복 허용x
        Set<Integer> kinds = new HashSet<>(); 
        
        for(int n : nums){
            kinds.add(n); //중복 번호 제거됨 [3,2,4]
        }
        
        //가질 수 있는 종류의 수 최댓값
        int max = nums.length / 2; 
        
        int answer = Math.min(kinds.size(), max);
        
        return answer;
    }
}