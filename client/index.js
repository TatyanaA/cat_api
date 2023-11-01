const displayBtn = document.querySelector('#display')


displayBtn.addEventListener('click', fetchCats)

function fetchCats() {
  fetch("http://localhost:8000/cats/")
  .then(resp => resp.json())
  .then(addCat)
}

function addCat(data) {
  const catDiv = document.querySelector('#cats')
  const cats = data
  const numberOfCats = Object.keys(cats).length;
  const randomIndex = Math.floor(Math.random() * numberOfCats)
  const randomCat=cats[randomIndex]
  console.log("line16 "+randomCat.name )
  catDiv.textContent = ''
    

  const p = document.createElement('p')
  p.textContent = randomCat.name
  catDiv.appendChild(p)

//   cats.forEach(cat => {
//     const li = document.createElement('li')
//     li.textContent = cat.name
//     catList.appendChild(li)
//   })
}

const form = document.getElementById('catForm')

form.addEventListener('submit', createCat)

async function createCat(e) {
  e.preventDefault()
  console.log(e.target.cat.value)

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: e.target.cat.value
    })
  }

  const response = await fetch("http://localhost:8000/cats/", options)

  if (response.status == 201) {
    e.target.cat.value = ''
  }
}
