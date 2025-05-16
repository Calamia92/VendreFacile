import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import './styles.css';

const ads = [
    {
        title: "iPhone 14 Pro Max",
        price: "980€",
        location: "Paris",
        image: "https://via.placeholder.com/300x200",
    },
    {
        title: "Canapé convertible gris",
        price: "250€",
        location: "Lyon",
        image: "https://via.placeholder.com/300x200",
    },
    {
        title: "Vélo électrique neuf",
        price: "750€",
        location: "Marseille",
        image: "https://via.placeholder.com/300x200",
    },
];

export default function AnnonceCard() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-6xl mx-auto">
                <header className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-orange-600">VendreFacile</h1>
                    <div className="flex gap-2 items-center">
                        <Input placeholder="Rechercher..." className="w-72" />
                        <Button variant="outline">
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {ads.map((ad, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <img
                                src={ad.image}
                                alt={ad.title}
                                className="rounded-t-2xl w-full h-48 object-cover"
                            />
                            <CardContent className="p-4">
                                <h2 className="text-lg font-semibold truncate mb-1">
                                    {ad.title}
                                </h2>
                                <p className="text-orange-600 font-bold mb-1">{ad.price}</p>
                                <p className="text-sm text-gray-600">{ad.location}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
