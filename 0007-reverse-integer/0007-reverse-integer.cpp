class Solution {
public:
    int reverse(int x) {
        
	    int revn = 0;

		while( x != 0 ){

			int ld = x % 10;
            if (revn > INT_MAX / 10 || revn < INT_MIN / 10) {
            return 0; // Handle overflow
        }               
			revn = (revn * 10) + ld;
			x = x / 10;
		}	
		cout<<revn;
        return revn;
            }
};