# Contribution Guide

Thank you for your interest in contributing to the IDP Software documentation! This guide will help you understand how to add content, structure your contributions, and submit them for review.

## Documentation Structure

The documentation is organized into the following main sections:

- **Vendors**: Information about specific IDP software vendors
- **Capabilities**: Details about technical capabilities of IDP software
- **User Guide**: General guidance on using IDP software
- **Events**: 
- **Contribution**: Guidelines for contributors (this section)

## How to Add Content

#### For Research Papers

To add a new research paper to the documentation, follow these steps:

1. **Create the research paper folder structure**:
   
   Create a new folder under `docs/research/` using the format `YYYY-MM-DD-short-title`, where the date is the publication date of the paper (e.g., `docs/research/2024-03-22-docpedia/`).

   ```
   docs/
   └── research/
       └── YYYY-MM-DD-short-title/
           ├── assets/
           │   ├── paper-overview.png
           │   └── author-last-name-year.bib
           └── index.md
   ```

2. **Create the `.pages` file**:
   
   In the research paper folder, create a `.pages` file with the following content:

   ```yaml
   title: "Short Paper Title"
   ```

   This file configures how the paper will appear in the navigation.

3. **Create the `index.md` file**:
   
   Create an `index.md` file in the research paper folder with the following template:

   ```markdown
   # Full Paper Title

   **Publication Date**: YYYY-MM-DD  
   **ArXiv Link**: [https://arxiv.org/abs/XXXX.XXXXX](https://arxiv.org/abs/XXXX.XXXXX)  
   **PDF**: [https://arxiv.org/pdf/XXXX.XXXXX](https://arxiv.org/pdf/XXXX.XXXXX)  
   **Authors**: Author 1, Author 2, etc.

   ![Paper Overview](assets/paper-overview.png)

   ## Abstract

   Copy the abstract from the paper or write a concise summary.

   ## Key Innovations

   1. **Innovation 1**: Description
   2. **Innovation 2**: Description
   3. **Innovation 3**: Description

   ## Methodology

   Describe the methodology used in the paper.

   ## Experimental Results

   Summarize the key experimental results.

   | Benchmark | Performance | Improvement over Baseline |
   |-----------|-------------|---------------------------|
   | Benchmark 1 | XX.X% | +X.X% |
   | Benchmark 2 | XX.X% | +X.X% |

   ## Implications for IDP

   Discuss how this research impacts the field of Intelligent Document Processing.

   ## Limitations and Future Work

   Highlight limitations and potential future research directions.

   ## Citation

   ```bibtex
   --8<-- "research/YYYY-MM-DD-short-title/assets/yyyy-mm-dd-author-last-name.bib"
   ```

   ## Resources

   - [Official GitHub Repository](https://github.com/link) (if available)
   - [Project Website](https://website.com) (if available)
   - [ArXiv Paper](https://arxiv.org/abs/XXXX.XXXXX)
   ```

4. **Add resources to the assets directory**:
   
   Create an `assets` directory in the research paper folder and add:
   
   - A representative image from the paper or a visual summary
   - A BibTeX citation file named with the first author's last name and year (e.g., `duggal2024docpedia.bib`)

5. **Update the research index page (optional)**:
   
   Add the paper to the table in `docs/research/index.md`:

   ```markdown
   | YYYY-MM-DD | [Paper Title](YYYY-MM-DD-short-title/) | Authors | Key Topics |
   ```

6. **No need to update navigation**:
   
   The awesome-pages plugin automatically includes all research paper folders in the navigation in reverse chronological order.

The research paper will now appear in the documentation navigation under the Research section, with the most recent papers appearing first.

#### For Vendors

To add a new vendor to the documentation, follow these steps:

1. **Create the vendor folder structure**:
   
   Create a new folder under `docs/vendors/` with the vendor's name in lowercase, using hyphens instead of spaces (e.g., `docs/vendors/vendor-name/`).

   ```
   docs/
   └── vendors/
       └── vendor-name/
           ├── assets/
           │   └── logo.png
           └── index.md
   ```

2. **Create the `.pages` file**:
   
   In the vendor folder, create a `.pages` file with the following content:

   ```yaml
   title: Vendor Name
   arrange:
     - index.md
     - ...
   ```

   This file configures how the vendor's pages will appear in the navigation. The `...` entry ensures that any additional pages you add later will be included automatically.

3. **Create the `index.md` file**:
   
   Create an `index.md` file in the vendor folder with the following template:

   ```markdown
   # Vendor Name

   [![Vendor Name Logo](assets/logo.png)](https://www.vendor-domain.com)

   Brief description of the vendor and their IDP solution.

   ## Overview

   Detailed description of the vendor's offerings, history, and position in the IDP market.

   ## Key Features

   - **Feature 1**: Description
   - **Feature 2**: Description
   - **Feature 3**: Description
   - **Feature 4**: Description
   - **Feature 5**: Description

   ## Use Cases

   ### Use Case 1

   Description of how the vendor's solution addresses this use case.

   ### Use Case 2

   Description of how the vendor's solution addresses this use case.

   ## Technical Specifications

   | Feature | Specification |
   |---------|---------------|
   | Deployment Options | Cloud, On-premise, etc. |
   | API | REST, SOAP, etc. |
   | Supported Languages | List of languages |
   | Document Formats | PDF, TIFF, etc. |
   | Integrations | List of integrations |

   ## Getting Started

   Steps to get started with the vendor's solution.

   ## Resources

   - [Vendor Website](https://vendor-website.com)
   - [Documentation](https://vendor-website.com/docs)
   - [GitHub/Resources](https://github.com/vendor)

   ## Contact Information

   - Website: [vendor-website.com](https://vendor-website.com)
   - Email: contact@vendor-website.com
   - Phone: +1 123-456-7890
   ```

4. **Add a logo placeholder**:
   
   Create an `assets` directory in the vendor folder and add a placeholder for the vendor's logo:
   
   ```
   docs/vendors/vendor-name/assets/vendor-name-logo.png
   ```
   
   If you have the actual logo, use that instead. If not, include a placeholder text file that indicates this is where the logo should go.

5. **Update the vendors index page (optional)**:
   
   If the vendor is significant or has unique features, consider adding it to the featured vendors list in `docs/vendors/index.md`:

   ```markdown
   | [Vendor Name](vendor-name/) | Specialization | Key Feature 1, Key Feature 2 |
   ```

   You may also want to add the vendor to the appropriate category section in the same file.

6. **No need to update navigation**:
   
   The awesome-pages plugin automatically includes all vendor folders with an index.md file in the navigation, so you don't need to manually update the navigation structure.

The vendor will now appear in the documentation navigation, and users can access the vendor's page to learn about their IDP solution.

> **Note**: Ensure all information is accurate and factual. If you're not affiliated with the vendor, mark the page as community-contributed and subject to review.

### Events

Follow the same structure as before.

Please make sure to capitalize the short name of the vent it will show up in the navigation on the left.

![How to add an IDP-Event](assets/event-naming.png)