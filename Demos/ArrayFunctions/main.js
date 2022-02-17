(() => {

    // array manipulation functions
    const isEveryoneOfAge = (myInputArray) => {
        
        let isAllOfAge = true;
        
        for (let i = 0; i < myInputArray.length; i++) {            

            if (myInputArray[i].age < 18) {
                isAllOfAge = false;
                break;
            }            
        }

        return isAllOfAge;
    };

    const getEveryoneOfAge = (myInputArray) => {
        let newArray = [];

        myInputArray.forEach(person => {
            if (person.age >= 18) {
                newArray.push(person);
            }    
        });

        return newArray;
    }

    
    const findFirstPersonOfAge = (myInputArray) => {
        
        let foundPerson = null; // initialized for an object
        
        for (let i = 0; i < myInputArray.length; i++) {            

            if (myInputArray[i].age >= 18) {
                foundPerson = myInputArray[i];
                break;
            }            
        }

        return foundPerson;
    };

    const ageEveryoneOneYear = (myInputArray) => {
        let newArray = [];

        myInputArray.forEach(person => {
            person = {
                name:person.name,
                age: person.age+1
            };
            newArray.push(person);
        });

        return newArray;
    }

    const getSumOfAges = (myInputArray) => {
        let sum = 0;

        myInputArray.forEach(person => {
            sum += person.age;   
        });

        return sum;
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
})()