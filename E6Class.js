console.log("E6 class ");


class emp {
constructor(givenname , givenexperince , givendivision){

this.name = givenname;
this.experince = givenexperince;
this.division = givendivision;

}
slogan(){

return `Hello! i am ${this.name} and This comany is best`

}
joiningyear(){

return 2022 - this.experince;

}

static add(a,b){

    return a+b;
}

}
let kreet = new emp("kreet" , 3 , "A");

// let adde = emp.add(2,2);
// console.log(adde);
console.log(kreet.joiningyear());


class programmer extends emp{

constructor(givenname , givenexperince , givendivision, langauge , github){

super (givenname , givenexperince , givendivision)
this.langauge = langauge;
this.github = github;
}
 favoritelangauge(){

if (this.langauge == 'python') {
    
    return 'python'
}
else{
return 'javascript';

}

}
}
let bala = new programmer ("krunal" , 33 , "microsoft", "go" , "kreetcoder"  )
console.log(bala.favoritelangauge());
