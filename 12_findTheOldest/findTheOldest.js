const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((old, curr) => {
        const oldAge = getAge(old.yearOfBirth, old.yearOfDeath);
        const currAge = getAge(curr.yearOfBirth, curr.yearOfDeath);

        return oldAge > currAge ? old : curr;
    })
  };
  
  const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people))
  /* ALTERNATIVE SOLUTION
  const getAge = function (person) {
    // The nullish coalescing assignment operator
    // only does the assignment if the left side is "nullish" (evaluates to undefined or null)
    // if the left side has any other value, no assignment happens
    // here, we use ??= to set the current year for our subtraction below only if there is no year of death
    person.yearOfDeath ??= new Date().getFullYear();
  
    return person.yearOfDeath - person.yearOfBirth;
  };
  
  const findTheOldest = function (people) {
    const peopleOldestToYoungest = people.toSorted(
      (person, nextPerson) => getAge(nextPerson) - getAge(person),
    );
  
    const oldestPerson = peopleOldestToYoungest[0];
    return oldestPerson;
  };
  */
  
  module.exports = findTheOldest;
  