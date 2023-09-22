
// Compound Interest Formula: A = P(1 + r/n)^(nt)

// where:   A = Future Amount of Money
//          P = Initial Principle Amount
//          r = Annual Interest Rate
//          n = No. of times that interest is compunded per year
//          t = No. of years the money is invested or borrowed for


//-------------------- METHOD - 1 (Breaks down the formula step by step) ----------------------------------------------------------------------------

/*function compoundInterest(principle,noOfTimesInterestCompounded,rateOfInterest,totalNoOfYrs) {

    let r = rateOfInterest/100; // Step-1:convert the rate of interest to decimal form 

    let x = 1 + (r/noOfTimesInterestCompounded); // Step-2: solve (1 + r/n) and assing the value to a variable

    let y = noOfTimesInterestCompounded*totalNoOfYrs; // Step-3: Calculate (nt)

    let z = Math.pow(x,y); // Step-4: Raise (1 + r/n)^nt using the built-in function Math

    let A =  (principle * z).toFixed(2); // Step-5: Multiply step-4 result with the principle Amount

    return `In this case:          
                        Principle Amount(P)                  : $${principle}
                        Rate of Interest(r)                  : ${rateOfInterest}%
                        No. of times Compounded per year(n)  : ${noOfTimesInterestCompounded}
                        Total no. of yrs(t)                  : ${totalNoOfYrs}
                        
                        The Future Amount(A) is              : $${A}`; // Step-6: Here is the Final Amount..!

}

console.log(compoundInterest(50000,10,5,5)); */

//-------------------- END OF METHOD - 1 ------------------------------------------------------------------------------------------------------------


//-------------------- METHOD - 2 ( CI calculation in a Single Line ) -------------------------------------------------------------------------------

function compoundInterest(principle,noOfTimesInterestCompounded,rateOfInterest,totalNoOfYrs) {

    const A = (principle * Math.pow((1+(rateOfInterest/100)/noOfTimesInterestCompounded),(noOfTimesInterestCompounded*totalNoOfYrs))).toFixed(2);

// String Interpolation - Combining Static Text with Dynamic Values to Construct a String Expression!
    
    return `In this case:          
                        Principle Amount(P)                  : $${principle}
                        Rate of Interest(r)                  : ${rateOfInterest}%
                        No. of times Compounded per year(n)  : ${noOfTimesInterestCompounded}
                        Total no. of yrs(t)                  : ${totalNoOfYrs}
                        
                        The Future Amount(A) is              : $${A}`; 
                        
}

console.log(compoundInterest(50000,10,5,5)); 

//--------------------- END OF METHOD - 2 -----------------------------------------------------------------------------------------------------------


//--------------------- METHOD - 3 => Anonymous Function Expression ( A function without a name that is assigned to a Variable ) --------------------

/*let compoundInterest = function(principle,noOfTimesInterestCompounded,rateOfInterest,totalNoOfYrs) {

    const A = (principle * Math.pow((1+(rateOfInterest/100)/noOfTimesInterestCompounded),(noOfTimesInterestCompounded*totalNoOfYrs))).toFixed(2);

    return `In this case:          
                        Principle Amount(P)                  : $${principle}
                        Rate of Interest(r)                  : ${rateOfInterest}%
                        No. of times Compounded per year(n)  : ${noOfTimesInterestCompounded}
                        Total no. of yrs(t)                  : ${totalNoOfYrs}
                        
                        The Future Amount(A) is              : $${A}`; 

}

console.log(compoundInterest(5000,5,5,5)); */

//--------------------- END OF METHOD - 3 -----------------------------------------------------------------------------------------------------------


//--------------------- METHOD - 4 => Arrow Function ( No 'function' keyword and Use '=>' syntax ) --------------------------------------------------

// --------(If the function body consists of a single expression, you can omit the curly braces '{}' , if not you need to use it) -------------------

/*let compoundInterest = (principle,noOfTimesInterestCompounded,rateOfInterest,totalNoOfYrs) => {
    
    const A = (principle * Math.pow((1+(rateOfInterest/100)/noOfTimesInterestCompounded),(noOfTimesInterestCompounded*totalNoOfYrs))).toFixed(2);

    return `In this case:          
                        Principle Amount(P)                  : $${principle}
                        Rate of Interest(r)                  : ${rateOfInterest}%
                        No. of times Compounded per year(n)  : ${noOfTimesInterestCompounded}
                        Total no. of yrs(t)                  : ${totalNoOfYrs}
                        
                        The Future Amount(A) is              : $${A}`; 
                            
    }

console.log(compoundInterest(5000,5,5,5)); */
    
//--------------------- END OF METHOD - 4 --------------------------------------------------------------------------------------------------------------


//--------------------- METHOD- 5 => Arrow Function ( No 'function' keyword and Use '=>' syntax ) ------------------------------------------------------

// ---------------------- ( Without curly braces '{}', simple version of CI code) ----------------------------------------------------------------------

/*let compoundInterest = (principle,noOfTimesInterestCompounded,rateOfInterest,totalNoOfYrs) => 
`The Final Amount A is: $${(principle * Math.pow((1+(rateOfInterest/100)/noOfTimesInterestCompounded),
                            (noOfTimesInterestCompounded*totalNoOfYrs))).toFixed(2)}`;

                            // or
// `In this case:          
//                         Principle Amount(P)                  : $${principle}
//                         Rate of Interest(r)                  : ${rateOfInterest}%
//                         No. of times Compounded per year(n)  : ${noOfTimesInterestCompounded}
//                         Total no. of yrs(t)                  : ${totalNoOfYrs}
                        
//                         The Future Amount(A) is              : $${(principle * Math.pow((1+(rateOfInterest/100)/noOfTimesInterestCompounded),
//                                                                 (noOfTimesInterestCompounded*totalNoOfYrs))).toFixed(2)}`; 

console.log(compoundInterest(5000,5,5,5));*/
    
//--------------------- END OF METHOD - 5 --------------------------------------------------------------------------------------------------------------