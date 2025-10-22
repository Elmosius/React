import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {useForm} from "react-hook-form";
import {loginSchema, type LoginSchema} from "@/schemas/auth.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {toast} from "sonner";

export default function Login() {


    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {username: "", password: "", rememberMe: false}
    })

    const handleSubmit = (data: LoginSchema) => {
        console.info(data)
        toast.success("Login successful", {
            description: "You have successfully logged in",
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="w-full max-w-md mx-auto shadow-lg rounded-lg p-6 space-y-4"
            >
                <h2 className="text-xl font-semibold mb-2">Sign in</h2>
                <p className="text-sm text-muted-foreground mb-4">
                    Sign in to your account
                </p>

                {/* Username field */}
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Insert your username" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                {/* Password field */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Insert your password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                {/* Remember me */}
                <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({field}) => (
                        <FormItem className="flex items-center space-x-2">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={(checked) => field.onChange(checked as boolean)}
                                    id="remember-me"
                                />
                            </FormControl>
                            <label htmlFor="remember-me" className="text-sm font-medium leading-none">
                                Remember me
                            </label>
                        </FormItem>
                    )}
                />

                {/* Submit */}
                <Button type="submit" className="w-full">
                    Sign in
                </Button>
            </form>
        </Form>
    )
}