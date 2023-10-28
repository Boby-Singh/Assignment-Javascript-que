const Checkpangram = (str) =>{
	 mark = new Array(26).fill(false);
	let index;
	let size = str.length;
	for(let i=0;i<size;i++){
		if(str[i]>='A' && str[i]<='Z')
			index = str.charCodeAt(i)-'A'.charCodeAt(0);
		else if(str[i]>='a' && str[i]<='z')
			index = str.charCodeAt(i)-'a'.charCodeAt(0);
		else continue;
		mark[index]=true;
	}

	for(let i=0;i<26;i++)
		if(mark[i]==false)
			return false;
		
	return true;
}

let str = "The quick brown fox jumps over the lazy dog";

console.log(str);

if(Checkpangram(str)==true)
   console.log("\nis a pangram");
else
	console.log("\nnot a pangram");