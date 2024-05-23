import { ReactNode } from "react";

interface ExampleComponentProps {
    children: ReactNode
}
function ExampleComponent({ children } : ExampleComponentProps) {
    return (
        <div className="exampleComponent">
            <p> Hello, this is my component! The thing below is inside of me! </p>
            {children}
        </div>
    );
}

export default ExampleComponent