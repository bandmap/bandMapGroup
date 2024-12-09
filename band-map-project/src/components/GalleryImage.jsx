function GalleryImage({ src, alt, isStacked }) {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={isStacked ? styles.stackedImage : styles.galleryImage}
        />
    );
}

export default GalleryImage