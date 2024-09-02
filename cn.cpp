#include <bits/stdc++.h>
using namespace std;
int main()
{
    int arr[] = {1, 3, 5, 2, 7};
    int size = sizeof(arr) / sizeof(int);
    for (int i = 0; i < size; i++)
    {
        for (int j = 0; j < size-i-1; j++)
        {
            int temp;
            if (arr[j]>arr[j+1])
            {
             temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp;
            }
            // cout<<arr[i];
        }
        cout<<arr[i];
    }

    return 0;
}