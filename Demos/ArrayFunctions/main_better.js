(() => {

    // array manipulation functions
    const isEveryoneOfAge = (myInputArray) => {
 
        return myInputArray.every((person) => person.age >= 18);
    };

    const getEveryoneOfAge = (myInputArray) => {        

        return myInputArray.filter((person) => person.age >= 18);
    }

    
    const findFirstPersonOfAge = (myInputArray) => {

        return myInputArray.find((person) => person.age >= 18);        
    };

    const ageEveryoneOneYear = (myInputArray) => {
        
        return myInputArray.map((person) => {
            return {
                name: person.name,
                age: person.age + 1
            };
        });
    }

    const getSumOfAges = (myInputArray) => {
      
        return myInputArray.reduce((total, person) => {
            total += person.age;
            return total;
        }, 0);
    }

    const getSumOfAgesOfAgeFolks = (myInputArray) => {
        return myInputArray
            .filter((person) => person.age >= 18)
            .reduce((total, person) => {
                total += person.age;
            return total;
            }, 0);
    }

    const getSumOfAgesOfAgeFolksAfterAging = (myInputArray) => {
        return myInputArray
            .map((person) => {
                return {
                    name: person.name,
                    age: person.age + 1
                };
            })
            .reduce((total, person) => {
                total += person.age;
            return total;
            }, 0);
    }

    // my original array
    const myArray = [
        { name: "Thomas", age:19 },
        { name: "Noe", age:17 },
        { name: "Luc", age:20 },
    ];

    // a function to check if everyone is of age >= 18
    console.log("Is everyone of age?" + isEveryoneOfAge(myArray));

    // a function to retreive everyone of age
    console.log("The list of all who are of age: ");
    console.log(getEveryoneOfAge(myArray));

    // a function to find the first person of age
    console.log("Find the first person of age: ");
    console.log(findFirstPersonOfAge(myArray));

    // a function to age everyone one year
    console.log("The result of aging everyone one year: ");
    console.log(ageEveryoneOneYear(myArray));
    console.log("Original array: ");
    console.log(myArray);

    // a function to sum everyone's age
    console.log("The sum of all ages is: " + getSumOfAges(myArray));

    // a function to sum the ages that are of age
    console.log("The sum of ages that are of age is: " + getSumOfAgesOfAgeFolks(myArray));
    console.log("The sum of ages that are of age after aging is: " + getSumOfAgesOfAgeFolksAfterAging(myArray));
})()