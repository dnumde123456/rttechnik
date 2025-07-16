import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import { getPosts, getCategories, getFeaturedMedia, stripHtml, formatDate, calculateReadingTime } from "@/lib/wordpress"
import { Suspense } from "react"

async function BlogContent() {
  const [{ posts }, categories] = await Promise.all([getPosts({ per_page: 12 }), getCategories()])

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  // Get featured media for posts
  const postsWithMedia = await Promise.all(
    regularPosts.map(async (post) => {
      const media = post.featured_media ? await getFeaturedMedia(post.featured_media) : null
      return { ...post, media }
    }),
  )

  const featuredMedia = featuredPost?.featured_media ? await getFeaturedMedia(featuredPost.featured_media) : null

  return (
    <>
      {/* Featured Article */}
      {featuredPost && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredMedia?.source_url || "/placeholder.svg?height=800&width=1200"}
                    alt={featuredMedia?.alt_text || featuredPost.title.rendered}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="mb-3 w-fit">Featured</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredPost.title.rendered}</h2>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{formatDate(featuredPost.date)}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{calculateReadingTime(featuredPost.content.rendered)}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {stripHtml(featuredPost.excerpt.rendered).substring(0, 200)}...
                  </p>
                  <Button asChild className="w-fit animate-pulse-slow">
                    <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsWithMedia.map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image
                    src={post.media?.source_url || "/placeholder.svg?height=400&width=600"}
                    alt={post.media?.alt_text || post.title.rendered}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2">Article</Badge>
                  <h3 className="text-xl font-bold mb-2">{post.title.rendered}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{formatDate(post.date)}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{calculateReadingTime(post.content.rendered)}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{stripHtml(post.excerpt.rendered).substring(0, 150)}...</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline group"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="animate-bounce-slow bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
            <p className="text-muted-foreground text-lg">
              Explore our content organized by topic to find the information most relevant to your interests.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/blog/category/${category.slug}`}
                className="bg-background rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium">{category.name}</span>
                <span className="text-xs text-muted-foreground block mt-1">({category.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function BlogSkeleton() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 bg-muted animate-pulse" />
              <CardContent className="p-6">
                <div className="h-4 bg-muted rounded mb-2 animate-pulse" />
                <div className="h-6 bg-muted rounded mb-2 animate-pulse" />
                <div className="h-4 bg-muted rounded mb-3 animate-pulse w-2/3" />
                <div className="h-16 bg-muted rounded animate-pulse" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4">Blog & Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Clean Room Industry Insights</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay up-to-date with the latest trends, technologies, and best practices in clean room design,
              construction, and maintenance.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent />
      </Suspense>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-primary text-primary-foreground rounded-xl p-8 md:p-12 shadow-xl animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-primary-foreground/80">
                Stay informed with the latest clean room industry news, trends, and insights delivered directly to your
                inbox.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/20 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                required
              />
              <Button variant="secondary" type="submit" className="shrink-0">
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-primary-foreground/70 mt-4 text-center">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from RTTechnik.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
