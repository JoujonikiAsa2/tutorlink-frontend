import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the homepage</h1>
            <Link href="/login"><Button>Login</Button></Link>
            <Link href="/register"><Button>Register</Button></Link>
        </div>
    );
};

export default HomePage;