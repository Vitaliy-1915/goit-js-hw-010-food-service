const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

    // const bodyClass = document.body;
    // bodyClass.classList.add(Theme.LIGHT);
    // console.log(bodyClass.classList);

const onCheckboxChangeClassBody = document.querySelector('#theme-switch-toggle');
onCheckboxChangeClassBody.addEventListener('change', changeClassBody);

function changeClassBody(event) {
       const bodyClass = document.body;
    if (onCheckboxChangeClassBody.checked) {
         bodyClass.classList.add(Theme.DARK);
        bodyClass.classList.remove(Theme.LIGHT);
        localStorage.setItem('Theme.DARK', Theme.DARK);
        const saveDarkTheme = localStorage.getItem('Theme.DARK');
        localStorage.removeItem('Theme.LIGHT');
 
    } else {
        bodyClass.classList.add(Theme.LIGHT);
        bodyClass.classList.remove(Theme.DARK);
        localStorage.setItem('Theme.LIGHT', Theme.LIGHT);
        const saveLightTheme = localStorage.getItem('Theme.LIGHT');
        localStorage.removeItem('Theme.DARK');
        
    };
       
}
        

        
       
        








