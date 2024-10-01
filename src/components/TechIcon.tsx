export const TechIcon = ({ component }: { component: React.ElementType }) => {
    const Component = component;
    return (
        <div>
            <Component className="size-10 fill-[#DF3750]" />
            <svg className="size-0 absolute">
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor="rgb(110 231 183)" />
                    <stop offset="100%" stopColor="rgb(56 189 248)" />
                </linearGradient>
            </svg>
        </div>
    );
};