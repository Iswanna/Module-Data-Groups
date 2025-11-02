const profileData = {
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
};
const twinData = profileData;
twinData.firstName = "Emilia";
console.log(profileData === twinData); // profileData and twinData are strictly equals to eachother because they both 
// hold a reference to the same object in memory. So, you can use either of the two to modify the object. Object is a reference type.
console.log(profileData.firstName); // the object in memory has been modified so the key "firstname" is now associated with the value "Emilia".


