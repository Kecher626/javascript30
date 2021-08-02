const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {


    const suffix = this.dataset.sizing || ''; // get the data- from html tags', here would get the <input ... data-sizing="px">
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //change the css variables
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // make sure that the values would change in every single click