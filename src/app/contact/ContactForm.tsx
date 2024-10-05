"use client"
import React, { useRef, useState } from 'react';
import { sendEmail } from '../../lib/actions';
import { useFormStatus } from 'react-dom';
import Select from 'react-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Alert,
    AlertDescription
} from '@/components/ui/alert';
import countryOptions from '@/lib/countries.json';

interface CountryOption {
    label: string;
    value: string;
    phoneCode: string;
    currency: string;
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 hover:bg-white/50"
        >
            {pending ? 'Sending...' : 'Send Message'}
        </Button>
    );
}

export default function ContactForm() {
    const [status, setStatus] = useState<'success' | 'error' | null>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);

    async function handleSubmit(formData: FormData) {
        const result = await sendEmail(formData);

        if (result.success) {
            setStatus('success');
            formRef.current?.reset();
            setSelectedCountry(null);
        } else {
            setStatus('error');
        }
    }

    const handleCountryChange = (selectedOption: CountryOption | null) => {
        setSelectedCountry(selectedOption);
    };

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



            <div className="space-y-2 bg-[#111827]">
                <label htmlFor="country" className="text-white font-semibold bg-[#111827]">
                    Country
                </label>
                <Select
                    id="country"
                    name="country"
                    options={countryOptions}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    placeholder="Select your country"
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    className="bg-[#111827]  text-white border border-[#E4E4E7] focus:ring-[#111827] focus:border-[#111827] placeholder:text-gray-400 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900 rounded-lg"
                    styles={{
                        control: (base) => ({
                            ...base,
                            backgroundColor: '#111827',
                            color: 'white',
                            border: '1px solid #111827'
                        }),
                        placeholder: (base) => ({
                            ...base,
                            color: '#BFBFBF',
                        }),
                        option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? '#374151' : '#111827', // Change background on hover
                            color: 'white',
                            cursor: 'pointer', // Add pointer to indicate it's clickable
                        }),
                        singleValue: (base) => ({
                            ...base,
                            color: 'white',
                        }),
                    }}
                />
            </div>


            <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="flex items-center">
                    <span className="mr-2">{selectedCountry ? selectedCountry.phoneCode : ''}</span>
                    <Input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        placeholder="Enter your mobile number"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <div className="flex items-center">
                    <span className="mr-2">{selectedCountry ? selectedCountry.currency : ''}</span>
                    <Input
                        type="number"
                        id="budget"
                        name="budget"
                        required
                        placeholder="Enter your budget"
                    />
                </div>
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
