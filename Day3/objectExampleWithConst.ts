const baiganbharta1={
    baagian:"Green",
    salt:"a pinch",
    oil:"2 tbsp",
}
 console.log(baiganbharta1);
 baiganbharta1.salt="3 pinch";
 console.log(baiganbharta1.salt);

const gajarKaHalwa1={
    gajar:"Red",
    sugar:"2 spoon",
    Elayachi:3,
    kaju:5

}
//baiganbharta1=gajarKaHalwa1; //Error: Cannot assign to 'baiganbharta1' because it is a constant.ts(2588) because we cannot reassign a constant variable but we can change the properties of the object. 
gajarKaHalwa1.sugar="3 spoon";
console.log(gajarKaHalwa1.sugar);
console.log(gajarKaHalwa1.kaju);