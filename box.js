class box{
    constructor(x,y,width,height){
        var option={
          restitution:1  
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill(255)
        rect(pos.x,pos.y,this.width,this.height)
    }   
}