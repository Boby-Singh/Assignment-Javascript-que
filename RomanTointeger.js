const value = (r)=>{
	if(r=='I')
		return 1;
	if(r=='V')
		return 5;
	if(r=='X')
		return 10;
	if(r=='L')
		return 50;
	if(r=='C')
		return 100;
	if(r=='D')
		return 500;
	if(r=='M')
		return 1000;

	return -1;
}

const RomanToDecimal = (str) =>{
	var ans = 0;
	let size=str.length;
	for(let i=0;i<size;i++){
        var s1 = value(str.charAt(i));

        if(i+1 < size){
        	var s2 = value(str.charAt(i+1));

        	if(s1>=s2){
        		ans = ans+s1;
        	}else{
        		ans = ans + s2-s1;
        		i++;
        	}
        }
        else{
        	ans = ans +s1;
        }
	}
	return ans;
}


var str = "MDCVI";

document.write("integer from Roman Numeral" +
 "is" + RomanToDecimal(str));