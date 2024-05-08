function launchBrowser()
{
 if(browserName === 'Chrome')
    {
        console.log("BrowserName is Chrome")
    }
    else
    console.log("Other Browser")
}

let browserName ='Chrome';
launchBrowser()  
function runTest(){
    switch (testType) {
        case "Regression":
            {
                console.log ("Regression")
                break
            }
        case "Smoke":
                {
                    console.log ("Smoke")
                    break
                } 
        case "Sanity":
                {
                    console.log ("Sanity")
                     break
                }  
        default:
                    {
                     console.log ("Undefined Type")
                    break
                    }                
    
        
    }

}

let testType = "Regression";
runTest();
