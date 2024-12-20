export type CodeSnippet = {
    id: string;
    title: string;
    description: string;
    language: string;
    code: string;
    category: 'Algorithms' | 'Data Structures' | 'Projects' | 'Assignments' | 'GFG160';
};

export const codeSnippets: CodeSnippet[] = [
    {
        id: '1',
        title: 'Binary Search Implementation',
        description: 'Efficient binary search algorithm implementation in Python',
        language: 'python',
        category: 'Algorithms',
        code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1

# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 7
result = binary_search(arr, target)
print(f"Element {target} found at index: {result}")`,
    },
    {
        id: '2',
        title: 'Singly Linked List',
        description: 'Basic linked list data structure with core operations',
        language: 'cpp',
        category: 'Data Structures',
        code: `
#include <stdio.h>
#include <stdlib.h>

// Define the structure for a linked list node
struct Node {
    int data;
    struct Node* next;
};

// Function to create a linked list of n elements
struct Node* createLinkedList(int n) {
    struct Node* head = NULL;
    struct Node* temp = NULL;
    struct Node* newNode = NULL;
    int data, i;

    // Loop to create 'n' nodes
    for (i = 1; i <= n; i++) {
        printf("Enter data for node %d: ", i);
        scanf("%d", &data);

        // Create a new node
        newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = data;
        newNode->next = NULL;

        if (head == NULL) {
            head = newNode;
        } else {
            temp->next = newNode;
        }
        temp = newNode;
    }
    return head;
}

// Function to insert a node at the beginning
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = *head;
    *head = newNode;
}

// Function to insert a node at the end
void insertAtEnd(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;

    if (*head == NULL) {
        *head = newNode;
        return;
    }

    struct Node* temp = *head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = newNode;
}

// Function to insert after a specific element
void insertAfter(struct Node* head, int key, int data) {
    struct Node* temp = head;
    while (temp != NULL && temp->data != key) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Element %d not found!\n", key);
        return;
    }

    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = temp->next;
    temp->next = newNode;
}

// Function to insert before a specific element
void insertBefore(struct Node** head, int key, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;

    if (*head == NULL) {
        printf("The list is empty!\n");
        return;
    }

    if ((*head)->data == key) {
        newNode->next = *head;
        *head = newNode;
        return;
    }

    struct Node* temp = *head;
    while (temp->next != NULL && temp->next->data != key) {
        temp = temp->next;
    }

    if (temp->next == NULL) {
        printf("Element %d not found!\n", key);
        return;
    }

    newNode->next = temp->next;
    temp->next = newNode;
}

// Function to insert a node at a specific position
void insertAtPosition(struct Node** head, int data, int position) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;

    // If the position is 1, insert at the beginning
    if (position == 1) {
        newNode->next = *head;
        *head = newNode;
        return;
    }

    struct Node* temp = *head;

    // Traverse to the position before where the node should be inserted
    for (int i = 1; temp != NULL && i < position - 1; i++) {
        temp = temp->next;
    }

    // If the position is greater than the number of nodes
    if (temp == NULL) {
        printf("Position %d does not exist in the list. Insertion failed.\n", position);
        free(newNode);
        return;
    }

    // Insert the node at the specified position
    newNode->next = temp->next;
    temp->next = newNode;
}

// Function to delete a node at the beginning
void deleteAtBeginning(struct Node** head) {
    if (*head == NULL) {
        printf("List is already empty!\n");
        return;
    }

    struct Node* temp = *head;
    *head = (*head)->next;
    free(temp);
}

// Function to delete a node at the end
void deleteAtEnd(struct Node** head) {
    if (*head == NULL) {
        printf("List is already empty!\n");
        return;
    }

    struct Node* temp = *head;
    struct Node* prev = NULL;

    if (temp->next == NULL) {
        free(temp);
        *head = NULL;
        return;
    }

    while (temp->next != NULL) {
        prev = temp;
        temp = temp->next;
    }

    // prev->next = NULL;
    prev->next = temp->next; //General method applicable for all
    
    free(temp);
}

// Function to delete a specific node
void deleteNode(struct Node** head, int key) {
    struct Node* temp = *head;
    struct Node* prev = NULL;

    if (temp != NULL && temp->data == key) {
        *head = temp->next;
        free(temp);
        return;
    }

    while (temp != NULL && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Node with value %d not found!\n", key);
        return;
    }

    prev->next = temp->next;
    free(temp);
}

// Function to delete a node after a specific element
void deleteAfter(struct Node* head, int key) {
    struct Node* temp = head;
    while (temp != NULL && temp->data != key) {
        temp = temp->next;
    }

    if (temp == NULL || temp->next == NULL) {
        printf("No node to delete after %d\n", key);
        return;
    }

    struct Node* toDelete = temp->next;
    temp->next = toDelete->next;
    free(toDelete);
}

// Function to delete a node before a specific element
void deleteBefore(struct Node** head, int key) {
    if (*head == NULL || (*head)->next == NULL) {
        printf("No node to delete before %d\n", key);
        return;
    }

    struct Node* temp = *head;
    struct Node* prev = NULL;
    struct Node* beforePrev = NULL;

    if (temp->data == key) {
        printf("There is no node before %d\n", key);
        return;
    }

    while (temp->next != NULL && temp->next->data != key) {
        beforePrev = prev;
        prev = temp;
        temp = temp->next;
    }

    if (temp->next == NULL) {
        printf("Element %d not found!\n", key);
        return;
    }

    if (prev == NULL) {
        *head = temp->next;
        free(temp);
    } else {
        beforePrev->next = temp->next;
        free(temp);
    }
}

// Function to delete a node at a specific position
void deleteAtPosition(struct Node** head, int position) {
    if (*head == NULL) {
        printf("List is empty! Nothing to delete.\n");
        return;
    }

    struct Node* temp = *head;

    if (position == 1) {
        *head = temp->next;
        free(temp);
        return;
    }

    struct Node* prev = NULL;
    for (int i = 1; temp != NULL && i < position; i++) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Position %d does not exist in the list.\n", position);
        return;
    }

    prev->next = temp->next;
    free(temp);
}

// Function to display the linked list
void printList(struct Node* head) {
    struct Node* temp = head;

    if (head == NULL) {
        printf("List is empty!\n");
        return;
    }

    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

// Main function with switch-case for operations
int main() {
    struct Node* head = NULL;
    int n, choice, data, key, position;

    // Create a linked list with 'n' elements
    printf("Enter the number of nodes you want to create: ");
    scanf("%d", &n);
    head = createLinkedList(n);

    while (1) {
        printf("\n*** Menu ***\n");
        printf("1. Insert at the beginning\n");
        printf("2. Insert at the end\n");
        printf("3. Insert after an element\n");
        printf("4. Insert before an element\n");
        printf("5. Insert at a specific position\n");
        printf("6. Delete at the beginning\n");
        printf("7. Delete at the end\n");
        printf("8. Delete a specific element\n");
        printf("9. Delete after an element\n");
        printf("10. Delete before an element\n");
        printf("11. Delete at a specific position\n");
        printf("12. Display the list\n");
        printf("13. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter data to insert at the beginning: ");
                scanf("%d", &data);
                insertAtBeginning(&head, data);
                break;
            case 2:
                printf("Enter data to insert at the end: ");
                scanf("%d", &data);
                insertAtEnd(&head, data);
                break;
            case 3:
                printf("Enter element to insert after: ");
                scanf("%d", &key);
                printf("Enter data to insert: ");
                scanf("%d", &data);
                insertAfter(head, key, data);
                break;
            case 4:
                printf("Enter element to insert before: ");
                scanf("%d", &key);
                printf("Enter data to insert: ");
                scanf("%d", &data);
                insertBefore(&head, key, data);
                break;
            case 5:
                printf("Enter the position to insert at: ");
                scanf("%d", &position);
                printf("Enter data to insert: ");
                scanf("%d", &data);
                insertAtPosition(&head, data, position);
                break;
            case 6:
                deleteAtBeginning(&head);
                break;
            case 7:
                deleteAtEnd(&head);
                break;
            case 8:
                printf("Enter value of node to delete: ");
                scanf("%d", &key);
                deleteNode(&head, key);
                break;
            case 9:
                printf("Enter element to delete after: ");
                scanf("%d", &key);
                deleteAfter(head, key);
                break;
            case 10:
                printf("Enter element to delete before: ");
                scanf("%d", &key);
                deleteBefore(&head, key);
                break;
            case 11:
                printf("Enter the position to delete: ");
                scanf("%d", &position);
                deleteAtPosition(&head, position);
                break;
            case 12:
                printList(head);
                break;
            case 13:
                printf("Exiting program.\n");
                exit(0);
            default:
                printf("Invalid choice! Please try again.\n");
        }
    }
    return 0;
}

    `,


    },
    {
        id: '3',
        title: 'Day 1 - Second Largest',
        description: 'Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn\'t exist then return -1.\n Note: The second largest element should not be equal to the largest element.',
        language: 'python',
        category: 'GFG160',
        code: `
class Solution:
    def getSecondLargest(self, arr):
        if len(arr) < 2:
            return -1
        
        largest = second_largest = float('-inf')
        
        for num in arr:
            if num > largest:
                largest = num
        
        for num in arr:
            if num > second_largest and num < largest:
                second_largest = num
        
        return second_largest if second_largest != float('-inf') else -1
        
        
    `,
    },
    {
        id: '4',
        title: 'Day 2 - Move All Zeroes to End',
        description: 'Given an array arr[]. Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements. Do the mentioned change in the array in place.',
        language: 'python',
        category: 'GFG160',
        code: `
class Solution:
    def pushZerosToEnd(self, arr):
        non_zero_index = 0
        
        for i in range(len(arr)):
            if arr[i] != 0:
                arr[non_zero_index] = arr[i]
                non_zero_index += 1
        
        while non_zero_index < len(arr):
            arr[non_zero_index] = 0
            non_zero_index += 1
        
        return arr
        
    `,
    },
    {
        id: '5',
        title: 'Day 3 - Reverse an Array',
        description: 'You are given an array of integers arr[]. Your task is to reverse the given array.',
        language: 'python',
        category: 'GFG160',
        code: `
class Solution:
    def reverseArray(self, arr):
        left, right = 0, len(arr) - 1
        
        while left < right:
            # Swap elements at left and right pointers
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1
        
        return arr
    `,
    },
    {
        id: '6',
        title: 'Factorial of a given number',
        description: 'A number is given. The factorial of the number is to be obtained',
        language: 'cpp',
        category: 'Assignments',
        code: `
#include<stdio.h>
int main(){
    int i,n,factorial=1;
    printf("Enter the number:\n");
    scanf("%d",&n);
    for(i=n;i>=1;i--){
        factorial=factorial*i;
    }
    printf("Factorial of %d is %d",n,factorial);
    return 0;
}
    `,
    },
    {
        id: '7',
        title: 'Day 4 - Rotate Array',
        description: 'Given an unsorted array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.',
        language: 'python',
        category: 'GFG160',
        code: `
class Solution:
    # Function to rotate an array by d elements in counter-clockwise direction. 
    def rotateArr(self, arr, d):
        if not arr:
            return
        
        n = len(arr)
        
        d = d % n
        
        arr[:] = arr[d:] + arr[:d]
    `,
    },
    {
        id: '8',
        title: 'Day 5 - Next Permutation',
        description: 'Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order). ',
        language: 'python',
        category: 'GFG160',
        code: `
class Solution:
    def nextPermutation(self, arr):
        n = len(arr)
        i = n - 2
        while i >= 0 and arr[i] >= arr[i + 1]:
            i -= 1

        if i >= 0:
            j = n - 1
            while arr[j] <= arr[i]:
                j -= 1
            arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1:] = reversed(arr[i + 1:])

    `,
    },
    {
        id: '9',
        title: 'Day 6 - Majority Element II',
        description: 'You are given an array of integer arr[] where each number represents a vote to a candidate. Return the candidates that have votes greater than one-third of the total votes, If there\'s not a majority vote, return an empty array.',
        language: 'python',
        category: 'GFG160',
        code: `
class Solution:
    def findMajority(self, arr):
        # First Pass: Find potential candidates
        candidate1, candidate2 = None, None
        count1, count2 = 0, 0
        
        for num in arr:
            if candidate1 == num:
                count1 += 1
            elif candidate2 == num:
                count2 += 1
            elif count1 == 0:
                candidate1, count1 = num, 1
            elif count2 == 0:
                candidate2, count2 = num, 1
            else:
                count1 -= 1
                count2 -= 1
        
        # Second Pass: Verify candidates
        count1, count2 = 0, 0
        for num in arr:
            if num == candidate1:
                count1 += 1
            elif num == candidate2:
                count2 += 1
        
        # Check if candidates meet the n/3 criterion
        result = []
        n = len(arr)
        if count1 > n // 3:
            result.append(candidate1)
        if count2 > n // 3:
            result.append(candidate2)
        
        return sorted(result)

    `,
    },
    {
        id: '10',
        title: 'Day 7 - Stock Buy and Sell – Multiple Transaction Allowed',
        description: 'The cost of stock on each day is given in an array price[]. Each day you may decide to either buy or sell the stock at price[i], you can even buy and sell the stock on the same day. Find the maximum profit that you can get.',
        language: 'python',
        category: 'GFG160',
        code: `
class Solution:
    def maximumProfit(self, prices) -> int:
        max_profit = 0
        n = len(prices)
        
        for i in range(n - 1):
            if prices[i + 1] > prices[i]:
                max_profit += prices[i + 1] - prices[i]
        
        return max_profit
    `,
    },
    {
        id: '11',
        title: 'Day 8 - Stock Buy and Sell – Max one Transaction Allowed',
        description: 'Given an array prices[] of length n, representing the prices of the stocks on different days. The task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell. If it is not possible to make a profit then return 0.',
        language: 'python',
        category: 'GFG160',
        code: `
class Solution:
    def maximumProfit(self, prices):
        # Initialize variables
        min_price = float('inf')  # Start with the highest possible value
        max_profit = 0            # Maximum profit is initially zero

        # Loop through each price in the array
        for price in prices:
            # Update the minimum price encountered so far
            if price < min_price:
                min_price = price
            # Calculate profit and update max_profit if the current profit is greater
            elif price - min_price > max_profit:
                max_profit = price - min_price

        # Return the maximum profit found
        return max_profit
    `,
    },





    // Coming soon codes are below this point
    {
        id: '100000000000005',
        title: 'Coming soon...',
        description: "Coming soon...",
        language: 'c',
        category: 'Projects',
        code: ``,
    },
    
    {
        id: '100000000000001',
        title: 'Coming soon...',
        description: "Coming soon...",
        language: 'c',
        category: 'Data Structures',
        code: ``,
    },

    {
        id: '100000000000002',
        title: 'Coming soon...',
        description: "Coming soon...",
        language: 'c',
        category: 'Algorithms',
        code: ``,
    },
    
    {
        id: '100000000000003',
        title: 'Coming soon...',
        description: "Coming soon...",
        language: 'c',
        category: 'GFG160',
        code: ``,
    },
    {
        id: '100000000000004',
        title: 'Coming soon...',
        description: "Coming soon...",
        language: 'c',
        category: 'Assignments',
        code: ``,
    }
    // Add more code snippets here
];