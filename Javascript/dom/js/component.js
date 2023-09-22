// create components name is : image (show image)
/**
 * have atributes
 * link
 * with
 * height
 * style
 */

// var ImageTag = function () {
//     return Reflect.construct(HTMLElement, [], this.constructor);
// }

// ImageTag.prototype = Object.create(HTMLElement.prototype);

// ImageTag.prototype.constructor = ImageTag;
// console.log(ImageTag.prototype);
// ImageTag.prototype.connectedCallback = function () {

// }



var Component = {
    //trong function có name(thẻ html), và callback
    create: function (name, handle) {
        var componentFunc = function () {
            return Reflect.construct(HTMLElement, [], this.constructor);

        }

        componentFunc.prototype = Object.create(HTMLElement.prototype);

        //Taọ constructor 
        componentFunc.prototype.constructor = componentFunc;
        componentFunc.prototype.connectedCallback = handle;


        //b3 dky component
        customElements.define(name, componentFunc);
    }
}