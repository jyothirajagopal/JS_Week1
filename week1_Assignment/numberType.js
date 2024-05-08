
function numberType(num)
{

    if(num>0)
        return('Number is Positive')
    else if(num<0)
        return(('Number is Negative'))
    else
      return('Number is Zero')  
}

let number = 1200
console.log(numberType(number))
