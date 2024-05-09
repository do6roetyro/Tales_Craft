const stripPrefixLink = (link) => {
    if (link.startsWith("mailto:")) {
        return link.replace("mailto:", "");
    } else if (link.startsWith("https://")) {
        return link.replace("https://", "");
    } else {
        return link;
    }
};

export default stripPrefixLink;