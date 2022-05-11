import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function Home() {
    const { user } = useUser()

    return (
        <>
            <h1>Hello World</h1>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>     
        </>
    )
}

export const getServerSideProps = withPageAuthRequired();