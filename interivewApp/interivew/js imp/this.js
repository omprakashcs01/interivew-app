const obj = {
    name: 'Om',
    age: 25,

    findName(){
        console.log('findName:',this.name);
    }

}

obj.findName()

//this