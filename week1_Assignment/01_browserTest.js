
function browserDetails(){
switch(browserName){
    case 'chrome':
        {
            return 'This is  chrome browser with version 124 '     
        }

   case 'Firefox':
        {
            return 'This is  FireFix browser with version 119 '            
        }
    case 'edge':
            {
                return 'This is  Edge browser with version 123 '     
            }
    
    case 'Safari':
            {
                return 'This is  Safari browser with version 17.4 '                
            }
     default:
        {
            return 'Unsupported browser'
        }

    }
}


let browserName = 'Safari'
console.log(browserDetails());


