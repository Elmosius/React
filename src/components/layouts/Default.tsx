import {Outlet} from "@tanstack/react-router";

export default function DefaultLayout() {
    return (
        <main className={'container mx-auto max-w-xl p-4'}>
            <Outlet/>
        </main>
    )
}