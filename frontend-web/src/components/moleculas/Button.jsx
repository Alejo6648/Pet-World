import clsx from 'clsx';

function Button({ children, variant, className, ...props }) {
    const baseClasses = "text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-2";

    const variantClasses = {
        primary: "bg-gray-800 hover:bg-gray-900",
        success: "bg-green-800 hover:bg-green-900",
        danger: "bg-red-800 hover:bg-red-900",
        custom1: "bg-[#383C44] hover:bg-[#666A73]",
        custom2: "bg-[#666A73] hover:bg-[#383C44]"
    };

    const classes = clsx(
        baseClasses,
        variant ? variantClasses[variant] : "",
        className
    );

    return (
        <button {...props} className={classes}>
            {children}
        </button>
    );
}

export default Button;
