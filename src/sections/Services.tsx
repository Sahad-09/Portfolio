import React from 'react';
import { Card } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { FaEnvelope, FaMousePointer, FaLaptopCode, FaSearch, FaShoppingCart, FaChartLine, FaPaintBrush, FaChartBar } from 'react-icons/fa';

const services = [
    {
        icon: <FaEnvelope className="text-blue-500 w-12 h-12" />,
        title: 'Email Marketing',
        description: 'Effective email campaigns to engage and convert your audience.',
    },
    {
        icon: <FaMousePointer className="text-red-500 w-12 h-12" />,
        title: 'Pay-Per-Click Advertising',
        description: 'Targeted PPC campaigns to drive traffic and increase conversions.',
    },
    {
        icon: <FaLaptopCode className="text-green-500 w-12 h-12" />,
        title: 'Website Development',
        description: 'Custom, responsive websites tailored to your business needs.',
    },
    {
        icon: <FaSearch className="text-yellow-500 w-12 h-12" />,
        title: 'Search Engine Optimization',
        description: 'Improve your website\'s visibility in search engine results.',
    },
    {
        icon: <FaShoppingCart className="text-purple-500 w-12 h-12" />,
        title: 'E-commerce Development',
        description: 'Build and optimize online stores for seamless transactions.',
    },
    {
        icon: <FaChartLine className="text-indigo-500 w-12 h-12" />,
        title: 'Digital Strategy',
        description: 'Comprehensive digital strategies to achieve your business goals.',
    },
    {
        icon: <FaChartBar className="text-orange-500 w-12 h-12" />,
        title: 'Conversion Rate Optimization',
        description: 'Enhance your website to increase visitor-to-customer conversions.',
    },
    {
        icon: <FaPaintBrush className="text-pink-500 w-12 h-12" />,
        title: 'UX/UI Design',
        description: 'Create intuitive and visually appealing user interfaces.',
    },
];

const Services = () => {
    return (
        <div className="bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700">
                            <CardHeader className="text-center">
                                <div className="flex justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                <p className="mt-2 text-sm text-gray-300">{service.description}</p>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;