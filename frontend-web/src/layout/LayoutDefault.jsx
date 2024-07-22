import { useEffect } from 'react';
import PropTypes from 'prop-types'
import Sidebar from '../components/organismos/admin/sidebar';
import Header from '../components/organismos/admin/header';

export default function DefaultLayout({ children, title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar />

            <div className="relative flex flex-1 flex-col overflow-hidden">

                <main className='mt-2'>
                    {children}
                </main>

            </div>

            <div className='absolute w-full'>
                <Header />
            </div>

        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};
