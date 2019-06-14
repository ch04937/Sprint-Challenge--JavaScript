class CuboidMaker {
    constructor(dimension){
        this.length= dimension.length;
        this.width = dimension.width;
        this. height = dimension.height; 
    }
    volume(){
    return this.length*this.width*this.height;
    }
    surfaceArea(){
    return 2*(this.length*this.width +this.length*this.height + this.width*this.height);
    }

}

class CubeMaker extends CuboidMaker{
    constructor(cube){
        super(cube);
        this.length;
    }
    cubeSurfaceArea(){
        return 6*(this.length*this.length);
    }
}

 
const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});
const cubo = new CubeMaker({
    length:3
});




// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cubo.cubeSurfaceArea()); //54

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.