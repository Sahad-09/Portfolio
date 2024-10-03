'use client';

import { useRef, useState } from 'react';
import { sendEmail } from '../../../lib/actions';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Alert,
    AlertDescription
} from '@/components/ui/alert';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8   md:w-auto px-6 hover:bg-white/50"
        >
            {pending ? 'Sending...' : 'Send Message'}
        </Button>
    );
}

export default function ContactForm() {
    const [status, setStatus] = useState<'success' | 'error' | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    async function handleSubmit(formData: FormData) {
        const result = await sendEmail(formData);

        if (result.success) {
            setStatus('success');
            formRef.current?.reset();
        } else {
            setStatus('error');
        }
    }

    return (
        <form ref={formRef} action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    type="text"
                    placeholder='Full Name'
                    id="name"
                    name="name"
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    placeholder='example@gmail.com'
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Input
                    type="number"
                    id="budget"
                    name="budget"
                    required
                    placeholder="Enter your budget"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                />
            </div>

            <SubmitButton />

            {status === 'success' && (
                <Alert variant="default" className="bg-green-50 border-green-200">
                    <AlertDescription>Message sent successfully!</AlertDescription>
                </Alert>
            )}

            {status === 'error' && (
                <Alert variant="destructive">
                    <AlertDescription>Failed to send message. Please try again.</AlertDescription>
                </Alert>
            )}

            <p className="text-sm text-gray-500">
                NOTE: We will be in contact with you within 12 hours after your message has been sent.
            </p>
        </form>
    );
}