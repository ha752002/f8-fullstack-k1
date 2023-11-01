import Menu from './Menu';

const Header = ({ title, name, email, age }) => {
    const menu = [
        {
            id: 1,
            link: '#',
            title: 'Menu 1',
        },
        {
            id: 2,
            link: '#',
            title: 'Menu 2',
        },
        {
            id: 3,
            link: '#',
            title: 'Menu 3',
        },
    ];
    const handleReceiveData = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>HEADER</h1>
            <h2>{title}</h2>
            <p>{name}</p>
            <p>{email}</p>
            <p>{age}</p>
            <Menu menu={menu} onReceiveData={handleReceiveData} name="ABC" />
        </div>
    );
};

export default Header;

//Lệnh tạo function component: rfc
