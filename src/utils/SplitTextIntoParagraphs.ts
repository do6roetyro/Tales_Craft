export default function splitTextIntoParagraphs(text : string, amountOfParagraphs : number) : string[] {
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [];
    const sentencesPerParagraph = Math.ceil(sentences.length / amountOfParagraphs);
    const paragraphs: string[] = [];

    for (let i = 0; i < amountOfParagraphs; i++) {
        const paragraph = sentences.slice(i * sentencesPerParagraph, (i + 1) * sentencesPerParagraph).join(' ');
        if (paragraph) {
            paragraphs.push(paragraph);
        }
    }

    return paragraphs;
} 


