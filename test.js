let input = document.getElementById("inputBox");
let inputViaBtn = document.getElementById("button-addon");
let itemsDiv = document.getElementById("items");

const URL = 'https://6073db87066e7e0017e786f2.mockapi.io/data';

// Get Items
const getItems = async() => {
    const jsonData = await fetch(URL,{
        method:"GET",

    })
    const data = await jsonData.json();

    
}
getItems();

// Create
const createItem = async(data) => {
    const jsonData = await fetch(URL,{
        method:"POST",
        headers: {"content-type" : 'application/json'},
        body: JSON.stringify({data})

    })


}
// createItem("data 23");

// Update Item
const updateItem = async(data,id) => {
    const jsonData = await fetch(URL+`/${id}`,{
        method:"PUT",
        headers: {"content-type" : 'application/json'},
        body: JSON.stringify({data})

    })
}
// updateItem('data 250', 8);

// Delete Item
const deleteItem = async(data,id) => {
    const jsonData = await fetch(URL+`/${id}`,{
        method:"DELETE",
        headers: {"content-type" : 'application/json'},
        body: JSON.stringify({data})

    })

}
deleteItem('data 250', 8);
