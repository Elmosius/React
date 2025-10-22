import {ModeToggle} from "@/components/custom/mode-toggle.tsx";
import {Register} from "@/components/pages/Register";
import {Toaster} from "@/components/ui/sonner.tsx";

export default function App() {
    return (
        <>
            <header>
                <div className={'absolute top-5 right-5'}>
                    <ModeToggle/>
                    <Toaster position={'top-center'}/>
                </div>

            </header>

            <main className="min-h-screen flex flex-col items-center justify-center">

                {/*<Login/>*/}
                <Register/>
            </main>
        </>
    )
}