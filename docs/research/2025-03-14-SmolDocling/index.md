# SmolDocling - An ultra-compact vision-language model for end-to-end multi-modal document conversion

**Publication Date**: March 14, 2025  
**ArXiv Link**: [https://arxiv.org/abs/2503.11576](https://arxiv.org/abs/2503.11576)  
**PDF**: [https://arxiv.org/pdf/2503.11576](https://arxiv.org/pdf/2503.11576)  
**Authors**: Ahmed Nassar, Andres Marafioti, Matteo Omenetti, Maksym Lysak, Nikolaos Livathinos, Christoph Auer, Lucas Morin, Rafael Teixeira de Lima, Yusik Kim, A. Said Gurbuz, Michele Dolfi, Miquel Farré, Peter W. J. Staar
**Organization**: IBM Research, HuggingFace
**Model Demo**: [https://huggingface.co/ds4sd/SmolDocling-256M-preview](https://huggingface.co/ds4sd/SmolDocling-256M-preview)

## Abstract

We introduce SmolDocling, an ultra-compact vision-language model targeting end-to-end document conversion. Our model comprehensively processes entire pages by generating DocTags, a new universal markup format that captures all page elements in their full context with location. Unlike existing approaches that rely on large foundational models, or ensemble solutions that rely on handcrafted pipelines of multiple specialized models, SmolDocling offers an end-to-end conversion for accurately capturing content, structure and spatial location of document elements in a 256M parameters vision-language model. 

SmolDocling exhibits robust performance in correctly reproducing document features such as code listings, tables, equations, charts, lists, and more across a diverse range of document types including business documents, academic papers, technical reports, patents, and forms — significantly extending beyond the commonly observed focus on scientific papers. Additionally, the authors contribute novel publicly sourced datasets for charts, tables, equations, and code recognition. Experimental results demonstrate that SmolDocling competes with other Vision Language Models that are up to 27 times larger in size, while reducing computational requirements substantially.

## Key Innovations

1. **Ultra-Compact VLM Architecture**: SmolDocling uses a compact 256M parameter model based on SmolVLM architecture, which is 5-10 times smaller than comparable document understanding models.

2. **DocTags Markup Format**: A new universal markup format that efficiently captures document content, structure, and spatial information in a single representation.

3. **End-to-End Document Conversion**: Processes entire document pages in a single pass, avoiding error accumulation issues common in ensemble approaches.

4. **Comprehensive Document Element Support**: Handles diverse document elements including text, tables, code listings, equations, charts, and more.

5. **Novel Training Datasets**: Contributes new datasets for charts, tables, equations, and code recognition to address gaps in existing resources.

## Methodology

### Model Architecture

SmolDocling builds on the SmolVLM architecture with the following components:

- **Vision Encoder**: SigLIP base patch-16/512 (93M parameters)
- **Language Model**: SmolLM-2 family (135M parameters)
- **Compression Technique**: Radical pixel shuffle method compressing each 512x512 image patch into 64 visual tokens
- **Tokenization Efficiency**: Increased pixel-to-token ratio (4096 pixels per token) with special tokens for sub-image separators

### DocTags Format

The DocTags markup format is designed to:
- Explicitly separate textual content from document structure
- Define a structured vocabulary of unambiguous tags
- Encode position and layout information through bounding box coordinates
- Support nested elements (e.g., captions within tables/figures)
- Encode table structures using OTSL (Open Table Structure Language) vocabulary

### Training Approach

SmolDocling employs a curriculum learning approach:
1. Initial adaptation of the LLM to the DocTags format with frozen vision encoder
2. End-to-end training with unfrozen vision encoder on pretraining datasets
3. Fine-tuning on task-specific datasets for tables, code, equations, and charts

## Datasets

The authors created and utilized several datasets:

1. **DocLayNet-PT**: A 1.4M page dataset extracted from DocFM with weak annotations for layout elements, table structure, language, topic, and figure classification.

2. **Task-specific datasets**:
   - **Layout**: 76K human-annotated pages (DocLayNet v2), 63K pages from WordScape, and 250K synthetic pages (SynthDocNet)
   - **Tables**: PubTables-1M, FinTabNet, WikiTableSet, and WordScape tables
   - **Charts**: 2.5M charts including line, pie, bar, and stacked bar charts generated from 90,000 tables
   - **Code**: 9.3M rendered code snippets covering 56 programming languages
   - **Equations**: 5.5M unique formulas from public datasets and arXiv

## Experimental Results

SmolDocling was evaluated on several document understanding tasks and compared to larger models:

### Text Recognition (OCR)
- **Full-page**: Outperformed Qwen2.5 VL (7B), GOT (580M), and Nougat (350M) on all metrics
- **Equations**: Matched performance of GOT and outperformed other models
- **Code listings**: Established benchmark results for code recognition

### Layout Analysis
- Significantly outperformed Qwen2.5-VL-7b on DocLayNet test set
- Still below human performance, indicating room for improvement

### Table Structure Recognition
- Competitive performance against larger models on FinTabNet and PubTables-1M
- Strong structure-only TEDS scores (0.81-0.88) even with challenges in low-resolution text transcription

### Chart Extraction
- Achieved competitive TEDS score of 0.75, despite being significantly smaller than other models

## Implications for IDP

SmolDocling represents a significant advancement for Intelligent Document Processing systems:

1. **Resource Efficiency**: Demonstrates that smaller models (256M parameters) can compete with much larger models (7B+ parameters) for document understanding tasks.

2. **Universal Document Representation**: The DocTags format provides a comprehensive representation capturing content, structure, and spatial information in a single output.

3. **Practical Deployment**: Small model size enables efficient deployment with low computational requirements (0.35 seconds per page, 0.489 GB VRAM).

4. **End-to-End Processing**: Avoids error propagation issues common in pipeline approaches by processing documents in a single pass.

5. **Multi-Element Support**: Handles diverse document elements including tables, code, equations, and charts with competitive accuracy.

## Limitations and Future Work

- **Layout Analysis**: Page element localization remains a challenge, requiring further refinement.
- **Output Defects**: Occasional missing tags, malformed structure, or token repetition.
- **Low-Resolution Performance**: Challenges with text transcription from low-resolution images.

## Citation

```bibtex
--8<-- "research/2025-03-14-smoldocling/assets/nassar2025smoldocling.bib"

```bibtex
--8<-- "research/2025-03-14-smoldocling/assets/nassar2025smoldocling.bib"
