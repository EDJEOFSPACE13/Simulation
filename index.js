var cycles = prompt('CYCLES-RECOMENDED_MAX=150:', '150')
var lifespan = prompt('LIFE_SPAN-RECOMENDED_MAX=1000:', '1000')
var lastgen
map=[
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,'Cycles',0,'pop','?'],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,'obj1',0,'obj17','?'],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,'obj2',0,'obj18','?'],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,'obj3',0,'obj19','?'],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,'obj4','?','obj20','?'],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,'obj5','?','obj21','?'],
	[2,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,2,'obj6','?','obj22','?'],
	[2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,'obj7','?','obj23','?'],
	[2,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,2,'obj8','?','obj24','?'],
	[2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,'obj9','?','obj25','?'],
	[2,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,2,'obj10','?','obj26','?'],
	[2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,'obj11','?','obj27','?'],
	[2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,'obj12','?','obj28','?'],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,'obj13','?','obj29','?'],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,'obj14','?','obj10','?'],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,'obj15','?','obj31','?'],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,'obj16','?','obj32','?'],
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
]

for(i=1;i<2;i++){
var fresh = true
}
var people = 4
cost=1
var pop=3
let pers2 = 0
var who
var x1 =Math.round((Math.random(0)*15)+1)
var x2 =Math.round((Math.random(0)*15)+1)
var x3 =Math.round((Math.random(0)*15)+1)
var x4 =Math.round((Math.random(0)*15)+1)
var y1 =Math.round((Math.random(0)*15)+1)
var y2 =Math.round((Math.random(0)*15)+1)
var y3 =Math.round((Math.random(0)*15)+1)
var y4 =Math.round((Math.random(0)*15)+1)
var il1 =Math.round(Math.random(0)*50)
var il2 =Math.round(Math.random(0)*50)
var il3 =Math.round(Math.random(0)*50)
for (var i = 0; i < cycles; ++i) {
    this["o"+i] ={
		x:this["x"+i],
		y:this["y"+i],
		spawnx:this["x"+i],
		spawny:this["y"+i],
		ih:100,
		obj:0,
		health:100,
		dead:false,
		life:this["il"+i],
		il:this["il"+i],
		deathRate:Math.round(Math.random(0)*20)
		
}
}

//Functions=================
function pickUp(x,y,pers){
	object = map[y][x]
	map[y][x]=0
  pers.obj+=1
}
function mutation(pers){
	type = Math.round((Math.random(0)*4)+1)
	type1=Math.round(Math.random(0)*25);
	type2=Math.round((Math.random(0)*15)+1);
	type3=Math.round((Math.random(0)*15)+1);
	type4=Math.round(Math.random(0)*150);
	if(type==1){pers.life=type1;pers.il=type1}
	if(type==2){pers.x=type2;pers.spawnx=type2}
	if(type==3){pers.y=type3;pers.spwany=type3}
	if(type==4){pers.health=type4;pers.ih=type4}
}
function dupe(x,y,pers){
	  pop +=1
	  for (var i = 0; i < people; ++i) {
    parent2=this["o"+i]
		if(parent2.x==x && parent2.y==y){
			pers2=parent2
		}
		}
		people+=1
		this["o"+people] ={
		spawnx:pers.spwanx,
		spawny:pers.spwany,
		il:pers.il,
		x:16,
		y:16,
		obj:0,
		ih:pers.ih,
		health:pers.ih,
		dead:false,
		life:pers.il,
		deathRate:pers2.deathRate
}

    pers.obj-=cost
		fiftyfity= Math.round(Math.random(0)*1)
		if(fiftyfity==1){
			mutation(this["o"+people])
		}
}
function move(x,y,pers,dir){
	rndDir=Math.round(Math.random(0)*4)
	pers.obj-=0.1
	if(rndDir==1){dir='l';pers.y-=1;if(map[pers.y][pers.x]==1){pickUp(x,y,pers)}if(map[pers.y][pers.x]=='#' && pers.obj>cost){dupe(x,y,pers)}if (map[pers.y][pers.x]==2){
      if (dir=='r'){pers.y-=1}
      if (dir=='l'){pers.y+=1}
      if (dir=='u'){pers.x+=1}
      if (dir=='d'){pers.x-=1}
    }map[(pers.y)+1][pers.x]=0;map[pers.y][pers.x]='#'}
	if(rndDir==2){dir='u';pers.x-=1;if(map[pers.y][pers.x]==1){pickUp(x,y,pers)}if(map[pers.y][pers.x]=='#' && pers.obj>cost){dupe(x,y,pers)}if (map[pers.y][pers.x]==2){ 
      if (dir=='r'){pers.y-=1}
      if (dir=='l'){pers.y+=1}
      if (dir=='u'){pers.x+=1}
      if (dir=='d'){pers.x-=1}
    }map[pers.y][(pers.x)+1]=0;map[pers.y][pers.x]='#'}
	if(rndDir==3){dir='r';pers.y+=1;if(map[pers.y][pers.x]==1){pickUp(x,y,pers)}if(map[pers.y][pers.x]=='#' && pers.obj>cost){dupe(x,y,pers)}if (map[pers.y][pers.x]==2){
      if (dir=='r'){pers.y-=1}
      if (dir=='l'){pers.y+=1}
      if (dir=='u'){pers.x+=1}
      if (dir=='d'){pers.x-=1}
    }map[(pers.y)-1][pers.x]=0;map[pers.y][pers.x]='#'}
	if(rndDir==4){dir='d';pers.x+=1;if(map[pers.y][pers.x]==1){pickUp(x,y,pers)}if(map[pers.y][pers.x]=='#' && pers.obj>cost){dupe(x,y,pers)}if (map[pers.y][pers.x]==2){
      if (dir=='r'){pers.y-=1}
      if (dir=='l'){pers.y+=1}
      if (dir=='u'){pers.x+=1}
      if (dir=='d'){pers.x-=1}
    }map[pers.y][(pers.x)-1]=0;map[pers.y][pers.x]='#'}	
	map[Math.round(Math.random(1)*14)+1][Math.round(Math.random(1)*14)+1]=1
	if(pers.obj<0){
		pers.health-=1
	}else if (pers.obj>3&&pers.health<100){
		pers.health+=.1
	}
	pers.life+=1
	if(pers.life>lifespan){
		pers.dead=true
		pers.health = 'dead'
		pop-=1
	}
}

for(o=0;o<cycles;o++){
  console.table(map)
	map[0][21]=pop
		for(i=1;i<people;i++){
			person=this["o"+i]
			if(person.health<0){pop-=1}
			if(person.deathRate==13){person.dead=true}
			if(person.health<0){person.dead=true;}
			if(i<=16){
			map[i][19]=person.health
			}else if(i>=17&&i<=32){
			c=i-16
			map[c][21]=person.health
			}else if(i>=33&&i<49){
			c=i-31
			map[c][19]=person.health
			map[c][18]='obj'+i
			}else if(i>=50&&i<66){
			c=i-48
			map[c][21]=person.health
			map[c][20]='obj'+i
			}else if(i>=67&&i<83){
			c=i-65
			map[c][19]=person.health
			map[c][18]='obj'+i
			}else if(i>=84&&i<100){
			c=i-82
			map[c][21]=person.health
			map[c][20]='obj'+i
			}else if(i>=101&&i<117){
			c=i-99
			map[c][19]=person.health
			map[c][18]='obj'+i
			}else if(i>=118&&i<134){
			c=i-116
			map[c][21]=person.health
			map[c][20]='obj'+i
			}else if(i>=135&&i<151){
			c=i-133
			map[c][19]=person.health
			map[c][18]='obj'+i
			}
			if(person.dead==false){
			move(person.x,person.y,person,'r');
			}else{
				person.health = 'dead'
				map[person.y][person.x]='X'
	  }
	  }
	}

	function genF(){
		for(i=1;i<10;i++){
			c=people-(people-i)
			console.table(this["o"+c])
		}
	}