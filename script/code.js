let first_number = 15;
let second_number = 17;
let alt = first_number

// The first method
first_number = second_number
second_number = alt
console.log(first_number);
console.log(second_number);

// the second method
let list = [first_number, second_number]
first_number = list[1]
second_number = list[0]
console.log(first_number);
console.log(second_number);

// the third method
class Swap{
    constructor(first_value, second_value){
        this.first_value = first_value
        this.second_value = second_value
    }

    swap(){
        return this.first_value = this.second_value
    }
}

first_number = new Swap(first_number, second_number)
console.log(first_number.swap());
second_number = new Swap(second_number, alt)
console.log(second_number.swap());