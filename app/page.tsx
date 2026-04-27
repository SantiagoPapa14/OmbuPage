import {
  Header,
  Hero,
  FeaturedArticles,
  MarketOverview,
  BrandValues,
  Newsletter,
  Footer,
} from '@/components/ombu'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedArticles />
      <MarketOverview />
      <BrandValues />
      <Newsletter />
      <Footer />
    </main>
  )
}
