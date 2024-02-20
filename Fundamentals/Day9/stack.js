// STACK
// LIFO (Last In - First Out)

class Stack {
    maxSize  = 3
    container = []

    push(data){
        if(this.container.length < this.maxSize){
            this.container.push(data)
        }
    }
    pop(){
        this.container.pop()
    }
}
let newStack = new Stack()
newStack.push('Page-01')
newStack.push('Page-02')
newStack.push('Page-03')
newStack.push('Page-04')
newStack.push('Page-05')
newStack.pop()

console.log(newStack)