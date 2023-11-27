import { GetStaticProps } from 'next';
import React from 'react';
import { UserList } from '../components/UserList/UserList';
import { SignUp } from '../components/SignUp/SignUp';
import { UsersRes } from '../models/User';
import { getUsersByPage } from '../api';

export const getStaticProps: GetStaticProps = async () => {
    try {
        const usersRes: UsersRes = await getUsersByPage();
        return {
            props: {
                usersRes
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const HomePage = ({ usersRes }) => {
    return (
        <div>
            <UserList usersRes={usersRes} />
            <SignUp />
        </div>
    )
}

export default HomePage