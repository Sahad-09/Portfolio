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
    website?: string; // Add this line to include an optional website URL
}

const brands: Brand[] = [
    {
        name: "Sky Diamond Dreams L.L.C",
        logo: "/sky.jpg",
        owners: [
            { name: "Zahir Abdul Khadar", role: "Marketing Manager" },
            { name: "Zyra Benito", role: "Sales Manager" }
        ],
        description: "Leading company in tech solutions.",
        website: "https://skydiamonddreams.com" // Add the website URL here
    }
];

export function BrandsSection() {
    return (
        <div className="brands-section my-6 md:my-12 py-6 md:py-8 bg-transparent">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-8">Brands We&apos;ve Worked With</h2>

            <div className={`max-w-6xl mx-auto ${brands.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'}`}>
                {brands.map((brand, index) => (
                    <Card key={index} className="p-4 text-white w-full max-w-xs md:max-w-md relative">
                        {brand.website && (
                            <a
                                href={brand.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-2 right-2 text-white hover:text-gray-300"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                        <CardHeader
                            title={brand.name}
                            className="text-white text-xl md:text-2xl"
                        />
                        <div className="flex justify-center my-4">
                            <Image
                                src={brand.logo}
                                alt={`${brand.name} Logo`}
                                width={120} // Reduced size for better mobile visibility
                                height={120}
                                className="rounded-md pb-4"
                            />
                        </div>
                        <div className="text-center text-xs md:text-sm">
                            <p className="font-semibold mb-1"></p>
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
