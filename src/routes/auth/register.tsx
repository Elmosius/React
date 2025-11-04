import {createFileRoute} from '@tanstack/react-router'
import RegisterPage from "@/components/pages/Register.tsx";

export const Route = createFileRoute('/auth/register')({
    component: RouteComponent,
})

function RouteComponent() {
    return <RegisterPage/>
}
