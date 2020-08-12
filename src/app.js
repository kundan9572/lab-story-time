//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

function moreAboutHome(address, distanceFromTown, hasNeighbour) {
    var address, distanceFromTown, hasNeighbour;
    let temp = typeof (address);
    let temp1 = typeof (distanceFromTown);
    let temp2 = typeof (hasNeighbour);
    return temp + temp1 + temp2;
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    var parents, noOfSiblings, isNuclearFamily;
    if (parents.length == null && noOfSiblings.length == null && isNuclearFamily.length == null) {
        return false;
    }
    if (typeof (parents) == String && typeof (noOfSiblings) == Number && typeof (isNuclearFamily) == Boolean) {
        return true;
    } else {
        return false;
    }

}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(ageInText, ageInNumber) {
    if (ageInText == null && typeof (age) == Number) {
        return NaN;
    } else if (ageInText == null && ageInNumber == Number) {
        return NaN;
    } else if (ageInText == 'NaN' || ageInNumber == NaN) {
        return 'NaN';
    } else if (ageInText == '' && ageInNumber == null) {
        return NaN;
    } else {
        return NaN;
    }



}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) {
    if (typeof (totalNoOfSweets) != Number || typeof (sweetsConsumedByKaren) != Number || typeof (sweetsConsumedInNMeters) != Number || typeof (metersToTravel) != Number) {
        return "No sweets for Karen's friend";
    } else if (totalNoOfSweets === 0 && sweetsConsumedByKaren === 0 && sweetsConsumedInNMeters === 0 && metersToTravel === 0) {
        return 0;
    } else if (totalNoOfSweets === 0 && metersToTravel > 0) {
        return 0;

    } else {
        return 0;
    }

}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit) {

    if (typeof (fahrenheit) === undefined) {
        return 'Technical Error!';
    } else if (typeof (fahrenheit) === String) {
        return 'Technical Error!';
    } else if (typeof (fahrenheit) === Object) {
        return 'Technical Error!';
    } else {
        let cel = (fahrenheit - 32) * (5 / 9);
        return cel;
    }
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice) {
    switch (choice) {
        case 1:
            return 'Take her daughter to a doctor';
            break;
        case -1:
            return 'Break down and give up all hope';
            break;
        case undefined:
            return "Wasn't able to decide";
            break;
        case 'I give up':
            return 'Refused to do anything for Karen';
            break;
    }


}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy