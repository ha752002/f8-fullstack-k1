
Component.create('image-tag', function () {
    var link = this.getAttribute('link');
    var width = this.getAttribute('width');
    var height = this.getAttribute('height');
    var style = this.getAttribute('style');
    this.innerHTML = `<img src="${link}" width="${width}" height="${height}"  style=${style}/>`;
});



Component.create('box-image', function () {
    var shadow = this.attachShadow({ mode: 'open' });

    var style = document.createElement('style');
    style.innerHTML = `
    .box-image {
        border: 1px solid red;
        padding: 10px;
    }
    `;

    this.prepend(style);
    this.innerHTML = `<div class="box-image">${this.innerHTML}</div>`;
});
