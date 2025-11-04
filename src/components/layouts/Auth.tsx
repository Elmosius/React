import {Outlet} from "@tanstack/react-router";

export default function AuthLayout() {
    return (
        <main className={'max-w-xl p-4'}>
            <Outlet/>
        </main>
    )
}