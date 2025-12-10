# Global Padding Standardization

## Overview

Standardized padding across the website to ensure consistency.
**Desktop:** `4rem 0` (64px) for content sections.
**Mobile:** `2rem 0` (32px) for content sections.

## Files Updated

- **src/styles/sections.css**:

  - Updated `.ai-expertise`, `.products`, `.services`, `.journey-section`, `.testimonials`, `.contact`, `.features`, `.about`, `.resources`, `.why-work-section`.
  - Removed inconsistent top paddings (`padding-top: 34px`, etc.).
  - Added media queries for mobile (`2rem 0`).

- **src/styles/solutions.css**:

  - Updated `.solution-section`, `.solutions-custom`.
  - Added media queries for mobile (`2rem 0`).

- **src/styles/company.css**:

  - Updated `.company-mission`, `.company-story`, `.company-timeline`, `.company-values`, `.company-leadership`, `.company-awards`, `.company-offices`, `.company-cta`.
  - Added media queries for mobile (`2rem 0`).

- **src/styles/case-studies.css**:

  - Updated `.case-studies-filters`, `.case-studies-list`, `.case-studies-cta`.
  - Added media queries for mobile (`2rem 0`).

- **src/styles/blog.css**:

  - Updated `.featured-post`, `.blog-filters`, `.blog-grid`, `.blog-newsletter`.
  - Added media queries for mobile (`2rem 0`).

- **src/styles/case-study-detail.css**:

  - Updated `.case-study-content` mobile padding to `2rem 1.5rem`.

- **src/styles/careers.css**:
  - Updated `.careers-content` padding to `4rem 1rem` (desktop) and `2rem 1rem` (mobile).

## Design Consistency

- **Services Page**: Replaced `Stats` component with `WhyWorkWithUs` component to match Home page design.
