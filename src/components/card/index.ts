export interface CardProps {
    id?: string | null;
    shadow?: 'shadow-sm' | 'shadow-md' | 'shadow-lg',
    position?: 'static' | 'relative'
}

export interface SpecialCardProps {
    id: string | null;
    title: string;
    image: string;
}
