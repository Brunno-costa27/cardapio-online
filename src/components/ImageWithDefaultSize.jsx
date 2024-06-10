export function ImageWithDefaultSize({src, className}){

    return (
        <img
          src={src}
        //   alt={alt}
          className={`w-full h-96 object-cover ${className}`}
        //   {...props}
        />
      );
}