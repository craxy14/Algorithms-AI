def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  
    return -1  


print(linear_search([9,4,7,5,2,8,3,6], 5))