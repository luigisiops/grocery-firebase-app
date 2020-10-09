const submit = document.getElementById("submit")
const groceryItem = document.getElementById("grocery-item-input")

const groceryStore = document.getElementById('grocery-store')
const storeInput = document.getElementById('grocery-store-input')
const storeDropDown = document.getElementById('grocery-store-dropdown')
const categoryInput = document.getElementById('grocery-categories-input')

const categories = document.getElementById('grocery-categories')

const display = document.getElementById('display')
const getButton = document.getElementById('getData')
const db = firebase.firestore();

const addData = () => {
    let data = db.collection(groceryStore.value).doc(categories.value).update({
        items: firebase.firestore.FieldValue.arrayUnion("chicken")
    }).then(()=>{
        console.log('added data')
    }).catch(()=>{
        console.error('failed to load data')
    })
}


const getAllItems = () => {
    db.collection(groceryStore.value).doc(categories.value).get().then((snapshot)=>{
       let data = snapshot.data()
       console.log(data.items)
       data.items.map((item)=>{
        display.insertAdjacentHTML('beforeend',item)
       })
    })
}


submit.addEventListener('click', addData)
getButton.addEventListener('click', getAllItems)


