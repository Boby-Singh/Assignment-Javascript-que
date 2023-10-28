const print_array = (arr) =>{
	let ans ='';
	let n=arr.length;
	for(let i=0;i<n;i++){
		ans+=arr[i]+' ';
	}
	console.log(ans);
}

const randomize_array = (arr) =>{
	let n=arr.length;
	for(let i=n-1;i>=0;i--){
		let j = Math.floor(Math.random()*(i+1));

		[arr[i],arr[j]] = [arr[j],arr[i]];
	}
}


let arr = [1,2,3,4,5,6,7];
randomize_array(arr);
print_array(arr);