import Image from 'next/image'
import Link from 'next/link'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { SiSubstack } from 'react-icons/si'

export default function Home() {
  return (
    <main className="min-h-screen pattern-bg">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-b from-warm-50/90 to-warm-100/90 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-radial from-warm-200/30 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-end">
              <Image 
                src="/assets/1 (1).png" 
                alt="Delicious Recipe" 
                width={400} 
                height={400} 
                className="rounded-2xl" 
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 gradient-text leading-relaxed tracking-wide">
                Worldwide<br />
                Food in<br />
                Your Pocket
              </h1>
              <p className="text-xl md:text-2xl text-warm-700 mb-16 leading-loose max-w-2xl tracking-wide">
                Discover, share, and organize recipes with Recipe Connects! For food lovers, home cooks, 
                chefs, and everyone—cook, create, and connect today!
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <Link href="https://apps.apple.com/us/app/recipe-connects/id6740811794" className="btn-primary flex items-center justify-center gap-4 text-xl px-8 py-4">
                  <FaApple className="text-2xl" />
                  Download for iOS
                </Link>
                <Link href="https://recipeconnects.substack.com/" className="btn-secondary flex items-center justify-center gap-4 text-xl px-8 py-4">
                  <SiSubstack className="text-2xl" />
                  Substack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-warm-50/90 backdrop-blur-sm">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-6 gradient-text">Explore Amazing Recipes</h2>
          <p className="text-warm-700 text-center mb-16 max-w-2xl mx-auto">
            Discover a world of flavors, from quick everyday meals to special occasion masterpieces
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group card hover-lift">
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image 
                  src="/assets/1 (4).png" 
                  alt="Global Cuisines" 
                  width={400} 
                  height={400} 
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-warm-600">Global Cuisines</h3>
              <p className="text-warm-700">Explore authentic recipes from around the world</p>
            </div>
            <div className="group card hover-lift">
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image 
                  src="/assets/1 (5).png" 
                  alt="Easy to Follow" 
                  width={400} 
                  height={400} 
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-warm-600">Easy to Follow</h3>
              <p className="text-warm-700">Step-by-step instructions with beautiful photos</p>
            </div>
            <div className="group card hover-lift">
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image 
                  src="/assets/1 (6).png" 
                  alt="Trending Dishes" 
                  width={400} 
                  height={400} 
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-warm-600">Trending Dishes</h3>
              <p className="text-warm-700">Discover what's popular in the community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section id="featured" className="section-padding bg-gradient-to-b from-warm-100/90 to-warm-50/90 backdrop-blur-sm">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Featured Recipes</h2>
            <p className="text-warm-700 max-w-3xl mx-auto">
              From quick weekday meals to impressive dinner party dishes, find inspiration 
              from our community of food lovers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group card hover-lift cursor-pointer">
              <div className="overflow-hidden rounded-xl">
                <Image 
                  src="/assets/1 (7).png" 
                  alt="Featured Recipe 1" 
                  width={300} 
                  height={300} 
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold group-hover:text-warm-600 transition-colors">Seasonal Special</h4>
                <p className="text-warm-600">Fresh and vibrant dishes</p>
              </div>
            </div>
            <div className="group card hover-lift cursor-pointer">
              <div className="overflow-hidden rounded-xl">
                <Image 
                  src="/assets/1 (8).png" 
                  alt="Featured Recipe 2" 
                  width={300} 
                  height={300} 
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold group-hover:text-warm-600 transition-colors">Quick & Easy</h4>
                <p className="text-warm-600">30-minute recipes</p>
              </div>
            </div>
            <div className="group card hover-lift cursor-pointer">
              <div className="overflow-hidden rounded-xl">
                <Image 
                  src="/assets/1 (2).png" 
                  alt="Featured Recipe 3" 
                  width={300} 
                  height={300} 
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold group-hover:text-warm-600 transition-colors">Comfort Food</h4>
                <p className="text-warm-600">Hearty favorites</p>
              </div>
            </div>
            <div className="group card hover-lift cursor-pointer">
              <div className="overflow-hidden rounded-xl">
                <Image 
                  src="/assets/1 (3).png" 
                  alt="Featured Recipe 4" 
                  width={300} 
                  height={300} 
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold group-hover:text-warm-600 transition-colors">Healthy Options</h4>
                <p className="text-warm-600">Nutritious and delicious</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Bites Section */}
      <section id="fun-bites" className="section-padding bg-gradient-to-r from-warm-100/90 via-white/50 to-warm-100/90 backdrop-blur-sm">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Fun Bites</h2>
            <p className="text-warm-700 max-w-3xl mx-auto">
              Embark on a culinary journey around the world! Discover fascinating food cultures, 
              traditional recipes, and the stories behind iconic dishes.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-32">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image 
              src="/assets/1 (7).png"
              alt="World Cuisines"
              width={1200}
              height={400}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Explore More?</h3>
                <Link href="#" className="btn-primary inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-warm-700 text-white transition-all">
                  Discover World Cuisines
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark/95 text-white py-12 backdrop-blur-sm">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Recipe Connects</h3>
              <p className="text-warm-300">Worldwide food in your pocket</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-warm-300">
                <a href="mailto:user.support@oceanink.uno" className="hover:text-warm-400 transition-colors">
                  recipeconnects@oceanink.co
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-warm-300">
                <li>
                  <a href="https://sites.google.com/view/recipeconnectsprivacypolicy/home" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hover:text-warm-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://sites.google.com/view/recipeconnectstermsofuse/home" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hover:text-warm-400 transition-colors">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Subscription</h4>
              <div className="flex flex-col space-y-2">
                <Link href="https://apps.apple.com/us/app/recipe-connects/id6740811794" className="text-warm-300 hover:text-warm-400 transition-colors flex items-center gap-2">
                  <FaApple className="text-xl" /> IOS App
                </Link>
                <Link href="https://recipeconnects.substack.com/" className="text-warm-300 hover:text-warm-400 transition-colors flex items-center gap-2">
                  <SiSubstack className="text-xl" /> Substack
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-warm-800 text-center text-warm-400">
            <p>&copy; {new Date().getFullYear()} Recipe Connects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 