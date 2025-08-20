const findTheOldest = function(people) {
    return people.reduce((oldest, current) => 
        {return getAge(oldest) > getAge(current) ? oldest : current;}, people[0]
)};


const getAge = function(person) {
    const yearOfDeath = person.yearOfDeath == undefined ? new Date().getFullYear() : person.yearOfDeath;
    return yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
