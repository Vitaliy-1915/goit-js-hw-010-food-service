const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
   
const bodyClass = document.body;

localStorage.setItem('DARK', Theme.DARK);
const readDarkTheme = localStorage.getItem('DARK');
localStorage.setItem('LIGHT', Theme.LIGHT);
const readLightTheme = localStorage.getItem('LIGHT');

    bodyClass.classList.add(localStorage.getItem('Theme') === null
    ? Theme.LIGHT
    : readDarkTheme,
);

console.log(localStorage.getItem('Theme'));
console.log(Theme.LIGHT);
console.log(readDarkTheme);

    const onCheckboxChangeClassBody = document.querySelector('#theme-switch-toggle');
    onCheckboxChangeClassBody.addEventListener('change', changeClassBody);  

function changeClassBody(event) {
    
    
        localStorage.setItem('DARK', Theme.DARK);
        const readDarkTheme = localStorage.getItem('DARK');
        
        localStorage.setItem('LIGHT', Theme.LIGHT);
        const readLightTheme = localStorage.getItem('LIGHT');
    
    if (onCheckboxChangeClassBody.checked) {
            bodyClass.classList.add(readDarkTheme);
            bodyClass.classList.remove(readLightTheme);

           localStorage.removeItem('LIGHT');
           
        } else if (!onCheckboxChangeClassBody.checked) {
            bodyClass.classList.add(readLightTheme);
            bodyClass.classList.remove(readDarkTheme);

            localStorage.removeItem('DARK');
    };
    

};







    

        

        
       
        








