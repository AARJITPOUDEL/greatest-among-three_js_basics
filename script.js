let first = prompt("Enter first number:")
let second = prompt("Enter second number:")
let third = prompt("Enter third number:")

const greatercheck = () =>{
    if (first > second && first > third ){
        document.write(first + "is greatest")
    }
    else if ( second > first && second > third ){
        document.write(second + "is greatest")
    }
    else{
document.write(third + " is greatest")
    }
}
greatercheck();