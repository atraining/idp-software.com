# OCR-free Document Understanding Transformer

**Publication Date**: 2022-10-06  
**ArXiv Link**: [https://arxiv.org/abs/2111.15664](https://arxiv.org/abs/2111.15664)  
**PDF**: [https://arxiv.org/pdf/2111.15664.pdf](https://arxiv.org/pdf/2111.15664.pdf)  
**Authors**: Geewook Kim, Teakgyu Hong, Moonbin Yim, Jeongyeon Nam, Jinyoung Park, Jinyeong Yim, Wonseok Hwang, Sangdoo Yun, Dongyoon Han, Seunghyun Park

## Abstract

Understanding document images (e.g., invoices) is a core but challenging task since it requires complex functions such as reading text and a holistic understanding of the document. Current Visual Document Understanding (VDU) methods outsource the task of reading text to off-the-shelf Optical Character Recognition (OCR) engines and focus on the understanding task with the OCR outputs. Although such OCR-based approaches have shown promising performance, they suffer from 1) high computational costs for using OCR; 2) inflexibility of OCR models on languages or types of documents; 3) OCR error propagation to the subsequent process. To address these issues, in this paper, we introduce a novel OCR-free VDU model named Donut, which stands for Document understanding transformer. As the first step in OCR-free VDU research, we propose a simple architecture (i.e., Transformer) with a pre-training objective (i.e., cross-entropy loss). Donut is conceptually simple yet effective. Through extensive experiments and analyses, we show a simple OCR-free VDU model, Donut, achieves state-of-the-art performances on various VDU tasks in terms of both speed and accuracy. In addition, we offer a synthetic data generator that helps the model pre-training to be flexible in various languages and domains.

## Key Innovations

1. **OCR-free Document Understanding**: Donut eliminates the need for separate OCR processing, addressing issues of computational cost, language/domain inflexibility, and error propagation.
2. **End-to-End Transformer Architecture**: The model uses a simple but effective Transformer-based architecture with a visual encoder and textual decoder.
3. **Synthetic Data Generator (SynthDoG)**: A flexible data generation tool that enables pre-training for multiple languages and domains.
4. **Simple Pre-training Objective**: Uses cross-entropy loss for next token prediction to learn reading text from document images.

## Methodology

Donut consists of a Transformer-based visual encoder and textual decoder. The visual encoder (Swin Transformer) converts document images into embeddings, while the decoder (BART) generates structured outputs in token sequences.

The training approach follows a pre-train-and-fine-tune scheme:

1. **Pre-training Phase**: Donut learns to read text by predicting the next words, conditioning on both the image and previous text contexts. It's pre-trained on document images with text annotations, using either real documents (IIT-CDIP dataset) or synthetic data from SynthDoG.

2. **Fine-tuning Phase**: The model learns to understand documents according to downstream tasks like document classification, information extraction, or visual question answering. All tasks are framed as JSON prediction problems.

The model doesn't rely on any OCR functionality but instead directly maps document images to structured outputs in a single end-to-end pipeline.

## Experimental Results

Donut was evaluated on several document understanding tasks:

| Task | Dataset | Performance | Improvement |
|------|---------|-------------|-------------|
| Document Classification | RVL-CDIP | 93.8% | +0.1% over LayoutLMv2 |
| Information Extraction | CORD | 91.1% F1 / 82.2% Accuracy | +2.1% / +0.3% |
| Information Extraction | Ticket | 98.6% F1 / 91.7% Accuracy | +0.2% / +0.1% |
| Document VQA | DocVQA | 67.5% ANLS | Competitive with OCR-based |

Additionally, the model showed significant speed improvements:
- 1.5-2x faster than OCR-dependent methods
- Lower memory requirements
- Stable performance across datasets of varying sizes and complexities

## Implications for IDP

Donut has several significant implications for Intelligent Document Processing:

1. **Streamlined Pipeline**: By eliminating the OCR component, Donut simplifies the IDP pipeline, reducing system complexity and maintenance costs.

2. **Language Flexibility**: The synthetic data generation approach allows for easier adaptation to new languages without requiring language-specific OCR engines.

3. **Error Reduction**: Removing OCR dependency eliminates the problem of error propagation from OCR to downstream tasks.

4. **Cost Efficiency**: The end-to-end approach reduces computational costs and improves processing speed, which is crucial for large-scale document processing systems.

5. **Low-Resource Scenarios**: Donut shows robust performance even with limited training data, making it suitable for specialized document types where large datasets are unavailable.

## Limitations and Future Work

Despite its strengths, Donut has several limitations:

1. **Resolution Constraints**: The model's performance is sensitive to input resolution, with performance degrading for images with very small text.

2. **Complex Layouts**: While Donut handles many document types well, extremely complex layouts or non-standard formatting may still pose challenges.

3. **Computational Requirements**: Though faster than OCR+understanding pipelines, the model still requires significant computational resources for training.

Future work directions could include:
- Improving efficiency of attention mechanisms to handle higher resolution inputs
- Extending the approach to more complex document understanding tasks
- Developing more sophisticated pre-training objectives beyond text reading

## Citation

```bibtex
--8<-- "research/2025-03-14-smoldocling/assets/kim2022donut.bib"
```