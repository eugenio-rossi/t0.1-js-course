console.log('connected');

const spinner = document.getElementById('spinner');
const postResult = document.getElementById('postResult');
const postEndpoint = 'https://my-json-server.typicode.com/typicode/demo/posts'; 

spinner.classList.add('visually-hidden');

// function onclickFunction(){
//     let urlValue = document.getElementById("url").value;
//     spinner.classList.remove('visually-hidden');

//     fetch(urlValue)
//       .then(res => res.status)
//       .then(data => {
//           alert(data);
//       })
//       .catch(fail => {
//           alert(`Porca madò: ${fail}`);
//       })
//       .finally(() => 
//           spinner.classList.add('visually-hidden')
//       )      
// };

function onclickLoad(){
    fetch(postEndpoint)
        .then(res => res.json())
        .then(data => {
            let variableAppodjAskedByCrocco = "";
            data.forEach(element => {
                variableAppodjAskedByCrocco += `<li>${element.title}</li>`;
            });
            postResult.innerHTML = `<ul>${variableAppodjAskedByCrocco}</ul>`;
        })
}