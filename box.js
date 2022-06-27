class Box
  {
    constructor(x,y,w,h,vx,vy,clr)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
      this.vx = vx;
      this.vy = vy;
      this.clr = clr;
    }
    
    show()
    {
      fill(this.clr);
      rect(this.x,this.y,this.w,this.h);
    }
    
    move()
    {
      this.x = this.x+this.vx;
    }

    moveup(){
      this.y = this.y - this.vy;
    }


  }

  
