'use client';
import { Button, Textarea, Label, TextInput } from 'flowbite-react';
import $api from '../helpers/api';
import { toast,ToastContainer } from 'react-toastify'
function FormContact() {
    return (
<>
<form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="input" value="Full Name" />
                </div>
                <TextInput id="input-name" placeholder="First Name & last name" type='text' required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput id="email1" placeholder="Your email" required type="email" />
            </div>
            <div className="max-w-md" id="textarea">
                <div className="mb-2 block">
                    <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea id="comment" placeholder="Leave a message..." required rows={4} />
            </div>
            <Button type="submit">
                submit
            </Button>
        </form>
</>

    );
}

export default FormContact;