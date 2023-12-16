function HouseKeeper (yearsOfExperience,name,cleaningRepertoir){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoir = cleaningRepertoir;
    this.clean = function(){
        alert("Cleaning in progress.....")
    }
}

HouseKeeper1.clean()