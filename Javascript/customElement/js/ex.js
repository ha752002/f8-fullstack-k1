

// b1 hàm tạo , và phải kế thừa từ HTML 
// để kế thưà từ hàm tạo đó , thì sd thông qua 1 hàm tạo khác 
// => reflect
function HelloWorld() {
    // ts1 : kế thừa HTMLElement 
    // ts2 : các ts muốn truyền , k có thì để md mang rỗng []
    // ts3 : là hàm tạo hiện tại 
    return Reflect.construct(HTMLElement, [], HelloWorld);
}

HelloWorld.prototype = Object.create(HTMLElement.prototype);

customElements.define('hello-world', HelloWorld);