const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

    const bodyClass = document.body;
    bodyClass.classList.add(Theme.LIGHT);
    // console.log(bodyClass.classList);

const onCheckboxChangeClassBody = document.querySelector('#theme-switch-toggle');
onCheckboxChangeClassBody.addEventListener('change', changeClassBody);

function changeClassBody(event) {

    if (onCheckboxChangeClassBody.checked) {
        bodyClass.classList.remove(Theme.LIGHT);
        bodyClass.classList.add(Theme.DARK);

        localStorage.setItem('Theme.DARK', 'true');
        const savedTheme = localStorage.getItem('Theme.DARK');
        if (savedTheme === 'true') {
           onCheckboxChangeClassBody.checked  = true;
        }
        

        } else {
        bodyClass.classList.remove(Theme.DARK);
        bodyClass.classList.add(Theme.LIGHT);
        localStorage.removeItem('Theme.DARK');
    }

}







