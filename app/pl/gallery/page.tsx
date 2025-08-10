import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4">Galeria Projektów</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nasze Projekty Pomieszczeń Czystych</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Poznaj nasze portfolio zrealizowanych projektów pomieszczeń czystych w różnych branżach. Każdy projekt
              pokazuje nasze zaangażowanie w jakość, innowację i doskonałość.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8">
        <div className="container\
