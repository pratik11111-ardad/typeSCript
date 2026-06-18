let arrs:number[][]=[[10,20,30],[40,50,60]];
for(let i=0;i<arrs.length;i++){
    for(let j=0;j<arrs[0].length;j++){
        console.log(arrs[i][j]);

    }

}

for(let i in arrs){
    for(let j in arrs[i]){
          console.log(arrs[i][j]);
    }

}