function gradeOfStudent(totalMark)
{
    switch (true) {
    case totalMark>= 400:
            return('Grade A')        
            
    case totalMark>= 300 && totalMark<400:
                return('Grade B')     
    case totalMark>= 200 && totalMark<300:
                return('Grade C')                
    default:
            return('Failed') 
            
    }

}


let totalMark = 350
console.log(gradeOfStudent(totalMark))

