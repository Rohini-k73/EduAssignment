// Solution - 2

const ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
];

// a. 
const headers = Array.from(new Set(ratingData.map(({ restaurant }) => restaurant)));  // Will give the unique headers from Array of Objects ['KFC','Burger King']
let arr = [];
headers.map((head) => {
    let total = 0; // Initializing the total 
    let count = 0; // Initializing the count
    const filteredratingData = ratingData.filter(obj => obj.restaurant == head); // Filtering the main Array for selected restaurant and then computing total 
    filteredratingData.map((item) => {
        total = filteredratingData.reduce((prev, next) => prev + next.rating, 0);
        count++;
    })
    arr.push({ 'restaurant': head, 'averageRating': (total / count).toFixed(2) });  // pushing the objects to final Array 
})
return arr;

// b.
arr.filter(item => item.averageRating >= 4);  // Filtering the Array for AverageRating >= 4