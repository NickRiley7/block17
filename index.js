// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
    constructor(data) {
      //data can either be a string or an array of numbers
      if (typeof data === "string") {
        this.data = str.split(",").map((number) => number * 1);
      } else {
        this.data = data;
      }
    }
    count() {
        
        return this.data.length
    }
    
    printNumbers() {
        
        this.data

        for (let index = this.data.length - 1; index >= 0; index--) {
            let number = this.data[index]
            console.log('Index:', index, '\tNumber:', number)
        }
    }
    odds() {
      
        return this.data.filter((num) => num % 2)
    }
    evens() {
      
        return this.data.filter((num) => !(num % 2))
    }
    sum() {
      
        return this.data.reduce((total, current) => total + current)
    }
    product() {
      
        let prod = 1
      for (let i = 0; i < this.data.length; i++) {
        prod = prod * this.data[i]
      }

      return this.data.reduce((acc, num) => acc * num, 1)
    }
    greaterThan(target) {
      
        this.data.filter((num) => num > target)
    }
    howMany(target) {
      
        let count = 0
      this.data.forEach((number) => {
        if (number == target) {
            count += 1
        }
      })

      return count
    }
  }
  
  //Prompt the user for a list of integers separated by commas
  const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
  
  //create an instance of numbers
  const n1 = new Numbers(str);
  console.log(n1.count()); //returns count of numbers
  n1.printNumbers(); //prints the number along with their indexes
  console.log(n1.odds()); //returns odd numbers
  console.log(n1.evens()); //returns even numbers
  console.log(n1.sum()); //returns sum of numbers
  console.log(n1.product()); //returns product of numbers
  console.log(n1.greaterThan(3)); //returns numbers greater than another number
  console.log(n1.howMany(3)); //return the count of a specific number