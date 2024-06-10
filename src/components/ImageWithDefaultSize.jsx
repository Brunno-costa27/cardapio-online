export function ImageWithDefaultSize({src, className}){

    return (
        <img
          src={src}
        //   alt={alt}
          className={`w-full h-48 object-cover ${className}`}
        //   {...props}
        />
      );
}