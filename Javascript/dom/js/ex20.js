var HelloWord = function () {
    return Reflect.construct(HTMLElement, [], this.constructor);
}

HelloWord.prototype = Object.create(HTMLElement.prototype);

HelloWord.prototype.constructor = HelloWord;

HelloWord.prototype.connectedCallback = function () {
    // this.innerText = "Hello World";
    // var name = this.getAttribute('name');
    // console.log(name);

    var defaultValue = this.getAttribute('defaultValue');
    var h1 = document.createElement('h1');
    h1.innerText = 'Hello Ha ';
    var text = document.createTextNode(defaultValue);
    h1.append(text);
    this.append(h1);


    var button = document.createElement('button');
    button.innerText = '+';
    button.addEventListener('click', function () {
        text.data++;

    });
    this.append(button);
}

HelloWord.prototype.disconnectedCallback = function () {
    console.log('disconnectedCallback');
}

customElements.define('hello-word', HelloWord);