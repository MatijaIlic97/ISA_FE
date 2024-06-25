import Link from "next/link";

export default function UserCreate() {
    return (
        <>
            <h1>User create</h1>
            <br/>
            <br/>
            <Link href="/user/list">Go to userList</Link>
        </>
    );
}