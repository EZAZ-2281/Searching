#include<stdio.h>
int main()
{
    int num[] = {2, 4, 5, 7, 8}; 
    int value = 8;
    int position = -5; 
 
    for(int i = 0; i < 5; i++)
    {
        if(num[i] == value)
        {
            position = i; 
        }
    } 
    if(position == -5){
        printf("Value is not found\n");     
    }else{
        printf("Value is found at index: %d", position); 
    }
}

/* Output: Value is found at index: 4 */
