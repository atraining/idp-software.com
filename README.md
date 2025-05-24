# IDP Software Documentation
# Intelligent Document Processing (IDP) Software Documentation

This repository contains comprehensive documentation about Intelligent Document Processing (IDP) software solutions, including vendor information, technical capabilities, and research papers in the field.

## Overview

The documentation is built using [MkDocs](https://www.mkdocs.org/) with the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme and is automatically deployed to GitHub Pages.

## Local Development

To work on this documentation locally:

1. Clone this repository:
   ```
   git clone https://github.com/atraining/idp-software.com.git
   cd idp-software
   ```

2. Create and activate a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Start the local development server:
   ```
   mkdocs serve
   ```

5. Open your browser and go to `http://127.0.0.1:8000/`

## Project Structure

- `docs/`: Contains all the documentation markdown files
  - `capabilities/`: Information about IDP technical capabilities
  - `vendors/`: Profiles of IDP software vendors
  - `research/`: Summaries of research papers in the field
  - `contribution/`: Guidelines for contributing to the documentation
  - `events/`: Upcoming and reports about events related to IDP-Software or document processing research
- `mkdocs.yml`: MkDocs configuration file
- `.github/workflows/`: Contains the GitHub Actions workflow for deployment

## Contributing

We welcome contributions to improve and expand this documentation! Please follow the guidelines in the [Contribution Guide](docs/contribution/index.md).

## License

This documentation is licensed under [LICENSE]. See the LICENSE file for details.
[![Deploy MkDocs](https://github.com/your-username/idp-software/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/your-username/idp-software/actions/workflows/deploy-docs.yml)

Documentation site for IDP (Intelligent Document Processing) Software, built with MkDocs and the Material theme.

### Navigation Structure

This project uses the `mkdocs-awesome-pages-plugin` to automatically include all folders with `index.md` files in the navigation. To add new content:

1. Create a folder in the appropriate section (e.g., `docs/vendors/your-vendor/`)
2. Add an `index.md` file in that folder
3. Optionally add a `.pages` file to customize the navigation order
4. Add a `assets` folder if you want to add images or other files.

For more details, see the [Contribution Guide](docs/contribution/index.md).

## Contributing

Contributions to improve the documentation are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Create your content following the structure guidelines
4. Submit a pull request

The utility script can help you create properly structured content:

## Thanks to

- [mhausenblas](https://github.com/marketplace/actions/deploy-mkdocs)
- [Tom Christie and all contributors of MkDocs](https://github.com/mkdocs/mkdocs/blob/master/docs/index.md)
- [Material for MkDocs](https://github.com/squidfunk/mkdocs-material)
