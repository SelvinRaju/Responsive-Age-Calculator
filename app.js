var datePicker=document.getElementById('datePicker')
var chooseDate=document.getElementById('chooseDate')

// variables for printing dates

var ageYears =document.getElementById('ageYears')
var ageMonths =document.getElementById('ageMonths')
var ageDays =document.getElementById('ageDays')
var ageHours =document.getElementById('ageHours')
var ageSeconds =document.getElementById('ageSeconds')
var ageMilliSeconds =document.getElementById('ageMilliSeconds')

datePicker.addEventListener('change',function(){

    var options={year: 'numeric', month:'long', day:'numeric'};
    var selectDate=new Date(this.value);
    var DOB=selectDate.toLocaleDateString('en-US',options)
    
    chooseDate.innerHTML="DOB:" + " " + DOB;


    var millSeconds_Btw_DOB= Date.parse(DOB)
    var millSeconds_Btw_Now=Date.now()
     
    var age_in_millSeconds = millSeconds_Btw_Now - millSeconds_Btw_DOB;
    // console.log(age_in_millSeconds)
    var milliSeconds = age_in_millSeconds;
    var second=1000;
    var minute=second*60;
    var hour = minute*60;

    var day=hour*24;
    var month=day*30;
    var year=day*365;




    var years=Math.round(milliSeconds/year)
    var months=years*12;
    var days=years*365;
    var hours=Math.round(milliSeconds/hour)
    var seconds=Math.round(milliSeconds/second)
    
 ageYears.innerHTML=years
 ageMonths.innerHTML=months
 ageDays.innerHTML= days
 ageHours.innerHTML= hours
 ageSeconds.innerHTML=seconds
 ageMilliSeconds.innerHTML=milliSeconds;

 document.querySelector('.age-calc').classList.add('expand')

})