import java.util.Arrays;
class Solution {
    public int solution(int[] array) {
        int answer = 0;
        
        Arrays.sort(array);
        int maxNum = array[array.length-1];
        int cnt[] = new int[maxNum+1];
        
        for(int i=0; i<array.length; i++){
           cnt[array[i]]++;
        }
        
        int max = cnt[0];
        
        for(int i=1; i<cnt.length; i++){
            if(max< cnt[i]){
                max = cnt[i];
                answer = i;
            }else if (max==cnt[i]){
                answer = -1;
            }
        }
        
        
        return answer;
    }
}