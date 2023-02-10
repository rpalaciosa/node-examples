const a = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 

function print1(num) {
  
    let b = a.filter( e =>  e % 2 === 1 )
    return b;
  }

  function print2(num) {
  
    let b = a.map( e =>  {
      return {elm : e}
    } )

    return {data: b} ;
  }
  
  export { print1 ,print2};
