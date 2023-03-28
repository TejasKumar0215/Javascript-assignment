/*var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (dd+sp+mm+sp+yyyy);
    };
    console.log(curday('/'));
    console.log(curday('-'))*/

/*var circleRadius = 5
var circumferenceOfCircle = 2 * Math.PI * circleRadius;
console.log("Circumference of circle is: " + circumferenceOfCircle);*/


/*function bmi(weight, height) {
    let bmi = weight / (height**2);
    
    if(bmi < 18.5){
      return "Underweight";
    }else if (bmi < 25){
      return "Normal";
    }else if (bmi < 30){
      return "Overweight";
    }else{
      return "Obese";
    }
  }
  console.log(bmi(50));*/


/*function userIdGenerator(l){
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(userIdGenerator(8));*/


/*function solution(a, b, n)
	{
		for (let i = 0; i * a <= n; i++)
		{
	
	
			if ((n - (i * a)) % b == 0)
			{
				document.write("x = " + i +
								", y = " +
								(n - (i * a)) / b);
				
				return ;
			}
		}
	
		document.write("No solution");
	}
    let a = 2, b = 3, n = 7;
    solution(a, b, n);*/



/*function isprime(n){
    if (n==1){
        return false
    }
    else if (n==2){
        return true;
    }
    else{
        for (var x=2; x<n; x++){
            if(n%x===0){
                return false;
            }
        }
        return true;

    }
}
console.log (isprime(5));*/



/*function swap(x, y) {
    var t = x;
    x = y;
    y = t;
    return [x, y];
}

console.log(swap(5, 6));*/


/*var array1 = [1,2,3,4];
var array2 = [1,2,1,4];

function decorate(array) {
  array.uniques = function() {
    this.sort();
    for (var i = 0; i < this.length; i++) {
      if (this[i + 1] === this.length) return true;
      if (this[i] === this[i + 1]) return false;
    }
  }
}

decorate(array1);
decorate(array2);

console.log(array1.uniques());
console.log(array2.uniques());*/




