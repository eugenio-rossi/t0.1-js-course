console.log('connected');
const spinner = document.getElementById('spinner');
spinner.classList.add('visually-hidden');

function onclickFunction(){
    let urlValue = document.getElementById("url").value;
    spinner.classList.remove('visually-hidden');

    fetch(urlValue)
      .then(res => res.status)
      .then(data => {
          alert(data);
      })
      .catch(fail => {
          alert(`Porca madò: ${fail}`);
      })
      .finally(() => 
          spinner.classList.add('visually-hidden')
      )      
};