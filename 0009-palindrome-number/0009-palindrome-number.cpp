class Solution {
public:
    bool isPalindrome(int x) {
          long long revn = 0;
    int dup = x;
    while (x > 0) {

        int ld = x % 10;
        revn = (revn * 10) + ld;
        x = x / 10;
    }
    return dup == revn;
}
    
};