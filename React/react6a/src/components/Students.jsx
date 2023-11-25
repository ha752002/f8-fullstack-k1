import React, { useState, useTransition } from 'react';
import students from './students.json';
export default function Students() {
    console.log(students);
    const [isPending, startTransition] = useTransition();
    const [keyword, setKeyword] = useState('');
    const handleSearch = (e) => {
        startTransition(() => {
            setKeyword(e.target.value);
        });
    };
    console.log(isPending);
    return (
        <div>
            <input type="search" placeholder="Search..." onChange={handleSearch} />
            <h3>Danh sách sinh viên</h3>
            {students.map(({ id, fullName }) => {
                if (keyword.length && fullName.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())) {
                    return (
                        <h4 key={id} style={{ background: 'yellow' }}>
                            {fullName}
                        </h4>
                    );
                }
                return <h4 key={id}>{fullName}</h4>;
            })}
        </div>
    );
}
