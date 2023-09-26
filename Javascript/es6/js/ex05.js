
class User {
    //B1 khai baos constructor()
    // constructor dungf để khai báo thioovs tính , các giá trị khởi tạo
    // chạy đầu tiên khi object được khởi tạo 


    constructor() {
        // Định nghĩa thuộc tính
        this.name = 'Ha';
        this.email = "Ha@gmail.com";


        //các giá trị khởi tạo 

    }

    //B2 Các phương thức
    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

}

// User.prototype.message = "Hello";
// const user = new User("Ha", "ha@gmail.com");


// class Authentication extends User {
//     getUser() {
//         return {
//             name: this.getName(),
//             email: this.getEmail(),
//         };
//     }
// };

const root = document.querySelector('#root');

class Counter {
    constructor() {
        this.count = 0;
        this.h1 = null;
    }

    handleIncrement = () => {
        this.count++;
        this.h1.innerText = this.count;
    }

    render() {
        this.h1 = document.createElement('h1');
        this.h1.innerText = this.count;
        const button = document.createElement('button');
        button.innerText = '+';
        button.addEventListener('click', this.handleIncrement)

        root.append(this.h1);
        root.append(button);
    }
}



new Counter().render();

