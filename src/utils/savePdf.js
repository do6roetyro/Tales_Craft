import { jsPDF } from 'jspdf';
import fontBase64 from './fontBase64.js';

// const AMOUNT_OF_PARAGRAPHS = 4; // Количество параграфов для разбиения текста
const DEFAULT_FONT_SIZE = 16; // Размер шрифта для текста
const TITLE_FONT_SIZE = 24;  // Размер шрифта  для заголовка
const TITLE_X = 10; // Координата X для начала заголовка (используется для левого выравнивания)
const TITLE_Y = 20; // Координата Y для заголовка, расстояние от верха страницы
const START_Y = 40; // Начальная координата Y для текста после заголовка
const LINE_HEIGHT = 10; // Высота строки текста (используется для расстояния между строками)
const IMAGE_X = 10; // Координата X для изображения, выравнивание слева
const IMAGE_WIDTH = 180; // Ширина изображения в PDF
const IMAGE_HEIGHT = 180; // Высота изображения в PDF
const MAX_PAGE_HEIGHT = 280; // Максимальная высота страницы, после которой текст или изображение переходит на новую страницу
const PAGE_WIDTH = 210; // Общая ширина страницы A4 в миллиметрах
const TEXT_WIDTH = 190; // Максимальная ширина текстового блока, определяет, как длинные строки будут переноситься
const NEW_PAGE_TOP_MARGIN = 10; // Отступ сверху для новой страницы при добавлении текста или изображения

const savePdf = async (title, text, imageSrc, action = 'save') => {
    console.log("Saving PDF...");
    const doc = new jsPDF();
    doc.addFileToVFS('OpenSans_regular.ttf', fontBase64);
    doc.addFont('OpenSans_regular.ttf', 'OpenSans', 'normal');
    doc.setFont('OpenSans');
    doc.setFontSize(TITLE_FONT_SIZE);
    doc.text(title, PAGE_WIDTH / 2, TITLE_Y, { align: 'center' });
    doc.setFontSize(DEFAULT_FONT_SIZE);

    const paragraphs = text.split('\n');
    let cursorY = START_Y;
    paragraphs.forEach(paragraph => {
        let lines = doc.splitTextToSize(paragraph, TEXT_WIDTH);
        lines.forEach(line => {
            if (cursorY > MAX_PAGE_HEIGHT) {
                doc.addPage();
                cursorY = NEW_PAGE_TOP_MARGIN;
            }
            doc.text(line, TITLE_X, cursorY);
            cursorY += LINE_HEIGHT;
        });
    });

    if (imageSrc) {
        if (cursorY + IMAGE_HEIGHT > MAX_PAGE_HEIGHT) {
            doc.addPage();
            cursorY = NEW_PAGE_TOP_MARGIN;
        }

        try {
            const response = await fetch(`https://tales-craft.ru/imageProxy.php?imageSrc=${encodeURIComponent(imageSrc)}`);
            const imageData = await response.arrayBuffer();
            doc.addImage(imageData, 'PNG', IMAGE_X, cursorY, IMAGE_WIDTH, IMAGE_HEIGHT);
        } catch (error) {
            console.error("Failed to fetch or add the image:", error);
        }
    }

    if (action === 'save' && !imageSrc) {
        doc.save('tale.pdf');
    } else if (action === 'share') {
        return doc.output('blob')
    }

};

export default savePdf 


  // if (imageSrc) {
    //     // const proxiedImageSrc = `http://localhost:8080/${imageSrc}`;

    //     if (cursorY + IMAGE_HEIGHT > MAX_PAGE_HEIGHT) {
    //         doc.addPage();
    //         cursorY = NEW_PAGE_TOP_MARGIN;
    //     }

    //     try {
    //         const response = await fetch(imageSrc);
    //         const blob = await response.blob();
    //         const reader = new FileReader();
    //         console.log(reader)

    //         reader.onload = () => {
    //             const imageData = reader.result;
    //             if (imageData && imageData.startsWith('data:image/png')) { // Проверка на правильный Data URL
    //                 try {
    //                     doc.addImage(imageData, 'PNG', IMAGE_X, cursorY, IMAGE_WIDTH, IMAGE_HEIGHT);
    //                     doc.save('tale.pdf');
    //                 } catch (error) {
    //                     console.error("Error adding image to PDF:", error);
    //                 }
    //             } else {
    //                 console.error("Invalid or corrupt image data.");
    //             }
    //         };

    //         reader.onerror = () => {
    //             console.error("Error reading the image blob.");
    //         };

    //         reader.readAsDataURL(blob);
    //     } catch (error) {
    //         console.error("Failed to fetch the image:", error);
    //     }
    // }

    // if (action === 'save' && !imageSrc) {
    //     doc.save('tale.pdf');
    // } else if (action === 'share') {
    //     return doc.output('blob')
    // }