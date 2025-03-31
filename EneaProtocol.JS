//I fucking hate this function;

//Fractional function for passability check
//Fractional function for tile advance
//Fractional function for backtracking




		//for(let h=0;h<TargetMasterList.length;h++){alert(TargetMasterList[h].path)};
		//alert(TargetList.length);




	//DefaultAttack=TargetMasterList[Math.round(Math.random()*TargetList.length)];
	//alert(TargetList.length);
	
	//alert(Pizdamatii.length);
	//alert(DefaultMovement);



	/*
	DefaultMovement=Pizdamatii[Math.ceil(Math.random()*Pizdamatii.length)-1].z;
	DefaultMovement.pop();
	let DestinationValability=true;
	let ics=Lat;
	let igrec=Long;

	for(let w=0;w<DefaultMovement.length;w++){ics+=(DefaultMovement[w]-2)*(DefaultMovement[w]%2);
		igrec+=(3-DefaultMovement[w])*((DefaultMovement[w]-1)%2);};
		if(rostermap[ics][igrec]!=0){DestinationValability=false};
	
	if(DestinationValability){MoveUnit(unitIndex,DefaultMovement);};  */







		

function MI_Scouter(Unit,Map){};

		//alert(TargetList.length);


	/*	

	for(let h=0;h<Pizdamatii.length;h++){
		
		Thing[Pizdamatii[h].x][Pizdamatii[h].y]=1000;
		
		if(Thing[Pizdamatii[h].x][Pizdamatii[h].y]==1000){
			AddressMap[Pizdamatii[h].x][Pizdamatii[h].y]=Pizdamatii[h].z;};
		};
	

	*/
		//this creates a target list

		/*
	
	for(let pula=0;pula<Pizdamatii.length;pula++){
		coaie=Pizdamatii[pula];
		if(coaie.x>=1){};
		if(coaie.x<AddressMap.length){};
		if(coaie.y>=1){};
		if(coaie.y<AddressMap[0].length){};};
		*/




	//This draws the bleps, but is not needed.

	/*

	for(let r=0;r<Thing.length;r++){
		for(let t=0;t<Thing[0].length;t++){

			if(Thing[r][t]!=0){

		type="Assets/Miscellaneous/Blep.png";
		var newPic=document.createElement("img");
		newPic.src=type;
		newPic.id="Blep-"+r+"-"+t;
		newPic.style.position="absolute";
		newPic.style.visibility="visible";
		newPic.style.top=r*56+"px";
		newPic.style.left=t*56+"px";
		newPic.style.zIndex=2;

		let pip=AddressMap[r][t];
		pip.pop();

	//newPic.addEventListener("click", function(){alert(pip);});
	newPic.addEventListener("click", function(){moveUnit(unitIndex , pip);
		RemoveKebabIMeanBlep();
		return 0; });
		document.getElementById("Battlemap").appendChild(newPic);
		};
		};
		};
		*/


	//This draws the cteps

	/*
	Thing[X][Y]=1000;


	for(let r=0;r<Thing.length;r++){
	for(let t=0;t<Thing[0].length;t++){
		let checker=0;
		if(Thing[r][t]==0){
			if(r<Thing.length-1){if(Thing[r+1][t]!=0){checker=1; 
				cep=AddressMap[r+1][t];}};
			if(r>0){if(Thing[r-1][t]!=0){checker=1;
				cep=AddressMap[r-1][t];}};
			if(t<Thing[0].length-1){if(Thing[r][t+1]!=0){checker=1; 
				cep=AddressMap[r][t+1];}};
			if(t>0){if(Thing[r][t-1]!=0){checker=1;
				cep=AddressMap[r][t-1];}};
			if(checker==1){
				//alert(cep);
				let puc=cep;
				let newPic=document.createElement("img");
				newPic.src="Assets/Miscellaneous/Ctep.png";
				newPic.id="Ctep-"+r+"-"+t;
				newPic.style.position="absolute";
				newPic.style.visibility="visible";
				newPic.style.top=r*56+"px";
				newPic.style.left=t*56+"px";
				newPic.style.zIndex=2;
				newPic.addEventListener("click", function(){//alert(r+" "+t);
				moveUnit(unitIndex , puc);	
				if(rostermap[r][t]){setTimeout(Attack,1000,unitIndex,rostermap[r][t].index);};
				RemoveKebabIMeanBlep();
				return 0;});

				document.getElementById("Battlemap").appendChild(newPic);
				

				};};};};
	*/




/*function drawBlep(Map, BlepMap){

	for(i=0;i<Map.length;i++){
	for(j=0;j<Map.length;j++){
		if(BlepMap[i][j]==1000){
	var newPic=document.createElement("img");
	newPic.src="Assets/Miscellaneous/Blep.png";
	newPic.id="Blep-"+i+"-"+j;
	newPic.style.position="absolute";
	newPic.style.visibility="visible";
	newPic.style.top=i*56+"px";
	newPic.style.left=j*56+"px";
	newPic.style.zIndex=2;
	document.getElementById("Battlemap").appendChild(newPic);
	};
	};
	};

	};*/