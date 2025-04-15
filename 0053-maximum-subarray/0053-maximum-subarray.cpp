class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int  maxi = INT_MIN; 
        int sum = 0;
         int ansst = -1;
         int ansen = -1;

    for (int i = 0; i < nums.size(); i++) {

        if(sum == 0 ) ansst = i;
        sum += nums[i];

        if (sum > maxi) {
            maxi = sum;
            int result = ansst , ansen = i;
        }

    
        if (sum < 0) {
            sum = 0;
        }
    }

    return maxi;
}
};