#include <stdio.h>
void coinChange(int a[], int len, int n)
{
	int b[10];
	int i, c = 0;

	for (i = len - 1; i >= 0; i--) {
		while (n >= a[i]) {
			n = n - a[i];
			b[c++] = a[i];
		}
		if(n == 0)
            break;
	}

	for (i = 0; i < c; i++) {
		printf("%d ", b[i]);
	}
}

int main(void)
{
	int a[10] = { 1, 2, 5, 10, 20, 50, 100, 200, 2000 };
	int n = 93;

	printf("Following is minimal number of change for %d: ", n);
	coinChange(a, 9, n);
	return 0;
}



***************************************

#include<stdio.h>
#define max  100

//arr - will have list of needed coins
int ans[max];

int findMinCoins(int coins[], int size,  int value)
{
    int i, count = 0;

    for(i = 0; i < size; i++)
    {
        //take as much from coins[i]
        while(value >= coins[i])
        {
            //after taking the coin, reduce the value.
            value -= coins[i];
            ans[count] = coins[i];
            count++;
        }
        if(value == 0)
            break;

    }

    return count;
}

int main()
{
    int coins[] = {25,20,10,5};
    int value = 105, i;

    //find the size of the coins array
    int size = sizeof(coins)/sizeof(coins[0]);

    int MinCount = findMinCoins(coins,size,value);

    printf("Total Coins Needed = %d\n",MinCount);

    printf("Coins are:\t");
    for(i = 0; i < MinCount; i++)
        printf("%d ", ans[i]);

    return 0;
}

