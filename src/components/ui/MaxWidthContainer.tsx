interface MaxWidthContainerProps {
    children: React.ReactNode;
}
// className : max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
export default function MaxWidthContainer({ children }: MaxWidthContainerProps) {
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
    );
}
