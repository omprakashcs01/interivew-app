function outer(){

    let name = 'Om'

    function inner(){
        console.log("inner fun=>",name);
    }
    return inner
}
 let data = outer()
data()

function test() {
    for (var i = 0; i < 3; i++) {
      setTimeout(function log() {
        console.log(i);
      }, 1000);
    }
}  