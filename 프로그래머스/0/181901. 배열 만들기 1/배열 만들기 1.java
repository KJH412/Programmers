import java.util.*;

class Solution {
    public List<Integer> solution(int n, int k) {
        //int[] answer = {};
        List<Integer> arr = new ArrayList<>();
        
        //1<= k[] <=n k의배수 오름차순
        //k=3, n=10, 3(3*1),6(3*2),9 
        for(int i=1; k*i<=n; i++){ 
            arr.add(k*i);
                
        }
        return arr;
    }
}