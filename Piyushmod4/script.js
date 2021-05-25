var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Joseph";
names[3]="jamison";
names[4]="piyush";
names[5]="Richard";
names[6]="Dusan";
names[7]="Daniel";
names[8]="Kristofer";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}