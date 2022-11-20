






function fun(){
    // to get the value from html
    var x = document.getElementById("in").value;
    
    //meter to feet
     var meter = parseFloat( x * 3.28 ).toFixed(3);  
    
    
    // feet to meter 
    var feet = parseFloat( x * 0.3048 ).toFixed(3);  
    document.getElementById("cmeter").innerHTML = `${x} meters = ${meter} feet | ${x} feet = ${feet} meters`;

    // litre to gallons
    var litre = parseFloat( x * 0.264 ).toFixed(3);  

    // gallon to litres
    var gallon = parseFloat( x * 3.785 ).toFixed(3);
    
    document.getElementById("clitre").innerHTML = `${x} litres = ${litre} gallons | ${x} gallon = ${gallon} litre`;
    
    // kg to pounds
    var kg = parseFloat( x * 2.204 ).toFixed(3);

    // pound to kg
    var pound = parseFloat( x * 0.453 ).toFixed(3);
    document.getElementById("cpound").innerHTML = `${x} kilos = ${kg} pounds | ${x} pounds = ${pound} kilos`;
}


















