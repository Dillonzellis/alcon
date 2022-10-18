const years = document.querySelectorAll('.year');

const yearsArr = [...years];

yearsArr.map((year) =>{
    // innerHTML = new Date().getFullYear();
    document.write(new Date().getFullYear());
})