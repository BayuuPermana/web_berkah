import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Gallery = () => {
    const whatsappNumber = "6281234567890";

    const handleWhatsAppClick = (message) => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="galeri" className="py-20 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold mb-3">Telah Terpasang di Rumah Klien</h2>
                        <p className="text-zinc-600 max-w-lg">
                            Kami tidak memiliki showroom fisik, namun karya kami telah menghiasi ratusan rumah. Foto di bawah adalah 100% real pict hasil produksi Berkah Furnitur.
                        </p>
                    </div>
                    <Button variant="ghost" className="gap-2 hidden md:inline-flex" onClick={() => handleWhatsAppClick("Halo, boleh lihat portofolio lainnya?")}>
                        Lihat Portofolio Lainnya <ArrowRight size={16} />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Galeri Item 1 */}
                    <div className="group relative overflow-hidden rounded-xl bg-zinc-100 aspect-[4/3]">
                        <img src="https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80&w=800" alt="Kitchen Set" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                            <p className="text-white font-semibold text-lg">Kitchen Set Duco Grey</p>
                            <p className="text-zinc-300 text-sm">Ibu Sarah - Bintaro Sektor 9</p>
                        </div>
                    </div>
                    {/* Galeri Item 2 */}
                    <div className="group relative overflow-hidden rounded-xl bg-zinc-100 aspect-[4/3]">
                        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=800" alt="Wardrobe" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                            <p className="text-white font-semibold text-lg">Wardrobe Full Plafon</p>
                            <p className="text-zinc-300 text-sm">Bpk. Hendra - Cibubur</p>
                        </div>
                    </div>
                    {/* Galeri Item 3 */}
                    <div className="group relative overflow-hidden rounded-xl bg-zinc-100 aspect-[4/3]">
                        <img src="https://images.unsplash.com/photo-1595515106962-95d9a1267e24?auto=format&fit=crop&q=80&w=800" alt="Living Room" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                            <p className="text-white font-semibold text-lg">Partisi Penyekat Ruangan</p>
                            <p className="text-zinc-300 text-sm">Ibu Rini - Bekasi Timur</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 md:hidden text-center">
                    <Button variant="outline" className="w-full" onClick={() => handleWhatsAppClick("Halo, boleh lihat portofolio lainnya?")}>
                        Lihat Portofolio Lainnya
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
