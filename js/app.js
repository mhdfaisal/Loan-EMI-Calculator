

// Variables for the DOM Elements
const loanAmount = document.querySelector('#loanamt');
const interest = document.querySelector('#interest');   
const years = document.querySelector('#years');
const calculate = document.querySelector('#calculate');
const monthlyPay = document.querySelector("#monthly");
const totalPay = document.querySelector('#total');
const totalInt = document.querySelector('#totalInt');
const resultDiv = document.querySelector('#results');

// Calculate Event Listener
calculate.addEventListener('click', function(e){
    //Hide the result div
    resultDiv.classList.add('d-none');
    //Display the loader gif
    document.querySelector('#loader').classList.add('d-block');
    setTimeout(calc,2000);
    e.preventDefault();
});


// Calculate Function
function calc(){
    
    //Hiding the loader gif
    document.querySelector('#loader').classList.remove('d-block');
    //Principal amount
    const p = parseFloat(loanAmount.value).toFixed(2);
    //Interest Rate
    const r = parseFloat(interest.value);
    //Loan Repayment Duration (in years)
    const n = parseInt(years.value)*12;
    //loan Interest rate (per month)
    const monthlyRate= (r/1200);
    //EMI Calculation
    const emi = (p * monthlyRate * (Math.pow(1+monthlyRate,n)) / (Math.pow(1+monthlyRate,n) - 1)).toFixed(2);
    if(isFinite(emi)){
        monthlyPay.value = emi;
        totalPay.value = emi*(n);
        totalInt.value = (emi*n) - p;
        resultDiv.classList.remove('d-none');
    }
    else{
        showalertmessage('Please check your inputs');
        //Hide the result div
        resultDiv.classList.add('d-none');
    }
   
}
// Function to print the alert message
function showalertmessage(message){

    // Clear Any existing error messages
    const existingAlerts = document.querySelector('.alert');
    if(existingAlerts!=null){
        existingAlerts.remove();
    }
   //Creating an alert DIV
   const alertDiv = document.createElement('div');
   const card = document.querySelector('.card-body');
   const heading = document.querySelector('#heading');
  //Adding Bootstrap Alert Classes
  alertDiv.className='alert alert-danger';
  alertDiv.appendChild(document.createTextNode(message));
  //Inserting alert before the heading
  card.insertBefore(alertDiv,heading);

  // Clearing the error message after 3 secs
  setTimeout(clearAlert, 3000);

}

// Function to clear the error message after 3s
function clearAlert(){
    document.querySelector('.alert').remove();
}

