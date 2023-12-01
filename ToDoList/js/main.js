const myModal = document.getElementById('modal-window')
const myInput = document.getElementById('btn-edit')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const getApi = () => {
    const apiKey = 'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QiLCJpYXQiOjE1MTYyMzkwMjJ9';

    fetch(`https://apitodo-2yow.onrender.com/data?key=${apiKey}`)
    .then(response => response.json())
        .then(data => {
            todo = data;
        })
}


const deleteApi = id => {
    fetch(`https://apitodo-2yow.onrender.com=${id}`,
    {
        method: "DELETE"
    })
    .then(res => console.log("DELETE: ", res))
}

const updateApi = id => {
    fetch(`https://apitodo-2yow.onrender.com=${todo}`,
    )
}