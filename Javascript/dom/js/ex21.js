var host = document.querySelector('#shadow-root');
// console.log(host);
var root = host.attachShadow({ mode: 'open' });
// console.log(root);

root.innerHTML = `
    <style>
    p {
        color: red;
    }
    
    </style>
    <p>Hello F8</p>
    <h2> Ha</h2>
`;