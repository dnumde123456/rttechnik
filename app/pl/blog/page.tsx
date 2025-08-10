import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { getAllPostsForHome } from "@/lib/wordpress"
import { format } from "date-fns"

interface Post {
  title: string
  excerpt: string
  slug: string
  date: string
  featuredImage?: {
    node: {
      sourceUrl: string
    }
  }
  author?: {
    node: {
      name: string
      firstName: string
      lastName: string
      avatar?: {
        url: string
      }
    }
  }
}

export default async function BlogPage() {
  let posts: Post[] = []

  try {
    const allPostsData = await getAllPostsForHome(false)
    posts = allPostsData?.edges.map(({ node }: { node: any }) => node) || []
  } catch (error) {
    console.error("Error fetching posts:", error)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Spostrzeżenia Branżowe
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Blog Technologii Pomieszczeń Czystych
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Bądź na bieżąco z najnowszymi osiągnięciami w technologii pomieszczeń czystych, najlepszymi praktykami
              branżowymi i eksperckimi spostrzeżeniami od RTTechnik.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Brak Dostępnych Artykułów</h2>
              <p className="text-muted-foreground">
                Pracujemy nad dostarczeniem najnowszych spostrzeżeń i aktualizacji. Sprawdź ponownie wkrótce!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link
                  href={`/pl/blog/${post.slug}`}
                  key={post.slug}
                  className="group block animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                    {post.featuredImage?.node?.sourceUrl && (
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={post.featuredImage.node.sourceUrl || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Autor: {post.author?.node?.firstName || post.author?.node?.name} {post.author?.node?.lastName}{" "}
                        dnia {format(new Date(post.date), "PPP")}
                      </p>
                      <div
                        className="text-muted-foreground text-sm line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
