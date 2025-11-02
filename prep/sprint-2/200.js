const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
console.log(profileData.cityOfResidence); // I predict undefined as expected output because the object profileData 
// does not have a property with a key of "cityOfResidence"

profileData.cityOfResidence = "Manchester";

console.log(profileData.cityOfResidence); // I predict that "Manchester" will be the expected output because the object 
// has been modified to add property with the key of "cityOfResidence". The key of "cityOfResidence" is now associated with the value "Manchester".
