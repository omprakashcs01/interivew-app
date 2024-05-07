const person1 = {
  name: 'Om',
  LastName: 'Prakash',
  fullName: function (home) {
    return this.name + ' ' + this.lastName + ' ' + home;
  },
};

const person2 = {
  name: 'deep',
  lastName: 'kumar',
};

//imiditte invodeke
console.log(person1.fullName.call(person2, 'delhi'));

//apply
console.log(person1.fullName.apply(person2, ['delhi']));

//bind
//bind and result return
const result = person1.fullName.bind(person2, 'delhi');

console.log(result());
