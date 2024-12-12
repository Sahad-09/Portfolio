import Image from "next/image";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ExternalLink } from "lucide-react";

interface Owner {
    name: string;
    role: string;
}

interface Brand {
    name: string;
    logo: string;
    owners: Owner[];
    description: string;
    website?: string;
}

const brands: Brand[] = [
    {
        name: "Sky Diamond Dreams L.L.C",
        logo: "/sky.jpg",
        owners: [
            { name: "Zahir Abdul Khadar", role: "Marketing Manager" }
        ],
        description: "Leading company in tech solutions.",
        website: "https://skydiamonddreams.com"
    },
    {
        name: "Build Up Kasaragod",
        logo: "/buk.png",
        owners: [
            { name: "Dr. Sheikh Bava", role: "President" }
        ],
        description: "A Community-Driven Initiative to Transform and Uplift Kasaragod.",
        website: "https://buildupkasaragod.org"
    }
];

export function BrandsSection() {
    return (
        <div className="brands-section my-6 md:my-12 py-6 md:py-8 bg-transparent relative">
            {/* Grain image overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-30"
                style={{
                    backgroundImage: 'url("/grain.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-8 relative z-10">
                Brands I&apos;ve Worked With
            </h2>

            <div className="
                max-w-6xl 
                mx-auto 
                flex 
                flex-wrap 
                justify-center 
                items-center 
                gap-6 
                md:gap-8 
                relative 
                z-10
            ">
                {brands.map((brand, index) => (
                    <Card
                        key={index}
                        className="
                            p-[0.64rem]
                            text-white 
                            w-full 
                            max-w-xs 
                            md:max-w-md 
                            relative
                        "
                    >
                        {brand.website && (
                            <a
                                href={brand.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    absolute 
                                    top-2 
                                    right-2 
                                    text-white 
                                    hover:text-gray-300
                                "
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                        <CardHeader
                            title={brand.name}
                            className="text-white text-lg md:text-2xl"
                        />
                        <div className="flex justify-center my-4">
                            <Image
                                src={brand.logo}
                                alt={`${brand.name} Logo`}
                                width={120}
                                height={120}
                                className="rounded-md pb-4"
                            />
                        </div>
                        <div className="text-center text-xs md:text-sm">
                            {brand.owners.map((owner, ownerIndex) => (
                                <p key={ownerIndex} className="mb-1">{owner.name} - {owner.role}</p>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}