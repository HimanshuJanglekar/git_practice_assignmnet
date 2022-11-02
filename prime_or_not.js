function checkPrime(num){

let count = 0;
for(let i = 1 ; i <= num ; i++){
	if( num % i ){
		count++ ;
	}
  }
	if( count = 0){
	console.log( "true");
	}
	else{
	console.log("false");
	}	
}
	checkPrime(11);