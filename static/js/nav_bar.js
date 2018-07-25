function switchClass(class_name, has_class_name, gets_class_name) {
  has_class_name.classList.remove(class_name);
  gets_class_name.classList.add(class_name);
}

function toggleClassName(html_element, class_name) {
  html_element_classNames = html_element.className.split(' ');
  if (html_element_classNames.includes('hidden')) {
    html_element.classList.remove('hidden');
  }
  else {
    html_element.classList.add('hidden');
  }
}

function navBarButton() {
  let nav_bar           = document.getElementById('nav_bar');
  let nav_menu          = document.getElementById('nav_menu');
  
  //create button
  let nav_button        = document.createElement('img');
  nav_button.id         = 'nav_button';
  nav_button.src        = './img/bars-solid.svg';
  nav_button.alt        = 'navigation bar';
  
  //create button wrapper
  let nav_wrap_button   = document.createElement('div');
  nav_wrap_button.id    = 'nav_wrap_button';
  nav_wrap_button.className  = 'hidden';
  
  //add button to DOM
  nav_wrap_button.appendChild(nav_button);
  nav_bar.appendChild(nav_wrap_button);
  
  //toggle navigation menu on click
  nav_button.addEventListener('click', function() {
    toggleClassName(nav_menu, 'hidden');
  }, false);
  
  //when width < 900, show button + hide menu
  if (document.documentElement.clientWidth < 900) {
    switchClass('hidden', nav_wrap_button, nav_menu);
  };
  
  //when width change < 900, show button + hide menu, else do opposite
  let max_width_899px = window.matchMedia('(max-width: 899px)');
  max_width_899px.addListener(function(e) {
    if (e.matches) {
      switchClass('hidden', nav_wrap_button, nav_menu);
    } 
    else {
      switchClass('hidden', nav_menu, nav_wrap_button);
    }
  });
}
