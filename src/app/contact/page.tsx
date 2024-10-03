import { sendEmail } from '../../../lib/actions';
import ContactForm from './ContactForm';

export default function ContactPage() {
    return (
        <div className="max-w-md mx-auto mt-16 p-6">
            <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
            <ContactForm />
        </div>
    );
}