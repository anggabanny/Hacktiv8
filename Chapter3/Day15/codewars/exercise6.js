// https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if((mpg*fuelLeft) < distanceToPump){
      return false
    } else
      return true
  };