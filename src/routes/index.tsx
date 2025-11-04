import {createFileRoute} from '@tanstack/react-router'
import HomePage from "@/components/pages/Home.tsx";

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <HomePage/>
}
