const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
   
    const onCheckboxChangeClassBody = document.querySelector('#theme-switch-toggle');
    onCheckboxChangeClassBody.addEventListener('change', changeClassBody);  

function changeClassBody(event) {
    const bodyClass = document.body;
    
        localStorage.setItem('Theme.DARK', Theme.DARK);
        const readDarkTheme = localStorage.getItem('Theme.DARK');
        
        localStorage.setItem('Theme.LIGHT', Theme.LIGHT);
        const readLightTheme = localStorage.getItem('Theme.LIGHT');
    
    if (onCheckboxChangeClassBody.checked) {
            bodyClass.classList.add(readDarkTheme);
            bodyClass.classList.remove(readLightTheme);

           localStorage.removeItem('Theme.LIGHT');
           
        } else if (!onCheckboxChangeClassBody.checked) {
            bodyClass.classList.add(readLightTheme);
            bodyClass.classList.remove(readDarkTheme);

            localStorage.removeItem('Theme.DARK');
       };           
};


    


    

        

        
       
        








