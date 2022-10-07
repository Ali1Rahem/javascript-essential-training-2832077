class Book {
    constructor(
        name,
        publiser,
        date,
        Isnew,
        bookLengthfirstedtion,
        bookLengthfirsecoundedtion,

    ) {
       // Define properties:
       this.name = name;
       this.publiser = publiser;
       this.date = date;
       this.booklength = {
        firstedtion: bookLengthfirstedtion,
        secoundedtion: bookLengthfirsecoundedtion,   
    };
      this.Isnew = Isnew;

}
// Add methods like normal functions:
newbook(bookstatus) {
    this.Isnew = bookstatus;
}
newbookedtion(Java, Asp ){
    this.booklength.firstedtion = bookLengthfirstedtion;
    this.booklength.secoundedtion = bookLengthfirsecoundedtion;


}

}

export default Book;