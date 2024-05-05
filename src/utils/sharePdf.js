import savePdf from "./savePdf.js"

const sharePdf = async (title, text, imageSrc) => {
    try {
        const fileBlob = await savePdf(title, text, imageSrc, 'share');
        if (navigator.canShare && navigator.canShare({ files: [fileBlob] })) {
            await navigator.share({
                files: [new File([fileBlob], "tale.pdf", { type: "application/pdf" })],
                title: "Share PDF",
                text: "Here is a PDF file!"
            });
            console.log("PDF shared successfully!")
        } else {
            console.error("This browser does not support sharing files.")
        }
    } catch (error) {
        console.error("Failed to share the PDF:", error);
    }
}

export default sharePdf;