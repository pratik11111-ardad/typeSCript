function marriage(bride:string,groom:string,releative?:boolean)
{
    if(releative==undefined){
        console.log("Its Small wedding of- " +bride,groom)
    }
    else{
        console.log("Its big wedding of "+bride,groom,releative);
    }
}
marriage("angle","shaam");
marriage("angle","shaam",true);
