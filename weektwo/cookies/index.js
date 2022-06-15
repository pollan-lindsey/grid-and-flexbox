 //BRANCH ONE
 const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ]
//below is the beginning of the object
let seattle = {
    maxCustomers:65,
    minCustomers:23,
    avgCookie: 6.3,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    calCustomersPerHour: function(){
        //calculate customers
        for(i=0; i < hours.length; i++){
       this.customersPerHour.push((Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers)));
        }
        //this.customersPerHour refers to seattle customers per hour?; Math.floor returns the largest integer less than or equal to the given number, which is decided in the following parantheses;
        // math.random spits out a random number; next set of parantheses is minCustomers (23) minus maxCustomers(65) plus one (to avoid getting a negative number?);
        //then multiplied by minCustomers(23)
        console.log(this.customersPerHour);
        //shows the amount of customers per hour in the log
    },
    
    calCookiesPerHour: function(){
//calcultate cookies per hour
for(i=0; i < this.customersPerHour.length; i++){
    let oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(oneHour);
    console.log(this.cookiesPerHour);
    //console.log(oneHour);
}

// use values customerPerHour and avgCookie and add it to total daily cookies
    }
}
function render(hours, cookies){
    let cookieContainer = document.getElementById('cookies-sold');
    let ul = document.createElement('ul'); //creating an unordered list
    for(i=0; i < hours.length; i++){
        for(i = 0; i < cookies.length; i++){
            //create an li tag
            let li = document.createElement('li');
            //info from hours and cookies
            li.textContent = `${hours[i]} : ${cookies[i]}`
            //attach li to ul
            ul.append(li);
            //get element by id from html
            
        }
    }
    cookieContainer.append(ul);
}
seattle.calCustomersPerHour()
seattle.calCookiesPerHour()
render(hours, seattle.cookiesPerHour );

//TOKYo DRIFT
let tokyo = {
    maxCustomers:24,
    minCustomers:3,
    avgCookie: 1.2,
    cookiesPerHour: [],
    tokyoCustomersPH: [],
    totalDailyCookies: 0,

    calTokyoCustomersPH: function(){
        //calculate customers
        //a for loop to run the included equasion up for every hour of the day
        for(i=0; i < hours.length; i++){
       this.tokyoCustomersPH.push((Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers)));
       //Math.floor rounds the answer to the largest full number less than or equal to a given number
       //Math.random is pretty much just a random number generator except the number is between 0 and 1
        }
        console.log(this.tokyoCustomersPH);
    } ,
    //a function to run up the numbers on cookie sales every hour
    calCookiesPerHour: function(){
     
        for(i=0; i < this.tokyoCustomersPH.length; i++){
            let oneHour = Math.ceil(this.tokyoCustomersPH[i] * this.avgCookie); 
            //math.ceil rounds up the answer
            //the [i] is because it's a random integer and the loop has to work for any number it spits out
            //the following pushes the answer to the math problem above into an array called cookiesPerHour
            this.cookiesPerHour.push(oneHour);
            console.log(this.cookiesPerHour);
            //console.log(oneHour);
        }
    } 
}
        function render(hours, cookies){
                let cookieContainer = document.getElementById('tokyo-cookies');
                let ul = document.createElement('ul'); //creating an unordered list
                for(i=0; i < hours.length; i++){
                    for(i = 0; i < cookies.length; i++){
                        //create an li tag
                        let li = document.createElement('li');
                        //info from hours and cookies
                        li.textContent = `${hours[i]} : ${cookies[i]}`
                        //attach li to ul
                        ul.append(li);
                        //get element by id from html
                        
                    }
                }
                cookieContainer.append(ul);
            }
            tokyo.calTokyoCustomersPH()
            tokyo.calCookiesPerHour()
            render(hours, tokyo.cookiesPerHour );

//Dubai

let dubai = {
    maxCustomers:38,
    minCustomers:11,
    avgCookie: 3.7,
    cookiesPerHour: [],
    dubaiCustomersPH: [],
    totalDailyCookies: 0,

    calDubaiCustomersPH: function(){
        //calculate customers
        for(i=0; i < hours.length; i++){
       this.dubaiCustomersPH.push((Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers)));
        }
        console.log(this.tokyoCustomersPH);
    } ,
    calCookiesPerHour: function(){
        //calcultate cookies per hour
        for(i=0; i < this.dubaiCustomersPH.length; i++){
            let oneHour = Math.ceil(this.dubaiCustomersPH[i] * this.avgCookie);
            this.cookiesPerHour.push(oneHour);
            console.log(this.cookiesPerHour);
            //console.log(oneHour);
        }
    } 
}
        function render(hours, cookies){
                let cookieContainer = document.getElementById('dubai-cookies');
                let ul = document.createElement('ul'); //creating an unordered list
                for(i=0; i < hours.length; i++){
                    for(i = 0; i < cookies.length; i++){
                        //create an li tag
                        let li = document.createElement('li');
                        //info from hours and cookies
                        li.textContent = `${hours[i]} : ${cookies[i]}`
                        //attach li to ul
                        ul.append(li);
                        //get element by id from html
                        
                    }
                }
                cookieContainer.append(ul);
            }
            dubai.calDubaiCustomersPH()
            dubai.calCookiesPerHour()
            render(hours, dubai.cookiesPerHour );
            
//THE CITY OF LOVE
let paris = {
        maxCustomers:38,
        minCustomers:20,
        avgCookie: 2.3,
        cookiesPerHour: [],
        customersPerHour: [],
        totalDailyCookies: 0,
    
        calCustomersPerHour: function(){
            //calculate customers
            for(i=0; i < hours.length; i++){
           this.customersPerHour.push((Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers)));
            }
            console.log(this.customersPerHour);
            //shows the amount of customers per hour in the log
        },
        
        calCookiesPerHour: function(){
    //calcultate cookies per hour
        for(i=0; i < this.customersPerHour.length; i++){
        let oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);
        this.cookiesPerHour.push(oneHour);
        console.log(this.cookiesPerHour);
        //console.log(oneHour);
    }
    
    // use values customerPerHour and avgCookie and add it to total daily cookies
        }
    }
    function render(hours, cookies){
        let cookieContainer = document.getElementById('paris-cookies');
        let ul = document.createElement('ul'); //creating an unordered list
        for(i=0; i < hours.length; i++){
            for(i = 0; i < cookies.length; i++){
                //create an li tag
                let li = document.createElement('li');
                //info from hours and cookies
                li.textContent = `${hours[i]} : ${cookies[i]}`
                //attach li to ul
                ul.append(li);
                //get element by id from html
                
            }
        }
        cookieContainer.append(ul);
    }
    paris.calCustomersPerHour()
    paris.calCookiesPerHour()
    render(hours, paris.cookiesPerHour );

//LIMA

let lima = {
    maxCustomers:16,
    minCustomers:2,
    avgCookie: 4.6,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    calCustomersPerHour: function(){
        //calculate customers
        for(i=0; i < hours.length; i++){
       this.customersPerHour.push((Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers)));
        }
        console.log(this.customersPerHour);
        //shows the amount of customers per hour in the log
    },
    
    calCookiesPerHour: function(){
//calcultate cookies per hour
    for(i=0; i < this.customersPerHour.length; i++){
    let oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(oneHour);
    console.log(this.cookiesPerHour);
    //console.log(oneHour);
}

// use values customerPerHour and avgCookie and add it to total daily cookies
    }
}
function render(hours, cookies){
    let cookieContainer = document.getElementById('lima-cookies');
    let ul = document.createElement('ul'); //creating an unordered list
    for(i=0; i < hours.length; i++){
        for(i = 0; i < cookies.length; i++){
            //create an li tag
            let li = document.createElement('li');
            //info from hours and cookies
            li.textContent = `${hours[i]} : ${cookies[i]}`
            //attach li to ul
            ul.append(li);
            //get element by id from html
            
        }
    }
    cookieContainer.append(ul);
}
lima.calCustomersPerHour()
lima.calCookiesPerHour()
render(hours, lima.cookiesPerHour );

