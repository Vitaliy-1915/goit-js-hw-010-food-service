// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

    const bodyClass = document.body;
    bodyClass.classList.add('light_theme');
    //console.log(bodyClass.classList);

const onCheckboxChangeClassBody = document.querySelector('#theme-switch-toggle');
//console.log(onCheckboxChangeClassBody.checked);

onCheckboxChangeClassBody.addEventListener('change', changeClassBody);

function changeClassBody (event) {
    // const bodyClass = document.body;
    // bodyClass.classList.add('light_theme');
    bodyClass.classList.add('dark-theme')
     console.log(bodyClass);

    if (bodyClass.classList === 'dark-theme') {
        bodyClass.classList.remuve('dark-theme');
    } 
}


