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
    title: 'Linked List Implementation',
    description: 'Basic linked list data structure with core operations',
    language: 'cpp',
    category: 'Data Structures',
    code: `class Node {
public:
    int data;
    Node* next;
    
    Node(int val) : data(val), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;
    
public:
    LinkedList() : head(nullptr) {}
    
    void insert(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
    
    void display() {
        Node* temp = head;
        while (temp) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
};`,


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
  }
  // Add more code snippets here
];