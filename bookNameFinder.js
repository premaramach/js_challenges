// TODO: define addFavoriteBook(..) function
// TODO: define printFavoriteBooks(..) function
//-----------------------------------------------------------------------------------------------------------

let favoriteBooks = [];

function addFavoriteBook(bookName) {
    
    if(!bookName.includes("Great")){
    favoriteBooks.push(bookName);
    }

}

function printFavoriteBook() {
    
    console.log(`Favourite Books:${favoriteBooks.length}`);
          
    for(let book of favoriteBooks) {
        console.log(`Book Name: ${book}`);
    }
    
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime and Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("Do You Know JS?!");
printFavoriteBook();


