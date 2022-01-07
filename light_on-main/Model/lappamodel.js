class LampaModel{
    constructor(tomb){
        this.tomb=tomb;
        
    }
    ellnorzes(){
        const lampa = new Lampa();
        
        if (lampa.setAllapot=true) {
            console.log("lekapcsolva");
        }
    }
     atallit(elemID) {
        let meret = 3;
        if (elemID > meret - 1) {
           this.tomb[elemID - meret].setAllapot();

        }
        if (elemID < meret * meret - meret) {
            this.tomb[elemID + meret].setAllapot();

        }
        if (elemID % meret !== 0) {
            this.tomb[elemID - 1].setAllapot();

        }
        if (elemID % meret !== meret - 1) {
            this.tomb[elemID + 1].setAllapot();

        }
        

    }
}