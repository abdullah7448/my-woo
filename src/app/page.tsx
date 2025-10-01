import Categories from "@/components/home/categories";
import HomeSlider from "@/components/slider/home-slider";

export default function Home() {
  return (
    <>
      <section className="banner">
        {/* <div className="container"> */}
              <div className="bannerWrapper">
                  <HomeSlider/>
              </div>
        {/* </div> */}
      </section>
     
      <Categories/>
    
    </>
  );
}

// 🛍️ E-commerce Homepage Sections

// Featured Categories

// Show main product categories (e.g., Men, Women, Electronics, Furniture).

// Usually a grid with images and links.

// Best Selling / Popular Products

// Showcase your top-selling or trending products.

// Often displayed in a product card grid or carousel.

// Special Offers / Discounts / Deals of the Day

// Highlight sales, discounts, or limited-time offers.

// Can be a banner or countdown timer section.

// New Arrivals

// Showcase latest products you’ve added.

// Keeps the site fresh and encourages return visitors.

// Why Shop With Us / Trust Section

// Small icons with text (e.g., Free Shipping, Secure Payments, Easy Returns).

// Builds trust and credibility.

// Customer Testimonials / Reviews

// Social proof with ratings or quotes.

// Newsletter Signup / Call to Action

// Encourage users to subscribe for discounts, promotions, or updates.

// Footer Section

// Already discussed → includes Quick Links, Location, Contact Info, Social Links.