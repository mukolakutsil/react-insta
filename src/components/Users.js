import React from 'react';
import User from './User';



const Users = () => {
    return (
        <div className="right">
            <User
                src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"
                alt="man"
                name="Scott"
            />

            <div className="users__block">
                <User
                    src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"
                    alt="man"
                    name="Scott"
                    min
                />
                <User
                    src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"
                    alt="man"
                    name="Scott"
                    min
                />
                <User
                    src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"
                    alt="man"
                    name="Scott"
                    min
                />
                <User
                    src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"
                    alt="man"
                    name="Scott"
                    min
                />
            </div>
        </div>
    )
}

export default Users;
