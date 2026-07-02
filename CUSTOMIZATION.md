# Customization Guide - BAANI Overseas Services

## 🎨 How to Customize Your Website

### 1. Update Contact Information

Open `index.html` and find the contact section. Replace the placeholder values:

```html
<div class="contact-info">
  <h3>Phone</h3>
  <p>+91 XXXXXXXXXX</p>  <!-- Replace with your phone number -->
</div>

<div class="contact-info">
  <h3>WhatsApp</h3>
  <p>+91 XXXXXXXXXX</p>  <!-- Replace with your WhatsApp number -->
</div>

<div class="contact-info">
  <h3>Email</h3>
  <p>info@baanioverseas.com</p>  <!-- Replace with your email -->
</div>

<div class="contact-info">
  <h3>Office Location</h3>
  <p>Your Office Address</p>  <!-- Replace with your office address -->
</div>
```

### 2. Change Color Scheme

The website uses a professional gold and black theme. To change colors:

**Current Colors:**
- Gold Accent: `#d4af37`
- Black Primary: `#000`
- Dark Gray: `#111` or `#151515`
- Light Gray: `#f5f5f5`

**Steps:**
1. Open `index.html` in a text editor
2. Use Find & Replace (Ctrl+H or Cmd+H):
   - Find: `#d4af37` → Replace with your accent color
   - Find: `#000` → Replace with your primary color
3. Save and refresh your browser to see changes

**Example Custom Palette:**
```css
/* Blue & Gold Theme */
--primary: #1a3a6e;        /* Navy Blue */
--accent: #ffc107;         /* Bright Gold */
--dark: #0f1d3d;           /* Dark Navy */
--light: #f8f9fa;          /* Off White */
```

### 3. Update Services

Find the services section and modify:

```html
<section id="services">
  <h2 class="title">Our Services</h2>
  
  <div class="cards">
    <div class="card">
      <h3>🎓 Student Counselling</h3>
      <p>Your description here...</p>
    </div>
    <!-- Add more cards as needed -->
  </div>
</section>
```

**To add a new service:**
1. Copy an existing card block
2. Change the emoji and title
3. Update the description
4. Paste it in the cards section

### 4. Update FAQ Section

Modify the FAQ items:

```html
<details>
  <summary>Your Question Here?</summary>
  <p>Your answer here...</p>
</details>
```

**To add a new FAQ:**
1. Copy the entire `<details>` block
2. Update the question in `<summary>`
3. Update the answer in `<p>`

### 5. Change Hero Image

The hero section uses a background image. To change it:

```html
<section class="hero" id="home">
  <div>
    <h1>Study in Australia with Confidence</h1>
    <!-- Replace the background image URL below -->
  </div>
</section>
```

In the CSS, find:
```css
.hero{
  background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),
            url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80');
}
```

Replace the URL with your own image from:
- Unsplash: https://unsplash.com/
- Pexels: https://www.pexels.com/
- Pixabay: https://pixabay.com/

### 6. Update About Section

Find and modify the About section text:

```html
<section id="about">
  <h2 class="title">About Us</h2>
  <div class="about">
    <div>
      <h3>BAANI Overseas Services</h3>
      <p>Your company description here...</p>
      
      <p><strong>Why Choose Us?</strong></p>
      <ul>
        <li>Your unique value 1</li>
        <li>Your unique value 2</li>
        <li>Your unique value 3</li>
      </ul>
    </div>
    <img src="your-image-url" alt="Your description">
  </div>
</section>
```

### 7. Update Page Title & Meta Tags

Open `index.html` and modify:

```html
<title>BAANI Overseas Services</title>  <!-- Browser tab title -->
```

### 8. Add Your Logo

To add a custom logo instead of text:

```html
<header>
  <div class="logo">
    <img src="your-logo-url" alt="BAANI Logo" style="height:40px;">
  </div>
  <!-- Rest of header -->
</header>
```

### 9. Font Customization

The website uses Poppins font from Google Fonts. To change:

```html
<!-- Current -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<!-- Example: Use Inter instead -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<!-- Update CSS -->
font-family:'Inter',sans-serif;
```

Browse fonts at: https://fonts.google.com/

### 10. Mobile Navigation

The navigation hides on mobile devices. To customize mobile breakpoint:

```css
@media(max-width:768px){  /* Change 768px to your preferred breakpoint */
  nav{
    display:none;
  }
}
```

## 🔧 Advanced Customization

### Add Animations
Add custom animations in the `<style>` section:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.card {
  animation: fadeIn 0.5s ease-in-out;
}
```

### Add Form Validation
The form includes basic HTML5 validation. To add custom JavaScript validation:

```javascript
document.getElementById('contactForm').addEventListener('submit', function(e) {
  // Add your custom validation here
});
```

### Add Analytics
Add Google Analytics or similar tracking:

```html
<!-- Add before </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 📱 Testing Your Changes

After making changes:

1. **Local Testing**: Open `index.html` directly in your browser
2. **Mobile Testing**: Use browser DevTools (F12) → Toggle device toolbar
3. **Cross-Browser**: Test in Chrome, Firefox, Safari, Edge
4. **GitHub Pages**: Changes automatically deploy to your live site

## 🚀 Deployment After Changes

1. Edit files locally or on GitHub
2. Commit changes with clear messages:
   ```
   git add index.html
   git commit -m "Update contact information and services"
   git push origin main
   ```
3. GitHub Pages automatically rebuilds (usually within 1-2 minutes)
4. Visit your site to see live changes

## ✅ Customization Checklist

- [ ] Updated phone numbers
- [ ] Updated email address
- [ ] Updated office address
- [ ] Changed color scheme (if desired)
- [ ] Updated About Us section
- [ ] Updated services list
- [ ] Updated FAQ section
- [ ] Changed hero image (if desired)
- [ ] Updated page title
- [ ] Added your logo (if desired)
- [ ] Tested on mobile devices
- [ ] Deployed to GitHub Pages

---

**Need Help?** Check the following:
- `README.md` - Feature overview
- `DEPLOYMENT.md` - Deployment guide
- `index.html` - Full source code
- GitHub Issues - Create an issue for help

**Version**: 1.0.0
**Last Updated**: July 2, 2026
