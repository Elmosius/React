import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet
} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import type {FormEvent} from "react";
import type {Register} from "@/types/auth.ts";
import {toast} from "sonner";

export function Register() {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement

        const payloads: Register = {
            fullName: form.name.value as string,
            email: form.email.value as string,
            password: form.password.value as string,
        }

        toast.success("Register successful", {
            description: "You have successfully registered",
        })

        console.info(payloads)
    }

    return (
        <div className={"max-w-md  shadow-lg rounded-lg p-5"}>
            <form onSubmit={handleSubmit}>
                <FieldSet>
                    <FieldLegend>
                        Register
                    </FieldLegend>

                    <FieldDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </FieldDescription>

                    <FieldGroup>
                        <Field>
                            <FieldLabel>
                                Full Name
                            </FieldLabel>
                            <Input id={'name'} placeholder={'Insert your full name'} name={'name'} required autoFocus/>
                            <FieldError className={'hidden'}>
                            </FieldError>
                        </Field>

                        <Field>
                            <FieldLabel>
                                Email
                            </FieldLabel>
                            <Input type={'email'} id={'email'} placeholder={'Insert your email'} name={'email'}
                                   required/>
                            <FieldError className={'hidden'}></FieldError>
                        </Field>

                        <Field>
                            <FieldLabel>
                                Password
                            </FieldLabel>
                            <Input type={'password'} id={'password'} placeholder={'Insert your password'}
                                   name={'password'} required/>
                        </Field>

                        <Field>
                            <Button variant={'default'} type={'submit'} className={'w-full'}>
                                Register
                            </Button>
                        </Field>


                    </FieldGroup>
                </FieldSet>

            </form>
        </div>
    )
}
