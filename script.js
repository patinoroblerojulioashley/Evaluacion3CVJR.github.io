// Configurar Firebase (con tus propias credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyDkxyG7cXeItlbhGwH1TLXKWGW0fMW4Gqk",
  authDomain: "agencia-e641f.firebaseapp.com",
  projectId: "agencia-e641f",
  storageBucket: "agencia-e641f.appspot.com",
  messagingSenderId: "989881680402",
  appId: "1:989881680402:web:e32660195ecc8275f28ecb",
  measurementId: "G-L0GXGC01L5"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let models = [];

function addModel() {
    const modelName = document.getElementById('modelName').value;
    const brand = document.getElementById('brand').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const releaseDate = document.getElementById('releaseDate').value;

    if (modelName && brand && year && price && releaseDate) {
        const newModel = {
            modelName: modelName,
            brand: brand,
            year: year,
            price: price,
            releaseDate: releaseDate
        };

        // Agregar el modelo a Firestore
        db.collection('models').add(newModel)
            .then(() => {
                models.push(newModel);
                displayModels();
                clearForm();
            })
            .catch(error => console.error('Error adding document: ', error));
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function displayModels() {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';

    models.forEach((model, index) => {
        const modelItem = document.createElement('div');
        modelItem.classList.add('model-item');
        modelIt
