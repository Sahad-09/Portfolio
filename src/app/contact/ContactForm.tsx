"use client"
import React, { useRef, useState } from 'react';
import { sendEmail } from '../../lib/actions';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Alert,
    AlertDescription
} from '@/components/ui/alert';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import countryOptions from '@/lib/countries.json';

interface CountryOption {
    label: string;
    value: string;
    phoneCode: string;
    currency: string;
    currencySymbol: string;
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
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    async function handleSubmit(formData: FormData) {
        const selectedCountryData = countryOptions.find(country => country.value === selectedCountry);

        if (selectedCountryData) {
            formData.set('country', selectedCountryData.label);
            formData.set('phoneCode', selectedCountryData.phoneCode);
            formData.set('currency', `${selectedCountryData.currency} (${selectedCountryData.currencySymbol})`);
        }

        formData.set('phone', `${selectedCountryData?.phoneCode || ''}${phoneNumber}`);

        const result = await sendEmail(formData);

        if (result.success) {
            setStatus('success');
            formRef.current?.reset();
            setSelectedCountry('');
            setPhoneNumber('');
        } else {
            setStatus('error');
        }
    }

    const handleCountryChange = (value: string) => {
        setSelectedCountry(value);
    };

    const selectedCountryData = countryOptions.find(country => country.value === selectedCountry);

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
                <Label htmlFor="country">Country</Label>
                <Select onValueChange={handleCountryChange} value={selectedCountry}>
                    <SelectTrigger id="country" className="w-full bg-[#111827] text-white border-[#E4E4E7]">
                        <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111827] text-white border-[#E4E4E7]">
                        {countryOptions.map((country) => (
                            <SelectItem key={country.value} value={country.value} className="hover:bg-[#374151] cursor-pointer">
                                {country.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex items-center">
                    <span className="mr-2">{selectedCountryData ? selectedCountryData.phoneCode : ''}</span>
                    <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        placeholder="Enter your phone number"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="budget">Budget (Optional)</Label>
                <div className="flex items-center">
                    <span className="mr-2 flex gap-1">

                        {selectedCountryData && (
                            <>
                                <span>{selectedCountryData.currency}</span>
                                <span> ({selectedCountryData.currencySymbol})</span>
                            </>
                        )}
                    </span>


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
