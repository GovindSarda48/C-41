class Leadership{

    constructor(){
        this.leadTitle = createElement('h1');
        this.name = null;
        this.distance = 0;
        this.nameTitle = createElement('h3');
        this.disTitle = createElement('h3');
    }

    display(){
        fill("black");
        this.leadTitle.html("AND THE WINNERS ARE");
        this.leadTitle.position(displayWidth/2-50,0);

        this.nameTitle.html("NAME");
        this.nameTitle.position(displayWidth/4,80);

        this.disTitle.html("DISTANCE");
        this.disTitle.position(displayWidth/2,80);
    }

}