 function lr(mas,board,x,y){
       var xx=x;
       while(xx>0){
            xx--;
            if(board[y][xx]!=null){
                if(board[y][xx].white!=board[y][x].white){
                    mas[y][xx]=true;
                    break;
                }
                else break;
            }
            mas[y][xx]=true;
         }
        xx=x;
        while(xx<7){
            xx++;
            if(board[y][xx]!=null){
                if(board[y][xx].white!=board[y][x].white){
                    mas[y][xx]=true;
                    break;
                }
                else break;
            }
            mas[y][xx]=true;
        }
        var yy=y;
        while(yy>0){
            yy--;
            if(board[yy][x]!=null){
                if(board[yy][x].white!=board[y][x].white){
                    mas[yy][x]=true;
                    break;
                }
                else break;
            }
            mas[yy][x]=true;
        }
        yy=y;
        while(yy<7){
            yy++;
            if(board[yy][x]!=null){
                if(board[yy][x].white!=board[y][x].white){
                    mas[yy][x]=true;
                    break;
                }
                else break;
            }
            mas[yy][x]=true;
        }
}
class Figure {
  constructor(x,y,white) {
    this.x = x;
    this.y = y;
	this.white = white;
	this.name = "Figure";
  }
}
class Pawn extends Figure{
	constructor(x,y,white) {
		super(x,y,white);
		this.name="Pawn";
	}
    light(mas,board){
		var y=this.y;
		var x=this.x;
        if(this.white==true){
            if((y+1)<8){
                if((x+1)<8)
                    if(board[y+1][x+1]!=null)
                        if(board[y+1][x+1].white!=board[y][x].white)mas[y+1][x+1]=true;
                if((x-1)>=0)
                    if(board[y+1][x-1]!=null)
                        if(board[y+1][x-1].white!=board[y][x].white)mas[y+1][x-1]=true;
                if(board[y+1][x]==null){
                    mas[y+1][x]=true;
                    if((y==1)&&(board[y+2][x]==null)) mas[y+2][x]=true;
                }
            }
        }
        else{
            if((y-1)>=0){
                if((x+1)<8)
                    if(board[y-1][x+1]!=null)
                        if(board[y-1][x+1].white!=board[y][x].white)mas[y-1][x+1]=true;
                if((x-1)>=0)
                    if(board[y-1][x-1]!=null)
                        if(board[y-1][x-1].white!=board[y][x].white)mas[y-1][x-1]=true;
                if(board[y-1][x]==null) {
                    mas[y-1][x]=true;
                    if((y==6)&&(board[y-2][x]==null)) mas[y-2][x]=true;
                }
            }
		}
	}
}
class Horse extends Figure{
	constructor(x,y,white) {
		super(x,y,white);
		this.name="Horse";
	}
     light(mas,board){
		var y=this.y;
		var x=this.x;
        if(((x+2)<8)&&((y+1)<8)) mas[y+1][x+2]=true;
       if(((x+2)<8)&&((y-1)>=0)) mas[y-1][x+2]=true;
       if(((x+1)<8)&&((y+2)<8)) mas[y+2][x+1]=true;
       if(((x+1)<8)&&((y-2)>=0)) mas[y-2][x+1]=true;
       if(((x-1)>=0)&&((y+2)<8)) mas[y+2][x-1]=true;
       if(((x-1)>=0)&&((y-2)>=0)) mas[y-2][x-1]=true;
       if(((x-2)>=0)&&((y+1)<8)) mas[y+1][x-2]=true;
       if(((x-2)>=0)&&((y-1)>=0)) mas[y-1][x-2]=true;
       for(var i=0;i<8;i++)
           for(var j=0;j<8;j++)
               if (board[i][j]!=null)
                   if(board[i][j].white==board[y][x].white) mas[i][j]=false;
    }
}
class Priest extends Figure{
	constructor(x,y,white) {
		super(x,y,white);
		this.name="Priest";
	}
	 light(mas,board){
	   var y=this.y;
	   var x=this.x;
       var yy=y;
       var xx=x;
       var k=0;
       while((xx>0)&&(yy>0)){
            xx--;
            yy--;
            if(board[yy][xx]!=null){
                if(board[yy][xx].white!=board[y][x].white){
                    mas[yy][xx]=true;
                    break;
                }
                else break;
            }
            mas[yy][xx]=true;
       } 
       yy=y;
       xx=x;
       while((xx>0)&&(yy<7)){
            xx--;
            yy++;
            if(board[yy][xx]!=null){
                if(board[yy][xx].white!=board[y][x].white){
                    mas[yy][xx]=true;
                    break;
                }
                else break;
            }
            mas[yy][xx]=true;
       } 
       yy=y;
       xx=x;
       while((xx<7)&&(yy<7)){
            xx++;
            yy++;
            if(board[yy][xx]!=null){
                if(board[yy][xx].white!=board[y][x].white){
                    mas[yy][xx]=true;
                    break;
                }
                else break;
            }
            mas[yy][xx]=true;
       } 
       yy=y;
       xx=x;
       while((xx<7)&&(yy>0)){
            xx++;
            yy--;
            if(board[yy][xx]!=null){
                if(board[yy][xx].white!=board[y][x].white){
                    mas[yy][xx]=true;
                    break;
                }
                else break;
            }
            mas[yy][xx]=true;
		}
	}
}
class Rook extends Figure{
	 constructor(x,y,white,movv) {
		super(x,y,white);
		this.name="Rook";
		this.movv=movv;
	 }
	 light(mas,board){
		var y=this.y;
		var x=this.x;
		lr(mas,board,this.x,this.y);
	}
}
class Queen extends Priest{
	constructor(x,y,white) {
		super(x,y,white);
		this.name="Queen";
	}
	 light(mas,board){
	   var y=this.y;
	   var x=this.x;
       super.light(mas,board);
	   lr(mas,board,this.x,this.y);
	}
}
class King extends Figure{
	 constructor(x,y,white,movv) {
		super(x,y,white);
		this.name="King";
		this.movv=movv;
	  } 
	 light(mas,board){
	   var y=this.y;
	   var x=this.x;
	   if(this.y>0){ 
             mas[this.y-1][this.x]=true;
            if(x>0){  mas[y-1][x-1]=true;}
            if(x<7){  mas[y-1][x+1]=true;}
        }
        if(y<7){ 
            mas[y+1][x]=true;
             if(x>0){  mas[y+1][x-1]=true;}
             if(x<7){  mas[y+1][x+1]=true;}
        }
        if(x>0){  mas[y][x-1]=true;}
        if(x<7){  mas[y][x+1]=true;}
        for(var i=0;i<8;i++)
           for( var j=0;j<8;j++)
               if (board[i][j]!=null)
                   if(board[i][j].white==board[y][x].white) mas[i][j]=false;
	}
}
class Player{
    constructor(wh){
		this.f=new Array();// непобитые фигуры
		this.dead=new Array();// побитые фигуры
		this.dead.push(0);
        var q=7;
        if(wh==true) q=0;
        this.f.push(new King(4,q,wh,false));
        this.f.push(new Queen(3,q,wh));
        this.f.push(new Priest(5,q,wh));
        this.f.push(new Priest(2,q,wh));
        this.f.push(new Horse(6,q,wh));
        this.f.push(new Horse(1,q,wh));
        this.f.push(new Rook(7,q,wh,false));
        this.f.push(new Rook(0,q,wh,false));
        q=1;
        if(wh==false) q=6;
        for(var i=0;i<8;i++)
          this.f.push(new Pawn(i,q,wh,"Pawn"));
    }
}
class Game {
    constructor(id){
		//this.go=null;
		this.id=id;//id divа в котором всё происходит
		this.pawnc=false;// для реализации события "эволюции" пешки
		this.moves=new Array();//список ходов
		this.k=-1;// отвечает за состояние игрового цикла
		this.turn=0;// отвечает за то, чей сейчас ход(белых или черных)
		this.x=-1;// координаты нажатой клетки
		this.y=-1;
		this.board=new Array();//доска
		for(var i=0;i<8;i++)
			this.board[i]=[];
		this.dr=new Array();
		for(var i=0;i<8;i++)
			this.dr[i]=[];
		this.shah=false;
		this.mat=false;
		this.pat=false;
		this.draw=false;
		this.players=new Array();// массив игроков где players[0]-белые, а players[1]-чёрные
        this.players.push(new Player(true));
		this.players.push(new Player(false));
        this.setboard();
    }
    setboard(){// дублирует объекты на "доску" согласно информации из массивов фигур игроков
        for(var i=0;i<8;i++)
            for(var j=0;j<8;j++)
                this.board[i][j]=null;
        for(var i=0;i<this.players[0].f.length;i++){
            var buf=this.players[0].f[i];
            this.board[buf.y][buf.x]=buf;
        }
        for(var i=0;i<this.players[1].f.length;i++){
            var buf=this.players[1].f[i];
            this.board[buf.y][buf.x]=buf;
        }
    }
    lighti(nx,ny,tu){//отсекает ходы которые привели бы к шагу ходившему
        for(var i=0;i<8;i++)
            for(var j=0;j<8;j++) this.dr[i][j]=false;
        this.board[ny][nx].light(this.dr,this.board);
        var n=(tu+1)%2;
        var bufstart=this.board[ny][nx];
        for(var i=0;i<8;i++){
            for(var j=0;j<8;j++){
                if(this.dr[i][j]==true){
                    var bufend=this.board[i][j];
                    this.board[i][j]=bufstart;
                    this.board[ny][nx]=null;
					var dr1=null;
                    dr1=new Array();
					for(var ii=0;ii<8;ii++)
						dr1[ii]=new Array();
                    for(var ii=0;ii<8;ii++)
                        for(var jj=0;jj<8;jj++) dr1[ii][jj]=false;
                    for(var ii=0;ii<this.players[n].f.length;ii++){
						if((this.players[n].f[ii].y!=i)||(this.players[n].f[ii].x!=j))
                        this.players[n].f[ii].light(dr1,this.board);
					}
                    if(bufstart.name!="King"){
                        for(var ii=0;ii<this.players[tu].f.length;ii++){
                            var buf=this.players[tu].f[ii];
                            if(buf.name=="King")
                                if(dr1[buf.y][buf.x]==true) {this.dr[i][j]=false;break;}
                        }
                    }
                    else{
                        if(dr1[i][j]==true) this.dr[i][j]=false; 
                    }
                    this.board[ny][nx]=bufstart;
                    this.board[i][j]=bufend;
                }
            }
        }
    }
    allmoves(ddr,turn){// все  возможные ходы игрока цвета turn
        for(var i=0;i<8;i++)
            for(var j=0;j<8;j++) ddr[i][j]=false;
        for(var i=0;i<this.players[turn].f.length;i++){
            this.lighti(this.players[turn].f[i].x,this.players[turn].f[i].y,turn);
            for(var ii=0;ii<8;ii++)
                for(var j=0;j<8;j++) if(this.dr[ii][j]==true)ddr[ii][j]=true;
        }
    }
    cpat(){//проверка на пат
       var ddr=new Array();
	   for(var i=0;i<8;i++)
		   ddr[i]=new Array();
        this.allmoves(ddr,this.turn); 
        this.pat=true;
        for(var i=0;i<8;i++)
            for(var j=0;j<8;j++)
                if(ddr[i][j]==true){
                    this.pat=false;
                    break;
                }
    }
    cshah(){//проверка на шах
        this.shah=false;
        for(var i=0;i<this.players[this.turn].f.length;i++){
            var buf=this.players[this.turn].f[i];
            if(buf.name=="King"){
                var bufx=buf.x;
                var bufy=buf.y;
                var n=(this.turn+1)%2;
                var ddr=new Array();
				for(var qqq=0;qqq<8;qqq++)
					ddr[qqq]=new Array();
                for(var ii=0;ii<8;ii++)
                    for(var j=0;j<8;j++) ddr[ii][j]=false;
                for(var ii=0;ii<this.players[n].f.length;ii++){
                    this.lighti(this.players[n].f[ii].x,this.players[n].f[ii].y,n);
                    for(var iii=0;iii<8;iii++)
                        for(var j=0;j<8;j++) if(this.dr[iii][j]==true)ddr[iii][j]=true;
                }
                if(ddr[bufy][bufx]==true) this.shah=true;
                break;
            }
        }
    }
    cmat(){//проверка на мат
        this.mat=false;
        if((this.shah==true)&&(this.pat==true)) this.mat=true;
    }
	cdraw(){//проверка на ничью
		if((this.players[this.turn].f.length<=2)&&(this.players[(this.turn+1)%2].f.length<=2)){
			if((this.players[this.turn].f.length==1)&&(this.players[(this.turn+1)%2].f.length==1)){this.draw=true;} 
			else{
				var check=false;
				check=cdraw1(this.turn);
				if(check==false){
					check=cdraw1((this.turn+1)%2);
				}
				if(check==false) this.draw=true;
			}
		}
	}
	cdraw1(turn){
		for(var i=0;i<this.players[turn].f.length;i++){
			if((this.players[turn].f[i].name=="Queen")||(this.players[turn].f[i].name=="Rook")||(this.players[turn].f[i].name=="Pawn")){
				var check=true;return check;
			}
		}
	}
     light(nx,ny){//возможные ходы для фигуры с учётом рокировки
        if (this.board[ny][nx]!=null){
             this.y=ny;
             this.x=nx;
             this.lighti(nx,ny,this.turn);
             if("King"==this.board[ny][nx].name){
                 var ki=this.board[ny][nx];
                 if(ki.movv==false){
                     var l=false;
                     var r=false;
                     var z=0;
                     if(this.turn==1)z=7;
                     if(this.board[z][0]!=null){//проверка возможности рокировки влево
                         if("Rook"==this.board[z][0].name){
                            if(this.board[z][0].movv==false){
								var ddr=new Array();
								for(var rr=0;rr<8;rr++)
									ddr[rr]=new Array();
								var kek=(this.turn+1)%2;
                                this.allmoves(ddr,kek);
                                var op=true;
                                for(var i=1;i<4;i++){
                                    if((this.board[z][i]!=null)||(ddr[z][i]==true)){
                                        op=false;
                                        break;
                                    }
                                }
                                if(op==true)l=true;
                            }
                         }
                     }
                     if(this.board[z][7]!=null){//проверка возможности рокировки вправо
                         if("Rook"==this.board[z][7].name){
                            if(this.board[z][7].movv==false){
                                var ddr=new Array();
								for(var rr=0;rr<8;rr++)
									ddr[rr]=new Array();
                                var kek=(this.turn+1)%2;
                                this.allmoves(ddr,kek);
                                var op=true;
                                for(var i=5;i<7;i++){
                                    if((this.board[z][i]!=null)||(ddr[z][i]==true)){
                                        op=false;
                                        break;
                                    }
                                }
                                if(op==true)r=true;
                            }
                         }
                         this.lighti(nx,ny,this.turn);
                         if(l==true) this.dr[z][2]=true;
                         if(r==true) this.dr[z][6]=true;
                     }
                 }
             }
			for(var i=0;i<8;i++)
				for(var j=0;j<8;j++)
				if(this.dr[i][j]==true){
					this.k=1;
					break
			}
			if(this.k==0) this.k=-1;
        }
    }
    move(nx,ny){//изменения после/во время хода в слуае если пользователь решил походить
        var rock=false;
        var color="white";
        if(this.turn!=0)color="black";
        var n=(this.turn+1)%2;
        if(this.dr[ny][nx]==true){
            //var move=this.board[this.y][this.x].name+" "+color+" "+alf[this.x]+", "+(this.y+1)+"; "+alf[nx]+", "+(ny+1)+".";
			var move=alf[this.x]+", "+(this.y+1)+"; "+alf[nx]+", "+(ny+1)+".";
            if(this.board[ny][nx]!=null){
                var sz=this.players[n].f.length;
                for(var i=0;i<sz;i++){//если при ходе побита фигура - удаляем её из массива фигур и записываем в список мёртвых фигур
                    var buf=this.players[n].f[i];
                    if((nx==buf.x)&&(ny==buf.y)){
                        this.players[n].dead.push(buf.name);
						drawdead();
                        this.players[n].f.splice(i,1);
                        break;
                    }
                }
            }
            var sz=this.players[this.turn].f.length;
            for(var i=0;i<sz;i++){
                var buf=this.players[this.turn].f[i];
                if((this.x==buf.x)&&(this.y==buf.y)){
                    if("Rook"==buf.name){//записываем факт о двигании если двинулась ладья
                        var xx=true;
                        if(this.turn==1)xx=false;    
                        var bufi=new Rook(nx,ny,xx,true);
                        buf=bufi;
                    }
                    if("King"==buf.name){//двигаем короля,проверяем рокировка ли и записываем факт о двигании если двинулась ладья или король
                        if(Math.abs(nx-this.x)>1) rock=true;
                        var xx=true;
                        if(this.turn==1)xx=false;    
                        var bufi=new King(nx,ny,xx,true);
                        buf=bufi;
                    }
                    buf.x=nx;
                    buf.y=ny;
                    this.players[this.turn].f.splice(i,1);
                    this.players[this.turn].f.push(buf);
                    break;
                }
            }
            this.setboard();
            if(rock==true){// двигаем ладью если рокировка
				move="Castling ";
                var z=7;
                    if(this.turn==0)z=0;
                if((nx-this.x)<0){
                    move=move+" left";
                    sz=this.players[this.turn].f.length;
                    for(var i=0;i<sz;i++){
                        var buf=this.players[this.turn].f[i];
                        if((0==buf.x)&&(z==buf.y)){
                            buf.x=3;
                            buf.y=z;
                            this.players[this.turn].f.splice(i,1);
                            this.players[this.turn].f.push(buf);
                            break;
                        }
                    }
                }
                else {
                    move=move+" right";
                    sz=this.players[this.turn].f.length;
                    for(var i=0;i<sz;i++){
                        var buf=this.players[this.turn].f[i];
                        if((7==buf.x)&&(z==buf.y)){
                            buf.x=5;
                            buf.y=z;
                            this.players[this.turn].f.splice(i,1);
                            this.players[this.turn].f.push(buf);
                            break;
                        }
                    }
                }
                this.setboard();
            }
            if(("Pawn"==this.board[ny][nx].name)&&((ny==7)||(ny==0))){
                this.pawnc=true;
                move=move+"</br>Pawn become ";
            }
			if(this.moves===undefined){
				game.moves=new Array();
				game.moves.push(0);
			}
            this.moves.push(move);
            this.k=-1;
            this.turn++;
            this.turn=this.turn%2;//передаем очередь ходить игроку другого цвета
            for(var i=0;i<8;i++)
                for(var j=0;j<8;j++) this.dr[i][j]=false;
            this.cpat();
            this.cshah();
            this.cmat();
			this.cdraw();
            if((this.pat==true)||(this.mat==true)||(this.draw==true))this.k=2;
			if(this.pawnc!=true) firebase.database().ref(datapath).set(this);
			drawdead();
        }
		else this.k=-1;
    }
	gamestate(){//реакция на шах, пат, ничью, мат.
		var s="to white";
		if(this.turn!=0)s="to black";
			if((this.shah==true)&&(this.k!=2)){
				alert("Check "+s);
			}
		if(this.k==2){    
			if(this.mat==true){
				alert("Mate "+s);
			}
			else{
				alert("Pat");
			}
			alert("Goodbye");
		}
	}
	pawnchange(nx,ny,go){//реализация обмена пешки на выбранную фигуру
		var xx=true;
        if(this.turn==0)
			xx=false;
		var form1=document.getElementById(this.id);
		var udobno=document.getElementById("Choise");
		form1.removeChild(udobno);
		var udobno=document.getElementById("wcem");
		form1.removeChild(udobno);
		createboard(this.id);
		setcementry(form1,"w");
		drawdead();
		var buf=new Queen(nx,ny,xx);
		switch(go){
			case 1:
			buf=new Rook(nx,ny,xx,true);
			break;
			case 2:
			buf=new Priest(nx,ny,xx);
			break;
			case 3:
			buf=new Horse(nx,ny,xx);
			break;
		}
		var optim=(this.turn+1)%2;
		this.players[optim].f.splice(this.players[optim].f.length-1,1);
		this.players[optim].f.push(buf);
		this.moves[this.moves.length-1]=this.moves[this.moves.length-1]+buf.name;
		this.setboard();
		this.cpat();
        this.cshah();
        this.cmat();
		this.cdraw();
	}
	beforemove(nx,ny){//проверяет нажал ли пользователь на свою фигуру
		for(var i=0;i<this.players[this.turn].f.length;i++){
			var buf=this.players[this.turn].f[i];
			if((nx==buf.x)&&(ny==buf.y)){
				redraw(this);
				this.k=0;
				break;
			}
		}
	}
	el1(nx,ny){//срабатывает при нажатии на поле
		if(this.k!=2){
		this.beforemove(nx,ny);
		if(this.k==0){
			this.light(nx,ny);
			drawlight(this);
		}
		else if(this.k==1){
				this.move(nx,ny);
				redraw(this);
				if(this.pawnc==true){
					drawchoise();
					bufx=nx;
					bufy=ny;
				}
			}
		}
	}
	el2(go){// срабатывает, когда пользователь выбрал на что заменить дошедшую до конца пешку
		this.pawnchange(bufx,bufy,go);
		this.pawnc=false;
		firebase.database().ref(datapath).set(this);
		redraw(this);
	}
}
var bufx;
var bufy;
function evlis1(){//срабатывает при нажатии на поле, вычисляет координаты нажатой клетки
	var input1=document.getElementById("Board");
	var l=input1.getBoundingClientRect().left+intsize/20;
	var t=input1.getBoundingClientRect().top+intsize/20;
	var is09=0.9*intsize/8;
	var nx=~~((event.clientX-l)/is09);
	var ny=~~((event.clientY-t)/is09);
	ny=7-ny;
	if((ny>-1)&&(nx>-1))game.el1(nx,ny);
}
function evlis2(){//срабатывает при выборе на что поменять пешку
		var input1=document.getElementById("Choise");
		var t=input1.getBoundingClientRect().top+intsize/20;
		var go=~~((event.clientY-t)/(intsize/4));
		game.el2(go);
}
function figureevlis(){//срабатывает при выборе нового набора фигур
		var input1=document.getElementById("figuresettings");
		var l=~~(input1.getBoundingClientRect().right/figsetnum);
		var k=~~(event.clientX/l);
		figureset=figset+k;
		for(var i=0;i<figsetnum;i++){
			var input2=document.getElementById(1+"_"+i);
			input2.style.borderColor="white";
		}
		var input2=document.getElementById(1+"_"+k);
		input2.style.borderColor="black";
		if(game!=0){
			redraw(game);
			drawdead();
			if(game.k==1) drawlight(game);
		}
}
function circleevlis(){//срабатывает при выборе нового типа круга
		var input1=document.getElementById("circlesettings");
		var l=~~(input1.getBoundingClientRect().right/circlesetnum);
		var k=~~(event.clientX/l);
		circletype=cirtype+k;
		for(var i=0;i<circlesetnum;i++){
			var input2=document.getElementById(2+"_"+i);
			input2.style.borderColor="white";
		}
		var input2=document.getElementById(2+"_"+k);
		input2.style.borderColor="black";
		if(game!=0){
			redraw(game);
			if(game.k==1) drawlight(game);
		}
		
}
function darkcellevlis(){//срабатывает при выборе нового цвета тёмной клетки
		var input1=document.getElementById("darkcellsettings");
		var l=~~(input1.getBoundingClientRect().right/celcolnum);
		var k=~~(event.clientX/l);
		darkcellcolor=darkcolors[k];
		for(var i=0;i<celcolnum;i++){
			var input2=document.getElementById(3+"_"+i);
			input2.style.borderColor="white";
		}
		var input2=document.getElementById(3+"_"+k);
		input2.style.borderColor="black";
		var udobno=document.getElementById("otherguir");
		udobno.style.backgroundColor=darkcellcolor;
		var udobno=document.getElementById("otherguil");
		udobno.style.backgroundColor=darkcellcolor;
		for(var i=0;i<figsetnum;i++){
			var udobno=document.getElementById(1+"_"+i);
			udobno.style.backgroundColor=darkcellcolor;
		}
		for(var i=0;i<circlesetnum;i++){
			var udobno=document.getElementById(2+"_"+i);
			udobno.style.backgroundColor=darkcellcolor;
		}
		if(game!=0){
			redraw(game);
			if(game.k==1) drawlight(game);
			var udobno=document.getElementById("bcem");
			udobno.style.borderColor=darkcellcolor;
			var udobno=document.getElementById("wcem");
			udobno.style.borderColor=darkcellcolor;
			var input2=document.getElementById(3+"_"+k);
			input2.style.borderColor="black";
		}
}
function brightcellevlis(){//срабатывает при выборе нового цвета светлой клетки
		var input1=document.getElementById("brightcellsettings");
		var l=~~(input1.getBoundingClientRect().right/celcolnum);
		var k=~~(event.clientX/l);
		brightcellcolor=brightcolors[k];
		for(var i=0;i<celcolnum;i++){
				var input2=document.getElementById(4+"_"+i);
			input2.style.borderColor="white";
		}
		var input2=document.getElementById(4+"_"+k);
		input2.style.borderColor="black";
		if(game!=0){
			redraw(game);
			if(game.k==1) drawlight(game);
		}
}
function setimg(im,udobno){// добавляет в требуемую клетку требуемое изображение
	im.className="imgonboard";
	udobno.appendChild(im);
}
function drawchoise(){//рисует выбор фигур для замены пешки
		var color="w";
		if((game.turn+1)%2==1)color="b";
		var form1=document.getElementById(game.id);
		var udobno=document.getElementById("Board");
		form1.removeChild(udobno);
		var udobno=document.getElementById("wcem");
		form1.removeChild(udobno);
		var input1=document.createElement("div");
		input1.id="Choise";
		input1.style.width=size;
		input1.style.height=input1.style.width;
		form1.appendChild(input1);
		setcementry(form1,"w");
		drawdead();
		var str=figureset+"/"+color+"/";
		for(var e0=0;e0<4;e0++){
			var input2= document.createElement("div");
			input2.className="pawnchanges";
			input2.style.background=brightcellcolor;
			if(e0%2==1)input2.style.background=darkcellcolor;
			input1.appendChild(input2);
			var im=document.createElement("img");
			im.src=str+list[e0];
			im.style.height="100%";
			input2.appendChild(im);
		}
		input1.addEventListener('click',evlis2);
}
function drawdead(){//отрисовывает побитые фиугры
	for(var i=0;i<2;i++)
        for(var j=0;j<8;j++){
			var udobno=document.getElementById("dr"+i+j+"w");
			udobno.innerHTML="";
			var udobno=document.getElementById("dr"+i+j+"b");
			udobno.innerHTML="";
		}
	var i1=7
	var i2=0;
	for(var i=1;i<game.players[0].dead.length;i++){
        var bufi=game.players[0].dead[i];
		var udobno=document.getElementById("dr"+i2+i1+"w");
		var im=document.createElement("img");
		im.src=figureset+"/w/"+bufi+".png";
		im.className="imgdead";
		udobno.appendChild(im);
		if(i1>0) i1--;
		else{
			i1=7;
			i2++;
		}
    }
	i1=7
	i2=0;
    for(var i=1;i<game.players[1].dead.length;i++){
        var bufi=game.players[1].dead[i];
		var udobno=document.getElementById("dr"+i2+i1+"b");
		var im=document.createElement("img");
		im.src=figureset+"/b/"+bufi+".png";
		im.className="imgdead";
		udobno.appendChild(im);
		if(i1>0) i1--;
		else{
			i1=7;
			i2++;
		}	
    }
}
function redraw(game){//перерисовывает поле
    for(var i=0;i<8;i++)
        for(var j=0;j<8;j++){
			var udobno=document.getElementById(""+i+j);
			udobno.innerHTML="";
			if((i+j)%2==1) udobno.style.background=brightcellcolor;
			else udobno.style.background=darkcellcolor;
		}
    for(var i=0;i<game.players[0].f.length;i++){
        var buf=game.players[0].f[i];
        var bufi=buf.name;
		var i1=7-buf.y;
		var i2=7-buf.x;
		var udobno=document.getElementById(""+i1+i2);
		var im=document.createElement("img");
		im.src=figureset+"/w/"+bufi+".png";
		setimg(im,udobno);
    }
    for(var i=0;i<game.players[1].f.length;i++){
        var buf=game.players[1].f[i];
        var bufi=buf.name;
		var i1=7-buf.y;
		var i2=7-buf.x;
		var udobno=document.getElementById(""+i1+i2);
		var im=document.createElement("img");
		im.src=figureset+"/b/"+bufi+".png";
		setimg(im,udobno);
    }
 }  
 function drawlight(game){//рисует возможные ходы интвертирует цвет клеток, ход на которые приведёт к "убийству"
    for(var i=0;i<8;i++)
        for(var j=0;j<8;j++)
            if(game.dr[i][j]==true){
                var i1=7-i;
				var i2=7-j;
				var udobno=document.getElementById(""+i1+i2);
				var im=document.createElement("img");
				im.src=circletype+".png";
				if(game.board[i][j]!=null){
					if((i1+i2)%2==0) udobno.style.background=brightcellcolor;
						else udobno.style.background=darkcellcolor;
				}
				else setimg(im,udobno);
        }
}
var game;
var list=["Queen.png","Rook.png","Priest.png","Horse.png"];
var alf=["A","B","C","D","E","F","G","H"];
function setcementry(form1,color){//поля для отрисовки побитых фигур
	var input1=document.createElement("div");
	input1.id=color+"cem";
	input1.className="deads";
	input1.style.width=0.9*intsize+"px";
	input1.style.border=0.05*intsize+"px solid "+darkcellcolor;
	form1.appendChild(input1);
	for(var q=0;q<2;q++){
		var input2=document.createElement("div");
		input2.className="deathrow";
		input2.id="dr"+q+color;
		input1.appendChild(input2);
		for(var i=0;i<8;i++){
			var input3=document.createElement("div");
			input3.className="deathcell";
			input3.id="dr"+q+i+color;
			if((q+i)%2==0)input3.style.backgroundColor="gray";
			else input3.style.backgroundColor="white";
			input2.appendChild(input3);
		}
	}
}
function createboard(parentid){// создаёт доску и поля для отрисовки побитых фигур
  var form1=document.getElementById(parentid);
  var input1=document.createElement("div");
  input1.id="Board";
  input1.align="center";
  input1.style.width=size;
  input1.style.height=input1.style.width;
  form1.appendChild(input1);
  input1.addEventListener('click',evlis1);
  for(var e0=-1;e0<9;e0++){
    var input1= document.createElement("div");
    input1.id="div"+e0;
    var udobno=document.getElementById("Board");
    udobno.appendChild(input1);
	if ((e0==-1)||(e0==8)){
		input1.className="horborder";
		if(e0==8){
			for(var e1=-1;e1<9;e1++){
				var input2= document.createElement("div");
				udobno=document.getElementById(input1.id);
				input2.className="horbordercell";
				input2.id=""+e0+e1;
				if ((e1!=-1)&&(e1!=8)){
					udobno.appendChild(input2);
					input2.style.width="11.25%";
					var input3= document.createElement("div");
					input3.className="horbordertext";
					input3.innerHTML=alf[7-e1];
					input2.appendChild(input3);
				}
				else udobno.appendChild(input2);
			}
		}
	}
	else{
		input1.className="defaultrow";
		for(var e1=-1;e1<9;e1++){
			var input2= document.createElement("div");
			input2.className="defaultcell";
			udobno=document.getElementById(input1.id);
			input2.id=""+e0+e1;
			if ((e1==-1)||(e1==8)){
				input2.className="verbordercell";
				udobno.appendChild(input2);
				if(e1==8) {
					var input3= document.createElement("div");
					input3.className="verbordertext";
					input3.innerHTML=8-e0;
					input2.appendChild(input3);
					}
				
			}
			else{input2.style.width="11.25%";
				input2.style.background=brightcellcolor;
					if((e0+e1)%2==0)input2.style.background=darkcellcolor;
				udobno.appendChild(input2);
			}
		}
	}
  }
  var input1=document.createElement("div");
  redraw(game);
}
function createbuttons(id){//cоздание всего кроме доски и отделов для побитых фигур
	var form1=document.getElementById(id);
	var s=100*(window.innerWidth-0.625*window.innerHeight)/(2*window.innerWidth);
	var input1=document.createElement("div");
	input1.className="othergui";
	input1.id="otherguil";
	input1.style.width=s+"%";
	input1.style.float="left";
	form1.appendChild(input1);
	creategsetting(input1,"settings");
	var input1=document.createElement("div");
	input1.className="othergui";
	input1.id="otherguir";
	input1.style.width=s+"%";
	input1.style.float="right";
	form1.appendChild(input1);
	createmovelist(input1);
}
var picsnumber=0;
var figsetnum=7;
var circlesetnum=8;
var celcolnum=4;
var darkcellcolor="purple";
var brightcellcolor="white";
var picpath="img/";
var figset=picpath+"figures/";
var cirtype=picpath+"circles/";
var figureset=figset+picsnumber;
var circletype=cirtype+picsnumber;
function creategsetting(par,meu){//создание интерфейса для настроек графики
	var input1=document.createElement("div");
	input1.id=meu;
	if(meu=="settings0") par.style.backgroundColor="black";
	par.appendChild(input1);
	var input2=document.createElement("div");
	input2.id="figuresettings";
	input1.appendChild(input2);
	var input3=document.createElement("div");
	createcelsettings(input2,"Choose set of figures",1);
	var input2=document.createElement("div");
	input2.id="circlesettings";
	input1.appendChild(input2);
	createcelsettings(input2,"Choose circle",2);
	if(meu=="settings0"){
		for(var k=0;k<circlesetnum;k++){
			var input3=document.getElementById(k+"_"+k+"_"+k);
			input3.className=input3.className+"0";
		}
	}
	var input2=document.createElement("div");
	input2.id="darkcellsettings";
	input1.appendChild(input2);
	createcelsettings(input2,"Choose darkcell's colors",3);
	var input2=document.createElement("div");
	input2.id="brightcellsettings";
	input1.appendChild(input2);
	createcelsettings(input2,"Choose brightcell's colors",4);
}
var brightcolors=["white","gray","yellow","green"];
var darkcolors=["red","purple","blue","brown"];
function createcelsettings(par,message,i){//создание интерфейса для настроек графики
	var input1=document.createElement("div");
	input1.className="nameofsettings";
	input1.innerHTML="<p id="+"message"+i+">"+message+":</p>"
	par.appendChild(input1);
	var input1=document.createElement("div");
	input1.className="choises";
	par.appendChild(input1);
	if(i==1) input1.addEventListener("click",figureevlis);
	if(i==2) input1.addEventListener("click",circleevlis);
	if(i==3) input1.addEventListener("click",darkcellevlis);
	if(i==4) input1.addEventListener("click",brightcellevlis);
	var n=figsetnum;
	if(i==2)n=circlesetnum;
	if(i>2)n=celcolnum;
	var wid=100/n;
	for(var k=0;k<n;k++){
		var input2=document.createElement("div");
		input2.className="choisescell";
		input2.style.width=wid+"%";
		input2.id=i+"_"+k;
		input1.appendChild(input2);
		if(i<3){
			var input3=document.createElement("img");
			input3.className="imgsettings"+i;
			if(i==1){
				input3.src=figset+k+"/w/Pawn.png";
			}
			else if(i==2){
				input3.src=cirtype+k+".png";
				input3.id=k+"_"+k+"_"+k;
			}
			if(input2.offsetWidth>input2.offsetHeight)input3.style.height="100%";
			else input3.style.width="100%";
			input2.appendChild(input3);
		}
		else if(i==3){
			input2.style.backgroundColor=darkcolors[k];
		}
		else if(i==4){
			input2.style.backgroundColor=brightcolors[k];
		}
		
	}
}
function createmovelist(par){//создаёт список ходов
	var input1=document.createElement("div");
	input1.id="movelist";
	par.appendChild(input1);
}
function addnewmove(){//добавляет новый ход в список ходов
	var message=game.moves[game.moves.length-1];
	var col=game.moves.length;
	var t=1;
	if(game.turn==1) t=0;
	if(t==0){
		var input1=document.getElementById("movelist");
		var input2=document.createElement("div");
		input2.className=("Pairofmoves");
		input2.id="move"+(col-1)/2;
		input1.appendChild(input2);
		var input3=document.createElement("div");
		input3.className=("onemovew");
		input3.style.backgroundColor="white";
		input3.innerHTML="<p class="+"message"+">"+message+"</p>";
		input2.appendChild(input3);
	}
	else{
		var input1=document.getElementById("move"+((col)/2-1));
		var input2=document.createElement("div");
		input2.className=("onemoveb");
		input2.backgroundColor="black";
		input2.innerHTML="<p class="+"message"+">"+message+"</p>";
		input1.appendChild(input2);
	}
	var input1=document.getElementById("movelist");
	input1.scrollTop = input1.scrollHeight;
}
var intsize=0.625*window.innerHeight;
var size=intsize+"px";
var intwindowwidth=window.innerWidth;
var intwindowheight=window.innerHeight;
var windowwidth=intwindowwidth+"px";
var windowheight=intwindowheight+"px";
var gameid=0;
var dpath="games/";
var datapath=dpath+gameid;
function create(id){//создание игры
    var form1= document.getElementById(id);
	form1.style.width=windowwidth;
	form1.style.height=windowheight;
    form1.align="center";
	game=new Game(id);
	createbuttons(id);
	setcementry(form1,"b");
    createboard(id);
	setcementry(form1,"w")
	firebase.database().ref(datapath).set(game);
}
create(0);
var refi=firebase.database().ref(dpath);
refi.on('child_changed',function(data) {//отправка актуальной версии партии игрокам после хода
		g=data.val();
		var shor=g.players[0].dead;
		game.players[0].dead.length=shor.length;
		var optimizator=game.players[0].dead.length;
		for(var i=0;i<optimizator;i++){
			game.players[0].dead[i]=shor[i];
		}
		shor=g.players[1].dead;
		game.players[1].dead.length=shor.length;
		optimizator=game.players[1].dead.length;
		for(var i=0;i<optimizator;i++){
			game.players[1].dead[i]=shor[i];
		}
		game.id=g.id;
		game.pawnc=g.pawnc;
		game.moves=g.moves;
		game.x=g.x;
		game.y=g.y;
		game.shah=g.shah;
		game.mat=g.mat;
		game.pat=g.pat;
		game.draw=g.draw;
		game.k=g.k;
		game.turn=g.turn;
		shor=g.players[0].f;
		game.players[0].f.length=shor.length;
		optimizator=game.players[0].f.length;
		for(var i=0;i<optimizator;i++){
			if(shor[i].name=="Pawn")game.players[0].f[i]=new Pawn(shor[i].x,shor[i].y,true);
			if(shor[i].name=="Priest")game.players[0].f[i]=new Priest(shor[i].x,shor[i].y,true);
			if(shor[i].name=="Horse")game.players[0].f[i]=new Horse(shor[i].x,shor[i].y,true);
			if(shor[i].name=="Rook")game.players[0].f[i]=new Rook(shor[i].x,shor[i].y,true,shor[i].movv);
			if(shor[i].name=="Queen")game.players[0].f[i]=new Queen(shor[i].x,shor[i].y,true);
			if(shor[i].name=="King")game.players[0].f[i]=new King(shor[i].x,shor[i].y,true,shor[i].movv);
		}
		shor=g.players[1].f;
		game.players[1].f.length=shor.length;
		optimizator=game.players[1].f.length;
		for(var i=0;i<optimizator;i++){
			if(shor[i].name=="Pawn")game.players[1].f[i]=new Pawn(shor[i].x,shor[i].y,false);
			if(shor[i].name=="Priest")game.players[1].f[i]=new Priest(shor[i].x,shor[i].y,false);
			if(shor[i].name=="Horse")game.players[1].f[i]=new Horse(shor[i].x,shor[i].y,false);
			if(shor[i].name=="Rook")game.players[1].f[i]=new Rook(shor[i].x,shor[i].y,false,shor[i].movv);
			if(shor[i].name=="Queen")game.players[1].f[i]=new Queen(shor[i].x,shor[i].y,false);
			if(shor[i].name=="King")game.players[1].f[i]=new King(shor[i].x,shor[i].y,false,shor[i].movv);
		}
		game.setboard();
		redraw(game);
		drawdead();
		game.gamestate();
		if(game.moves!=undefined) addnewmove();
		else {
			game.moves=new Array();
			var input1=document.getElementById("movelist");
			input1.innerHTML="";
			
		}
});