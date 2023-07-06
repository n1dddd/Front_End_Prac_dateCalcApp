/*
This function does not account for leap years,and it 
also uses months as 31 days flat. This throws off the
calculation slightly, by a couple days** Also this 
calculation does not account for leap years, and
calulating into the future. In the future, i'd maybe 
add an api to handle the dates alongside formik, and 
create further validation for these things(account 
for leap year and future calculations);
*/

export function dateCalculator(date1, date2) {
    //get the millisecond difference between 2 dates
    let diff = Math.floor(date1.getTime() - date2.getTime());

    const day = 1000 * 60 * 60 * 24; //day conversion
    const month = day * 31; //month conversion
    const year = day * 365; //year conversion

    
    const yearsCalc = Math.floor(diff/year);
    diff -= yearsCalc*year; //substract from the original difference, and pass the remainder

    const monthCalc = Math.floor(diff/month)
    diff -= monthCalc*month

    const dayCalc = Math.floor(diff/day);

    const calc = {
        yearsCalc,
        monthCalc,
        dayCalc
    }

    return calc;
}

